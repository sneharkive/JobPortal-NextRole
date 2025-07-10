
import Companies from "../LandingPage/Companies"
import DreamJob from "../LandingPage/DreamJob"
import JobCategory from "../LandingPage/JobCategory"
import Subscribe from "../LandingPage/Subscribe"
import Testimonials from "../LandingPage/Testimonials"
import Working from "../LandingPage/Working"


const HomePage = () => {

  return (
    <div className="max-w-screen overflow-x-hidden flex flex-col items-center justify-center min-h-screen bg-zinc-900 font-['poppins'] text-white">
      <DreamJob />
      <Companies />
      <JobCategory />
      <Working />
      <Testimonials />
      <Subscribe />
    </div>
  )
}

export default HomePage