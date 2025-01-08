import { designsImages } from "@/lib/data/designsImages";
import { animations, videos } from "@/lib/data/projectsVideos";
import Gallery from "./Gallery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

export default function ProjectTabs() {
  return (
    <Tabs
      className="mt-4 flex flex-col justify-center gap-12 sm:block sm:gap-0 xl:mt-0"
      defaultValue="laboral-experience"
    >
      <TabsList className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-14">
        <TabsTrigger value="laboral-experience">Designs</TabsTrigger>
        <TabsTrigger value="education">Videos</TabsTrigger>
        <TabsTrigger value="certificates">Animations</TabsTrigger>
      </TabsList>
      <div className="flex h-full w-full justify-center">
        <TabsContent value="laboral-experience">
          <div className="animate-fade-left">
            <Gallery images={designsImages} />
          </div>
        </TabsContent>
        <TabsContent value="education">
          <div className="grid w-full animate-fade-left gap-10 md:grid-cols-1 xl:grid-cols-2">
            {videos.map((video, index) => (
              <iframe
                key={index}
                width={560}
                height={315}
                src={video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="certificates">
          <div className="grid animate-fade-left gap-10 md:grid-cols-1 xl:grid-cols-2">
            {animations.map((animation, index) => (
              <iframe
                key={index}
                width={560}
                height={315}
                src={animation}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
}
