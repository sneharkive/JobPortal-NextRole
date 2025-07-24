import { useState } from "react";
import fields from "../../Data/Profile";
import { ActionIcon } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconDeviceFloppy,
  IconEdit,
  IconBriefcase,
  IconMapPin,
  IconCheck,
  IconX,
} from "@tabler/icons-react";
import SelectInput from "./SelectInput";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { SuccessNotification } from "../../Service/NotificationService";

const Info = () => {
  const select = fields;
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);
  const user = useSelector((state: any) => state.user);
  const [edit, setEdit] = useState(false);

  const handleClick = () => {
    if (!edit) {
      setEdit(true);
      form.setValues({});
    } else {
      setEdit(false);
    }
  };

  const form = useForm({
    mode: "controlled",
    initialValues: { jobTitle: "", company: "", location: "" },
  });

  const handleSave = ( ) => {
    setEdit(false);
      let updatedProfile = { ...profile, ...form.getValues() };
      dispatch(changeProfile(updatedProfile));
      SuccessNotification("Success", "Profile updated successfully");
  }

  return (
    <>
      <div className="text-3xl font-semibold flex justify-between">
        {user.name}{" "}
        <div>
          {edit && <ActionIcon
            variant="subtle"
            color="#FFB900"
            aria-label="Edit"
            onClick={handleSave}
          >
            <IconCheck color="green" />
          </ActionIcon>}
          <ActionIcon
            variant="subtle"
            color="#FFB900"
            aria-label="Edit"
            onClick={handleClick}
          >
            {edit ? <IconX color="red" /> : <IconEdit />}
          </ActionIcon>
        </div>
      </div>

      {edit ? (
        <>
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name="jobTitle" {...select[0]} />
            <SelectInput form={form} name="company" {...select[1]} />
          </div>
          <SelectInput form={form} name="location" {...select[2]} />
        </>
      ) : (
        <>
          <div className="text-xl gap-1 flex items-center">
            <IconBriefcase stroke={1.5} className="h-5" />
            {profile.jobTitle}
            {"    "}
            &bull;{"   "}
            {profile.company}{" "}
          </div>

          <div className="text-lg flex gap-1 items-center text-gary-300">
            {" "}
            <IconMapPin className="h-5 w-5" stroke={1.5} />
            {profile.location}{" "}
          </div>
        </>
      )}
    </>
  );
};

export default Info;
