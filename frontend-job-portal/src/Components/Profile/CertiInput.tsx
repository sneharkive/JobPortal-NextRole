import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import fields from "../../Data/Profile";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

const CertiInput = (props: any) => {

  const select = fields;
  const [ issueDate, setIssueDate] = useState<Date | null>(null);
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificated</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput label="Title" withAsterisk placeholder="Enter Title" />
        <SelectInput {...select[1]} />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
        withAsterisk
          // maxDate={endDate || undefined}
          label="Issue Date"
          placeholder="pick date"
          value={issueDate}
          onChange={(value) => setIssueDate(value ? new Date(value) : null)}
        />
        <TextInput label="Certificate ID" withAsterisk placeholder="Enter ID" />
      </div>

      <div className="flex gap-6">
        <Button
          onClick={() => props.setEdit(false)}
          color="yellow"
          variant="outline"
        >
          Save
        </Button>
        <Button
          onClick={() => props.setEdit(false)}
          color="red"
          variant="light"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CertiInput;
