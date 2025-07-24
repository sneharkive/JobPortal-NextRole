import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { card } from "../../Data/JobDescData";
import { timeAgo } from "../../Service/Utilities";

const JobDesc = (props:any) => {
  const data = DOMPurify.sanitize(props.description);

  return (
    <div className="w-2/3">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div className="p-3 rounded-xl bg-zinc-700">
            <img className="w-14" src={`/Icons/${props.company}.png`} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-semibold">{props.jobTitle}</div>
            <div className="text-gray-500 text-lg">
              {props.company} &bull; {timeAgo(props.postedDate)} &bull; {props.applicants? props.applicants.length : 0} applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link to={`/apply-job/${props.id}`} className="w-full"  >
            <Button className="!text-xl !pb-1" color="#FDC700" variant="light">
              {props.edit?"Edit":"Apply"}
            </Button>
          </Link>
          {props.edit?<Button className="!text-xl !pb-1" color="red" variant="outline">
              Delete
            </Button>:
          <IconBookmark className="text-amber-400/50 cursor-pointer hover:scale-108" />
            }
        </div>
      </div>
      <Divider my="xl" />

      <div className="flex justify-between ">
        {card.map((item: any, index: any) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon
              variant="light"
              color="rgba(245, 193, 64, 1)"
              size="lg"
              radius="xl"
              aria-label="Settings"
              className="!h-12 !w-12"
            >
              <item.icon
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
                className="h-4/5 w-4/5"
              />
            </ActionIcon>
            <div className="text-gray-400">{item.name}</div>
            <div className="font-semibold text-gray-300">{props?props[item.id]: "NA"} {item.id == "packageOffered" && <>LPA</>}</div>
          </div>
        ))}
      </div>

      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">Required Skills</div>
        <div className="flex flex-wrap gap-2">
          {props?.skillsRequired?.map((sk:any, index:number) => (
            <ActionIcon
              variant="light"
              color="rgba(245, 193, 64, 1)"
              size="lg"
              radius="xl"
              aria-label="Settings"
              className="!h-fit !w-fit !font-medium !text-sm"
              p="xs"
              key={index}
            >
              {sk}
            </ActionIcon>
          ))}
        </div>
      </div>

      <Divider my="xl" />

      <div
        className="[&_h4]:text-xl [&_*]:text-gray-500 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-gray-300 [&_p]:text-justify [&_li]:mb-2 [&_li]:marker:text-amber-300"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
      <Divider my="xl" />

      <div>
        <div className="text-xl font-semibold mb-5">About Company</div>
        <div>
          <div className="flex justify-between mb-3 text-justify">
            <div className="flex gap-4 items-center">
              <div className="p-3 rounded-xl bg-zinc-700">
                <img className="h-8" src={`/Icons/${props.company}.png`} alt="" />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold">{props.company}</div>
                <div className="text-gray-500">10K+ Employees</div>
              </div>
            </div>
            <Link to={`/company/${props.company}`} className="w-full">
              <Button
                className="!text-lg !pb-1"
                color="#FDC700"
                variant="light"
              >
                Company Page
              </Button>
            </Link>
          </div>

          <div className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            numquam ullam soluta sunt vel corrupti quibusdam quae! Culpa dicta,
            asperiores odio, sed vero ex aliquam quae quos animi dolores
            debitis.
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
