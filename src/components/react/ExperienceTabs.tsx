import Books from "@/icons/react/Books";
import Building from "@/icons/react/Building";
import Certificate from "@/icons/react/Certificate";
import { certificates } from "@/lib/data/certificates";
import { education } from "@/lib/data/education";
import { laboralExperience } from "@/lib/data/laboralExperience";
import ExperienceTimeLine from "./ExperienceTimeLine";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

export default function ExperienceTabs() {
  return (
    <Tabs className="flex flex-col justify-center gap-12 sm:block sm:gap-0" defaultValue="laboral-experience">
      <TabsList className="flex flex-col justify-center gap-3 md:flex-row md:gap-14">
        <TabsTrigger value="laboral-experience">
          <Building />
          Laboral Experience
        </TabsTrigger>
        <TabsTrigger value="education">
          <Books />
          Education
        </TabsTrigger>
        <TabsTrigger value="certificates">
          <Certificate />
          Certificates
        </TabsTrigger>
      </TabsList>
      <div className="flex h-full w-full justify-center px-5 xl:px-0">
        <TabsContent value="laboral-experience">
          <ExperienceTimeLine data={laboralExperience} />
        </TabsContent>
        <TabsContent value="education">
          <ExperienceTimeLine data={education} />
        </TabsContent>
        <TabsContent value="certificates">
          <ExperienceTimeLine data={certificates} />
        </TabsContent>
      </div>
    </Tabs>
  );
}
