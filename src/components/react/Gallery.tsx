import type { ProjectImage } from "@/types/projectImages.type";

interface GalleryProps {
  images: ProjectImage[][];
}
export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {images.map((chunk, index) => (
        <div className="grid gap-4" key={index}>
          {chunk.map((image, index) => (
            <div key={image.alt}>
              <img className="max -w-full h-auto rounded-lg" src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
