import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  Notification,
  NumberInput,
  rem,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplicationForm from "./ApplicationForm";
import { timeAgo } from "../../Service/Utilities";

const ApplyJobComp = (props:any) => {
  // const [preview, setPreview] = useState(false);
  // const [submit, setSubmit] = useState(false);
  // const [sec, setSec] = useState(5);

  // const navigate = useNavigate();

  // const handlePreview = () => {
  //   setPreview(!preview);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // const handleSubmit = () => {
  //   setSubmit(true);
  //   let x = 5;
  //   setInterval(() => {
  //     x--;
  //     setSec(x);

  //     if (x == 0) navigate("/find-jobs");
  //   }, 1000);
  // };

  return (
      <div className="w-2/3 mx-auto">

        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <div className="p-3 rounded-xl bg-zinc-700">
              <img className="w-14" src={`/Icons/${props.company}.png`} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-semibold">{props.jobTitle}</div>
              <div className="text-gray-500 text-lg">
                {props.company} &bull; {timeAgo(props.postTime)}&bull; {props.applicants? props.applicants.length : 0}
              </div>
            </div>
          </div>
        </div>
        <Divider my="xl" />

        <ApplicationForm />


      </div>

  );
};

export default ApplyJobComp;
