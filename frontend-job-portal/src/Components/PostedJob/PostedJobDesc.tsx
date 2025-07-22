import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../../Data/TalentData";
import TalentCard from "../FindTalents/TalentCard";

const PostedJobDesc = () => {
  return (
    <div className="mt-5 w-3/4 px-5">
      <div className="text-2xl font-semibold flex items-center">
        Software Engineer{" "}
        <Badge variant="light" color="yellow" ml="sm">
          Badge
        </Badge>
      </div>

      <div className="font-medium text-gray-400 mb-6">
        New York, United States
      </div>
      <div>
        <Tabs variant="pills" autoContrast radius="lg" defaultValue="overview">
          <Tabs.List className="[&_button]:!text-lg mb-5 font-semibold text-white [&_button[aria-selected='false']]:!bg-zinc-700 [&_button[data-active='true']]:!bg-amber-300 [&_button[data-active='true']]:!text-amber-800">
            <Tabs.Tab value="overview">Overview </Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" className="[&>div]:w-full">
            <JobDesc edit />
          </Tabs.Panel>
          <Tabs.Panel value="applicants">
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {talents.map((tal, index) => (
                <TalentCard key={index} {...tal} posted />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invited">
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {talents.map((tal, index) => (
                <TalentCard key={index} {...tal} invited />
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJobDesc;
