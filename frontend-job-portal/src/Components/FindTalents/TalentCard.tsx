import { Divider, Button, Modal } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { IconHeart, IconCalendarMonth, IconMapPin } from "@tabler/icons-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";


const TalentCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);


  return (
    <div className="max-w-[460px] min-h-[450px] flex flex-col gap-6 my-4 bg-zinc-800 p-6 rounded-xl hover:border-amber-400 hover:border-2 ">
      <div className="flex justify-between gap-4">
        <div className="p-2 rounded-xl bg-zinc-700 h-12">
          <img className="w-8 h-8" src={`/${props.image}.png`} alt="" />
        </div>
        <div>
          <div>{props.name}</div>
          <div className="text-gray-500">
            {props.role} &#x2022; {props.company} Applicants
          </div>
        </div>
        <div>
          <IconHeart className="text-gray-300 cursor-pointer hover:scale-108" />
        </div>
      </div>

      <div className="flex justify-between text-sm">
        {props.topSkills.map((skills: string, index: number) => (
          <div
            key={index}
            className="px-4 pb-1 rounded-lg text-amber-400 bg-zinc-700"
          >
            {skills}
          </div>
        ))}
      </div>

      <div className="text-justify text-sm">{props.about}</div>

      <Divider />

      {props.invited ? <div className="flex gap-1 text-gray-400 text-sm items-center"> <IconCalendarMonth  /> Interview: August 27, 2024 10:00 AM </div> :<div className="flex justify-between text-sm">
        <div>{props.expectedCtc}</div>
        <div className="flex items-center text-sm text-gray-400">
          <IconMapPin stroke={1.5} className="h-4 " /> {props.location}
        </div>
      </div>}

      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
       {!props.invited && <> <Link to="/talent-profile">
          <Button color="#FDC700" fullWidth variant="outline">
            Profile
          </Button>
        </Link>
        <div>
          {props.posted ? (
            <Button
              color="#FDC700"
              onClick={open}
              fullWidth
              variant="light"
              rightSection={<IconCalendarMonth />}
            >
              Schedule
            </Button>
          ) : (
            <Button color="#FDC700" fullWidth variant="light">
              Message
            </Button>
          )}
        </div>
        </>
        }

        {
          props.invited && <>
          <div>
            <Button color="#FDC700" fullWidth variant="outline">
            Accept 
          </Button>
          </div>
          <div>
            <Button color="red" fullWidth variant="light">
            Reject
          </Button>
          </div>
          
          </>
        }
      
      
      
      
      </div>
      <Modal
        opened={opened}
        onClose={close}
        centered
        title="Schedule Interview"
      >
        <div className="flex flex-col gap-4">
          <DateInput
            value={value}
            onChange={setValue}
            label="Date"
            placeholder="Enter Date"
            minDate={new Date()}
            color="#FDC700"
          />
          <TimeInput
          color="#FDC700"
            label="Time"
            ref={ref}
            onClick={() => ref.current?.showPicker()}
          />
          <Button color="#FDC700" fullWidth variant="light">
              Schedule
            </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
