import { useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../../Data/Profile";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
  const select = fields;
  const [desc, setDesc] = useState<string>(props.desc);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg font-semibold">{props.add? "Add" : "Edit"} Experience</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <SelectInput {...select[2]} />
      <Textarea
        label="Summary"
        value={desc}
        onChange={(event) => setDesc(event.currentTarget.value)}
        autosize
        minRows={3}
        placeholder="Enter Summary"
      />
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          maxDate={endDate || undefined}
          label="Start Date"
          placeholder="pick date"
          value={startDate}
          onChange={(value) => setStartDate(value ? new Date(value) : null)}
        />
        <MonthPickerInput
          maxDate={new Date()}
          label="End Date"
          minDate={startDate || undefined}
          placeholder="pick date"
          disabled={checked}
          value={endDate}
          onChange={(value) => setEndDate(value ? new Date(value) : null)}
        />
      </div>
      <Checkbox
        autoContrast
        label="Currently Working here"
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />

      <div className="flex gap-6">
        <Button onClick={() => props.setEdit(false)} color="yellow" variant="outline">
          Save
        </Button>
        <Button onClick={() => props.setEdit(false)} color="red" variant="light">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ExpInput;
