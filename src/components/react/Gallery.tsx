import type { ProjectImage } from "@/types/projectImages.type";

interface GalleryProps {
  images: ProjectImage[];
}
export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="container px-5 md:columns-3 xl:columns-5 xl:px-0">
      {images.map((image, index) => (
        <img
          loading="lazy"
          key={index}
          className="mb-5 h-auto w-full rounded-lg"
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
