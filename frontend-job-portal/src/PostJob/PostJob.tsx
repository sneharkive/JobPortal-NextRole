import { Button, TagsInput } from "@mantine/core";
import { fields } from "../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./TextEditor";

const PostJob = () => {
  const select = fields;
  return (
    <div className="w-4/5 mx-auto">
      <div className="text-2xl">Post a Job</div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[0]} />
          <SelectInput {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[2]} />
          <SelectInput {...select[3]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[4]} />
          <SelectInput {...select[5]} />
        </div>
        <TagsInput
          withAsterisk
          label="Skills"
          placeholder="Enter Skills"
          clearable
          acceptValueOnBlur
          splitChars={[",", " ", "|"]}
        />

        <div className="[&_button[data-active='true']]:!text-white [&_button[data-active='true']]:!bg-amber-400/30">
          <div className="font-semibold">Job Description</div>
          <TextEditor />
        </div>
        <div className="flex gap-4 ">
          <Button
            
            color="#FDC700"
            variant="light"
          >
            Publish Job
          </Button>

          <Button
            
            color="#FDC700"
            variant="outline"
          >
            Save as Draft
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
