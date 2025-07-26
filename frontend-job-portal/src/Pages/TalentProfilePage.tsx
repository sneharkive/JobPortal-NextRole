import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Profile from "../Components/TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../Components/TalentProfile/RecommendTalent";

const TalentProfilePage = () => {
    const navigate = useNavigate();
  return (
    <div className="mb-16 min-h-[90vh] p-4">
      <div 
      className="inline-block m-6">
        <Button onClick={() => navigate(-1)} leftSection={<IconArrowLeft /> } color="#FDC700" variant="light">
          {" "}
          Back
        </Button>
      </div>


      <div className="flex gap-6">
      <Profile {...profile}/> 
      <RecommendTalent />
      </div>
    </div>
  );
};

export default TalentProfilePage;
