import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  Notification,
  NumberInput,
  rem,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJobComp = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);

  const navigate = useNavigate();

  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    setSubmit(true);
    let x = 5;
    setInterval(() => {
      x--;
      setSec(x);

      if (x == 0) navigate("/find-jobs");
    }, 1000);
  };

  return (
    <>
      <div className="w-2/3 mx-auto">
        <LoadingOverlay
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: "yellow", type: "bars" }}
        />

        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <div className="p-3 rounded-xl bg-zinc-700">
              <img className="w-14" src={`/Icons/Google.png`} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-semibold">Software Engineer</div>
              <div className="text-gray-500 text-lg">
                Google &bull; 3 days ago &bull; 48 applicants
              </div>
            </div>
          </div>
        </div>
        <Divider my="xl" />

        <div className="text-xl font-semibold mb-5">
          Submit Your Application
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-10 [&>*]:w-1/2 ">
            <TextInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`{preview?"text-gray-400 font-semibold:""}`}
              withAsterisk
              label="Full Name"
              placeholder="Enter name"
            />
            <TextInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`{preview?"text-gray-400 font-semibold:""}`}
              withAsterisk
              label="Email"
              placeholder="Enter email"
            />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <NumberInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`{preview?"text-gray-400 font-semibold:""}`}
              hideControls
              min={0}
              max={9999999999}
              clampBehavior="strict"
              withAsterisk
              label="Phone Number"
              placeholder="Enter Phone Number"
            />
            <TextInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`{preview?"text-gray-400 font-semibold:""}`}
              withAsterisk
              label="Personal Website"
              placeholder="Enter URL"
            />
          </div>

          <FileInput
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`{preview?"text-gray-400 font-semibold:""}`}
            withAsterisk
            leftSection={<IconPaperclip />}
            label="Attach your CV"
            placeholder="You CV"
            leftSectionPointerEvents="none"
          />

          <Textarea
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`{preview?"text-gray-400 font-semibold:""}`}
            withAsterisk
            placeholder="Type something about yourself"
            label="Cover Latter"
            autosize
            minRows={4}
          />
          {!preview && (
            <Button onClick={handlePreview} color="#FDC700" variant="light">
              Preview
            </Button>
          )}

          {preview && (
            <div className="flex gap-10 [&>*]:w-1/2">
              <Button
                fullWidth
                onClick={handlePreview}
                color="#FDC700"
                variant="outline"
              >
                Edit
              </Button>
              <Button
                fullWidth
                onClick={handleSubmit}
                color="#FDC700"
                variant="light"
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
      <Notification
        className={`z-[1001] !border-amber-300 transition duration-300 ease-in-out ${
          submit ? "translate-y-0" : "-translate-y-40"
        } !fixed top-20 left-[35%]`}
        icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
        color="teal"
        title="Application Submitted"
        mt="md"
        withCloseButton={false}
      >
        Redirecting to Find Jobs in {sec} seconds...
      </Notification>
    </>
  );
};

export default ApplyJobComp;
