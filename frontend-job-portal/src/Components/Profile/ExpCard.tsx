import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";
import { formateDate } from "../../Service/Utilities";


const ExpCard = (props:any) => {
  const [edit, setEdit] = useState(props.edit);
  return !edit ?  (
    <div className="flex flex-col gap-3 mb-8">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div className="p-2 rounded-lg bg-zinc-700">
            <img className="w-7" src={`/Icons/Google.png`} alt="" />
          </div>
          <div>
            <div>{props.title}</div>
            <div className="text-gray-500">
              {props.company} &#x2022; {props.location}
            </div>

          </div>
        </div>
          <div>
            <div className="text-sm text-gary-300">{formateDate(props.startDate)} - {formateDate(props.endDate)}</div>
          </div>
      </div>
          <div className="text-sm text-gray-400 text-just">{props.description}</div>
          {
            props.edit && <div className="flex gap-6">
            <Button onClick={() => setEdit(true)} color="yellow" variant="outline">Edit</Button>
            <Button color="red" variant="light">Delete</Button>
          </div>
          }

    </div>
  ):<ExpInput setEdit={setEdit} desc = {props.description}/>

};

export default ExpCard;
