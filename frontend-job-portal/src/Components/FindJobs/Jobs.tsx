import { useEffect, useState } from "react";
// import { jobList } from "../../Data/JobsData";
import JobCard from "./JobCard";
import Sort from "./Sort";
import { getAllJobs } from "../../Service/JobService";
import { LoadingOverlay } from "@mantine/core";

const Jobs = () => {
  const [jobList, setJobList] = useState([{}]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    getAllJobs()
      .then((res) => {
        setJobList(res);
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.error("Error fetching jobs:", err);
      });
  }, []);
  return (
    <>
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "yellow.5", type: "bars" }} className="!h-screen"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <div className="text-2xl font-semibold ">Recommended Jobs</div>
          <Sort />
        </div>

        <div className="flex flex-wrap gap-6 items-center justify-center">
          {jobList.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;
