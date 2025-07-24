import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import ApplyJobComp from "../Components/ApplyJob/ApplyJobComp";

const ApplyJobPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-16 min-h-[90vh] p-4">

        <Button onClick={() => navigate(-1)} leftSection={<IconArrowLeft />} color="#FDC700" variant="light">
          {" "}
          Back
        </Button>

      <ApplyJobComp />
    </div>
  );
};

export default ApplyJobPage;
