import Image from "next/image";
import { profile } from "@/content/profile";
import { Icon } from "./Icon";
import { Rise } from "./Rise";

export function Gallery() {
  const { gallery, photos } = profile;

  return (
    <section className="section" id="gallery">
      <div className="wrap">
        <Rise className="section__head">
          <div>
            <p className="eyebrow">{gallery.eyebrow}</p>
            <h2 className="section__title">
              <Icon name="heart" />
              {gallery.title}
            </h2>
          </div>
          <p className="section__note">{gallery.note}</p>
        </Rise>

        <div className="gallery">
          {photos.gallery.map((photo, index) => (
            <Rise as="figure" className="shot" key={photo.caption} delay={index * 80}>
              <div className="shot__frame" style={{ aspectRatio: photo.ratio }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 46rem) 32vw, 92vw"
                  className="shot__img"
                />
              </div>
              <figcaption>{photo.caption}</figcaption>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}
