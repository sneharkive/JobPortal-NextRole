import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../TalentProfile/RecommendTalent";

const TalentProfilePage = () => {
  return (
    <div className="mb-16 min-h-[90vh] p-4">
      <Link 
      className="inline-block m-6"
       to="/find-talent">
        <Button leftSection={<IconArrowLeft /> } color="#FDC700" variant="light">
          {" "}
          Back
        </Button>
      </Link>


      <div className="flex gap-6">
      <Profile {...profile}/> 
      <RecommendTalent />
      </div>
    </div>
  );
};

export default TalentProfilePage;
