"use client";

import { useEffect, useRef } from "react";

const SPACING = 24; // grid pitch
const RADIUS = 1.5; // dot radius
const PUSH_RADIUS = 120; // how close before a dot gets shoved
const PUSH_FORCE = 1800;
const GLOW_RADIUS = 200; // how close before a dot brightens
const SPRING = 0.08; // pull back to rest
const DAMPING = 0.82;
const STEP = 0.016;
const LEVELS = 16; // quantised shades, so the whole grid draws in 16 fills

type Dot = {
  restX: number;
  restY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  brightness: number;
  dist: number;
};

type Palette = { shades: string[] };

function readPalette(): Palette {
  const style = getComputedStyle(document.documentElement);
  const rgb = (name: string, fallback: number[]) => {
    const parts = style.getPropertyValue(name).trim().split(/[\s,]+/).map(Number);
    return parts.length === 3 && parts.every((n) => Number.isFinite(n)) ? parts : fallback;
  };
  const num = (name: string, fallback: number) => {
    const value = Number.parseFloat(style.getPropertyValue(name));
    return Number.isFinite(value) ? value : fallback;
  };

  const base = rgb("--dot-rgb", [16, 27, 34]);
  const high = rgb("--dot-hi-rgb", [23, 88, 127]);
  const alphaLow = num("--dot-alpha", 0.1);
  const alphaHigh = num("--dot-alpha-hi", 0.5);

  // one rgba string per shade: colour warms towards the accent as it brightens
  const shades = Array.from({ length: LEVELS }, (_, i) => {
    const t = i / (LEVELS - 1);
    const mix = (a: number, b: number) => Math.round(a + (b - a) * t);
    const alpha = (alphaLow + (alphaHigh - alphaLow) * t).toFixed(3);
    return `rgba(${mix(base[0], high[0])}, ${mix(base[1], high[1])}, ${mix(base[2], high[2])}, ${alpha})`;
  });

  return { shades };
}

/**
 * The dot grid the page sits on, drawn to a canvas so it can react: dots are
 * pushed out of the pointer's way and brighten as it passes, then spring back
 * to their place on the grid.
 *
 * Reduced-motion viewers get the same grid, drawn once and left alone.
 */
export function DotCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    let palette = readPalette();
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };
    const buckets: Dot[][] = Array.from({ length: LEVELS }, () => []);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const dark = window.matchMedia("(prefers-color-scheme: dark)");

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      for (let x = SPACING / 2; x < width; x += SPACING) {
        for (let y = SPACING / 2; y < height; y += SPACING) {
          dots.push({
            restX: x,
            restY: y,
            x,
            y,
            vx: 0,
            vy: 0,
            brightness: 0.72 + Math.random() * 0.28,
            dist: Infinity,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const bucket of buckets) bucket.length = 0;

      for (const dot of dots) {
        // smoothstep on proximity, nudged by the dot's own brightness
        const near = Math.max(0, 1 - dot.dist / GLOW_RADIUS);
        const lit = near * near * (3 - 2 * near) * dot.brightness;
        const level = Math.min(LEVELS - 1, Math.round(lit * (LEVELS - 1)));
        buckets[level].push(dot);
      }

      for (let level = 0; level < LEVELS; level += 1) {
        const bucket = buckets[level];
        if (!bucket.length) continue;
        ctx.fillStyle = palette.shades[level];
        ctx.beginPath();
        for (const dot of bucket) {
          ctx.moveTo(dot.x + RADIUS, dot.y);
          ctx.arc(dot.x, dot.y, RADIUS, 0, Math.PI * 2);
        }
        ctx.fill();
      }
    };

    const still = () => {
      for (const dot of dots) dot.dist = Infinity;
      draw();
    };

    const frame = () => {
      for (const dot of dots) {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        dot.dist = Math.sqrt(dx * dx + dy * dy);

        const d = Math.max(dot.dist, 12);
        if (d < PUSH_RADIUS) {
          const falloff = 1 - d / PUSH_RADIUS;
          const force = (PUSH_FORCE * falloff * falloff) / d;
          dot.vx += (dx / d) * force * STEP;
          dot.vy += (dy / d) * force * STEP;
        }

        dot.vx += (dot.restX - dot.x) * SPRING;
        dot.vy += (dot.restY - dot.y) * SPRING;
        dot.vx *= DAMPING;
        dot.vy *= DAMPING;
        dot.x += dot.vx;
        dot.y += dot.vy;
      }

      draw();
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (raf || reduced.matches || document.hidden) return;
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      if (!raf) return;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onResize = () => {
      build();
      if (reduced.matches) still();
    };

    const onMove = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      start();
    };

    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    const onTheme = () => {
      palette = readPalette();
      if (reduced.matches || !raf) draw();
    };

    build();
    if (reduced.matches) {
      still();
    } else {
      draw();
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
      document.addEventListener("visibilitychange", onVisibility);
    }

    window.addEventListener("resize", onResize);
    dark.addEventListener("change", onTheme);
    // the theme switch stamps data-theme on <html>
    const themeWatcher = new MutationObserver(onTheme);
    themeWatcher.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      stop();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      dark.removeEventListener("change", onTheme);
      themeWatcher.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="dot-canvas" aria-hidden="true" />;
}
