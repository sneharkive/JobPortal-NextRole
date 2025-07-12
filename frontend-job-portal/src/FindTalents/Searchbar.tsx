import { useState } from "react";
import { Input, RangeSlider } from "@mantine/core";
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../Data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([0, 100]);
  return (
    <div className="flex justify-around flex-wrap gap-2 items-center mb-8">
      <div className="flex items-center">
        <div className="text-amber-400 bg-zinc-800 rounded-full p-1 mr-2">
          <IconUserCircle size={28} />
        </div>
        <Input variant="unstyled" placeholder="Talent Name" />
      </div>

      {searchFields.map((item, index) => (
        <div key={index} className="w-64 bg-zinc-800 rounded-lg p-2">
          <MultiInput {...item} />
        </div>
      ))}
      <div className="w-64">
        <div className="flex justify-between items-center ">
          <div>Salary</div>
          <div>
            &#8377;{value[0]}LAP - &#8377;{value[1]}LPA
          </div>
        </div>
        <RangeSlider color="#FDC700" value={value} onChange={setValue} />
      </div>
    </div>
  );
};

export default SearchBar;
