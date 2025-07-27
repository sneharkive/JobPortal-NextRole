import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../../Data/TalentData";
import TalentCard from "../FindTalents/TalentCard";

const PostedJobDesc = (props:any) => {
  return (
    <div className="mt-5 w-3/4 px-5">
{ props.jobTitle? <>      <div className="text-2xl font-semibold flex items-center">
       {props.jobTitle}{" "}
        <Badge variant="light" color="yellow" ml="sm">
          {props.jobStatus}
        </Badge>
      </div>

      <div className="font-medium text-gray-400 mb-6">
        {props.location}
      </div>
      <div>
        <Tabs variant="pills" autoContrast radius="lg" defaultValue="overview">
          <Tabs.List className="[&_button]:!text-lg mb-5 font-semibold text-white [&_button[aria-selected='false']]:!bg-zinc-700 [&_button[data-active='true']]:!bg-amber-300 [&_button[data-active='true']]:!text-amber-800">
            <Tabs.Tab value="overview">Overview </Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
            <Tabs.Tab value="offered">Offered</Tabs.Tab>
            <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" className="[&>div]:w-full">
            <JobDesc edit {...props} />
          </Tabs.Panel>
          <Tabs.Panel value="applicants">
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {props.applicants?.filter((x:any) => x.applicationStatus == "APPLIED" ).map((tal:any, index:number) => (
                <TalentCard key={index} {...tal} posted={true} />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invited">
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {props.applicants?.filter((x:any) => x.applicationStatus == "INTERVIEWING" ).map((tal:any, index:any) => (
                <TalentCard key={index} {...tal} invited={true} />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="offered">
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {props.applicants?.filter((x:any) => x.applicationStatus == "OFFERED" ).map((tal:any, index:any) => (
                <TalentCard key={index} {...tal} offered={true} />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="rejected">
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {props.applicants?.filter((x:any) => x.applicationStatus == "REJECTED" ).map((tal:any, index:any) => (
                <TalentCard key={index} {...tal} rejected={true} />
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div> </> : <div className="text-2xl font-semibold flex justify-center items-center min-h-[65vh]">No Job Selected</div> }


    </div>
  );
};

export default PostedJobDesc;
