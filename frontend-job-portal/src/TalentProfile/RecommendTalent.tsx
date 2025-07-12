import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalents/TalentCard";

const RecommendTalent = () => {
  return (
    <div>
      <div className="text-xl font-semibold mb-5">Recommend Talent</div>
      <div className="flex flex-col flex-wrap gap-5">
        {talents.map((tal, index) => index<2 && <TalentCard key={index} {...tal}/>)}
      </div>
    </div>
  );
};

export default RecommendTalent;
