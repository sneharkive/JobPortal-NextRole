import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import {
  IconDeviceFloppy,
  IconEdit,
  IconPlus,
} from "@tabler/icons-react";

import CertiCard from "./CertiCard";
import ExpCard from "./ExpCard";
import { useEffect, useState } from "react";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Service/ProfileService";
import Info from "./Info";
import { setProfile } from "../../Slices/ProfileSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.profile);
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [about, setAbout] = useState(profile.about);
  // const [skills, setSkills] = useState (profile.skills);
  const [skills, setSkills] = useState<string[]>(profile.skills || []);
  const [addExp, setAddExp] = useState(false);
  const [addCerti, setAddCerti] = useState(false);
  const handleEdit = (index: any) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  useEffect(() => {
    console.log(profile)
    getProfile(user.id).then((data:any) => {
      dispatch(setProfile(data));
      console.log(data);
    }).catch((err:any) => {
      console.log(err);
    })
  }, [])


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
        <Info />
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
            value={profile.about}
            onChange={(event) => setAbout(event.currentTarget.value)}
            autosize
            minRows={3}
            placeholder="Enter about yourself"
          />
        ) : (
          <div className="text-sm text-gray-300 text-justify">{profile.about}</div>
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
          {profile?.skills?.map((skill: any, index: any) => (
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
        {profile?.experiences?.map((ex:any, index:number) => (
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
        {profile?.certifications?.map((ex:any, index:number) => (
          <CertiCard edit={edit[4]} key={index} {...ex} />
        ))}
        {addCerti && <CertiInput setEdit={setAddCerti}/>}
      </div>
    </div>
  );
};

export default Profile;
