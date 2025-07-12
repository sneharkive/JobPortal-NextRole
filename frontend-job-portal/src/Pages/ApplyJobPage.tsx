import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";

const ApplyJobPage = () => {
  return (
    <div className="mb-16 min-h-[90vh] p-4">
      <Link className="inline-block m-6" to="/jobs">
        <Button leftSection={<IconArrowLeft />} color="#FDC700" variant="light">
          {" "}
          Back
        </Button>
      </Link>
      <ApplyJobComp />
    </div>
  );
};

export default ApplyJobPage;
