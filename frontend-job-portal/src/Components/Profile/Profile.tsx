import { ActionIcon, Divider } from "@mantine/core";
import {
  IconDeviceFloppy,
  IconEdit,
  IconPlus,
} from "@tabler/icons-react";

import CertiCard from "./CertiCard";
import { useEffect, useState } from "react";
import CertiInput from "./CertiInput";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Service/ProfileService";
import Info from "./Info";
import { setProfile } from "../../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certifications from "./Certifications";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.profile);
  const [edit, setEdit] = useState([false, false, false, false, false]);

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

      <About />

      <Divider my="xl" mx="xs" />

      <Skills />

      <Divider my="xl" mx="xs" />

     <Experience />

      <Divider my="xl" mx="xs" />
      <Certifications />

      {/* <div className="px-3">
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
      </div> */}
    </div>
  );
};

export default Profile;
