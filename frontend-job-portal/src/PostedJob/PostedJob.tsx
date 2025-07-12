import { Tabs } from "@mantine/core";
import { activeJobs } from "../Data/PostedJob";
import PostedJobCard from "./PostedJobCard";

const PostedJob = () => {
  return (
    <div className="w-1/6 mt-5">
      <div className="text-2xl font-semibold mb-8">PostedJob</div>
      <div>
          <Tabs variant="pills" autoContrast radius="lg" defaultValue="active">
            <Tabs.List className="[&_button]:!text-lg mb-5 font-semibold text-white [&_button[aria-selected='false']]:!bg-zinc-700 [&_button[data-active='true']]:!bg-amber-300 [&_button[data-active='true']]:!text-amber-800">
              <Tabs.Tab value="active">Active [4] </Tabs.Tab>
              <Tabs.Tab value="draft">Draft [1]</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="active">
              <div className="flex flex-col gap-4">
                {
                  activeJobs.map((item, index) => <PostedJobCard key={index} {...item} />)
                }
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="draft">dd</Tabs.Panel>
          </Tabs>
        </div>
    </div>
  );
};

export default PostedJob;
