import MultiInput from "./MultiInput";
import {dropdownData} from "../Data/JobsData";
import { useState } from "react";
import { RangeSlider } from "@mantine/core";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([10, 1000]);
  return (
    <div className="flex justify-around flex-wrap gap-4 items-center">

      {
        dropdownData.map((item, index) => (     
          <div key={index} className="w-64 bg-zinc-800 rounded-lg p-2">
            <MultiInput {...item} />
          </div>
        ))
      }
      <div className="w-64">
        <div className="flex justify-between items-center "> 
          <div>Salary</div>
          <div>&#8377;{value[0]}K - &#8377;{value[1]}K</div>
        </div>
      <RangeSlider color="#FDC700" value={value} onChange={setValue}/>

      </div>
    </div>
  );
};

export default SearchBar;
