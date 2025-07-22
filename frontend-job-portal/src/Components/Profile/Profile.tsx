import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import {
  IconBriefcase,
  IconDeviceFloppy,
  IconEdit,
  IconMapPin,
  IconPlus,
} from "@tabler/icons-react";

import CertiCard from "./CertiCard";
import ExpCard from "./ExpCard";
import { useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../../Data/Profile";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";

const Profile = (props: any) => {
  const select = fields;
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [about, setAbout] = useState(props.about);
  const [skills, setSkills] = useState(props.skills);
  const [addExp, setAddExp] = useState(false);
  const [addCerti, setAddCerti] = useState(false);
  const handleEdit = (index: any) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };
  return (
    <div className="w-4/5 mx-auto">
      <div className="ml-3 relative">
        <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
        <img
          className="w-48 h-48 absolute -bottom-1/3 left-3 border-6 border-gray-700 rounded-full"
          src="/avatar.png"
          alt=""
        />
      </div>

      <div className="px-3 mt-24">
        <div className="text-3xl font-semibold flex justify-between">
          {props.name}{" "}
          <ActionIcon
            variant="subtle"
            color="#FFB900"
            aria-label="Edit"
            onClick={() => handleEdit(0)}
          >
            {edit[0] ? <IconDeviceFloppy /> : <IconEdit />}
          </ActionIcon>
        </div>

        {edit[0] ? (
          <>
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput {...select[0]} />
              <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
          </>
        ) : (
          <>
            <div className="text-xl gap-1 flex items-center">
              {" "}
              <IconBriefcase stroke={1.5} className="h-5" /> {props.role}
              &bull; {props.company}{" "}
            </div>

            <div className="text-lg flex gap-1 items-center text-gary-300">
              {" "}
              <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}{" "}
            </div>
          </>
        )}
      </div>

      <Divider my="xl" mx="xs" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          About{" "}
          <ActionIcon
            variant="subtle"
            color="#FFB900"
            aria-label="Edit"
            onClick={() => handleEdit(1)}
          >
            {edit[1] ? <IconDeviceFloppy /> : <IconEdit />}
          </ActionIcon>
        </div>
        {edit[1] ? (
          <Textarea
            value={about}
            onChange={(event) => setAbout(event.currentTarget.value)}
            autosize
            minRows={3}
            placeholder="Enter about yourself"
          />
        ) : (
          <div className="text-sm text-gray-300 text-justify">{about}</div>
        )}
      </div>

      <Divider my="xl" mx="xs" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          Skills{" "}
          <ActionIcon
            variant="subtle"
            color="#FFB900"
            aria-label="Edit"
            onClick={() => handleEdit(2)}
          >
            {edit[2] ? <IconDeviceFloppy /> : <IconEdit />}
          </ActionIcon>
        </div>
        {
          edit[2] ? <TagsInput placeholder="Add Skills" splitChars={[',', ' ', '|']}  value={skills}
            onChange={(value) => setSkills(value)}  />  : <div className="flex flex-wrap gap-2">
          {skills.map((skill: any, index: any) => (
            <div
              key={index}
              className="bg-amber-100/15 px-4 py-1 rounded-3xl text-amber-500"
            >
              {skill}
            </div>
          ))}
        </div>
        }


        
      </div>

      <Divider my="xl" mx="xs" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Experience{" "}
          <div className="flex gap-4">
            <ActionIcon color="#FFB900"onClick={() => setAddExp(!addExp)} variant="subtle"><IconPlus /></ActionIcon>
            <ActionIcon
            variant="subtle"
            color="#FFB900"
            aria-label="Edit"
            onClick={() => handleEdit(3)}
          >
            {edit[3] ? <IconDeviceFloppy /> : <IconEdit />}
          </ActionIcon></div>
        </div>
        {props.experience.map((ex: any, index: any) => (
          <ExpCard key={index} {...ex} edit={edit[3]} />
        ))}
        {addExp && <ExpInput add setEdit={setAddExp}/>}
      </div>

      <Divider my="xl" mx="xs" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Certifications{" "}
          <div className="flex gap-4">
            <ActionIcon color="#FFB900" onClick={() => setAddCerti(!addCerti)} variant="subtle"><IconPlus /></ActionIcon>
          <ActionIcon
            variant="subtle"
            color="#FFB900"
            aria-label="Edit"
            onClick={() => handleEdit(4)}
          >
            {edit[4] ? <IconDeviceFloppy /> : <IconEdit />}
          </ActionIcon></div>
        </div>
        {props.certifications.map((ex: any, index: any) => (
          <CertiCard edit={edit[4]} key={index} {...ex} />
        ))}
        {addCerti && <CertiInput setEdit={setAddCerti}/>}
      </div>
    </div>
  );
};

export default Profile;
