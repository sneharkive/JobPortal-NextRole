import { jobList } from "../Data/JobsData";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold ">Recommended Jobs</div>
        <Sort />
      </div>

      <div className="flex flex-wrap gap-6 items-center justify-center" >
        {jobList.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
