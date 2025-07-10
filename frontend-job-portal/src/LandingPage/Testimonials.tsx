import {testimonials} from "../Data/Data";
import { Rating } from "@mantine/core";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-8 w-screen">
      <div className="text-center text-3xl font-semibold mb-8">
        What <span className="font-bold text-amber-300">Users</span> says about us?
      </div>

      <div className="flex items-center gap-4 justify-around px-8">
        {testimonials.map((tes, index) => (
          <div className="w-84 p-2 border border-amber-200 mx-1 rounded-xl" key={index}>
            <div className="flex items-center gap-4">
              <div className="w-12 rounded-full overflow-hidden">
                <img src={`avatar1.png`} alt="" />
              </div>
              <div>
                <p>{tes.name}</p>
                <Rating value={tes.rating} fractions={2} readOnly/>
              </div>
            </div>
            <div className="text-sm mt-4 text-gray-400">{tes.testimonial}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
