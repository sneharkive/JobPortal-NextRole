import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../Components/JobDesc/JobDesc";
import RecommendedJobs from "../Components/JobDesc/RecommendedJobs";

const JobDescPage = () => {
  return (
    <div className="mb-16 min-h-[90vh] p-4">
      <Link 
      className="inline-block m-6"
       to="/find-jobs">
        <Button leftSection={<IconArrowLeft /> } color="#FDC700" variant="light">
          {" "}
          Back
        </Button>
      </Link>


      <div className="flex gap-6 justify-around">
        <JobDesc />
        <RecommendedJobs />
      </div>
    </div>
  );
};

export default JobDescPage;
