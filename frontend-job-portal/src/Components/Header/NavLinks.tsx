import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links= [
    {name: "Find Jobs", url:"find-jobs"},
    {name: "Find Talent", url:"find-talent"},
    {name: "Post Jobs", url:"post-jobs"},
    {name: "Posted Job", url:"posted-job"},
    {name: "Job History", url:"job-history"},
    // {name: "SignUp", url:"signup"},
  ]
  const location = useLocation();
  return (
    <div className="md:flex-row flex flex-col items-center gap-8 text-sm">
      {
        links.map((link, index) => <Link key={index} className={`${location.pathname == "/" + link.url ? "text-yellow-400 font-bold": "text-white font-semibold"}  transition-transform hover:scale-105`}to={link.url}>{link.name}</Link>)
      }
    </div>

  );
};

export default NavLinks;
