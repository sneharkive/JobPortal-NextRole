import { ActionIcon } from "@mantine/core";
import {  IconTrash } from "@tabler/icons-react";

const CertiCard = (props: any) => {
  return (
    <div className="flex justify-between mb-4">
      <div className="flex gap-4 items-center">
        <div className="p-2 rounded-lg bg-zinc-700">
          <img className="w-7" src={`/Icons/${props.issuer}.png`} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{props.name}</div>
          <div className="text-gray-500">{props.issuer}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <div className="text-sm text-gary-300">{props.issueDate}</div>
          <div className="text-sm text-gary-300">
            ID : {props.certificateId}
          </div>
        </div>
       {props.edit && <ActionIcon
          variant="subtle"
          color="red.8"
          size="md"
        >
          <IconTrash stroke={1.5} className="h-5/6 w-5/6"/>
        </ActionIcon>}
      </div>
    </div>
  );
};

export default CertiCard;
