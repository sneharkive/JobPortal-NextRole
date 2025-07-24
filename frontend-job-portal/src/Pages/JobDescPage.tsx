import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import JobDesc from "../Components/JobDesc/JobDesc";
import RecommendedJobs from "../Components/JobDesc/RecommendedJobs";
import { useState,useEffect } from "react";
import { getJobById } from "../Service/JobService";

const JobDescPage = () => {

  const {id} = useParams<{ id: string }>();
  const [job, setJob] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
    getJobById(id)
      .then((res) => {
        setJob(res);
      })
      .catch((err) => {
        console.error("Error fetching job details:", err);
      });

  }, [id]);


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
        <JobDesc  {...job}/>
        <RecommendedJobs />
      </div>
    </div>
  );
};

export default JobDescPage;
