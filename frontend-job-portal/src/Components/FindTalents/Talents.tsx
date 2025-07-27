import { useEffect, useState } from "react";
// import { talents } from "../../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { getAllProfile } from "../../Service/ProfileService";


const Talents = () => {
  const [talents, setTalents] = useState<any>([]);

  useEffect(() => {
    getAllProfile().then((res) => {
      setTalents(res);
    }).catch((err) => console.log(err))
  },[])

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold ">Talents</div>
        <Sort />
      </div>

      <div className="flex flex-wrap gap-6 items-center justify-center" >
        {
          talents.map((tal:any, index:any) => (
            <TalentCard key={index} {...tal}/>
          ))
        }
      </div>
    </div>
  );
};

export default Talents;
