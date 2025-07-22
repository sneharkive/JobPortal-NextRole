import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ApplyJobPage from "./ApplyJobPage";
import CompanyPage from "./CompanyPage";
import FindJobsPage from "./FindJobsPage";
import FindTalentsPage from "./FindTalentsPage";
import HomePage from "./HomePage";
import JobDescPage from "./JobDescPage";
import JobHistoryPage from "./JobHistoryPage";
import PostedJobPage from "./PostedJobPage";
import PostJobPage from "./PostJobPage";
import ProfilePage from "./ProfilePage";
import SignUpPage from "./SignUpPage";
import TalentProfilePage from "./TalentProfilePage";
import { useSelector } from "react-redux";

const AppRoutes = () => {

  const user = useSelector((state: any) => state.user);

  return (
    <BrowserRouter>
      <div className="relative">
        <Header />
        <Routes>
          <Route path="/find-jobs" element={<FindJobsPage />} />
          <Route path="/find-talent" element={<FindTalentsPage />} />
          <Route path="/jobs" element={<JobDescPage />} />
          <Route path="/apply-job" element={<ApplyJobPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/talent-profile" element={<TalentProfilePage />} />
          <Route path="/posted-job" element={<PostedJobPage />} />
          <Route path="/post-jobs" element={<PostJobPage />} />
          <Route path="/job-history" element={<JobHistoryPage />} />
          <Route path="/signup" element={user ? <Navigate to="/"/> : <SignUpPage />} />
          <Route path="/login" element={user ? <Navigate to="/"/> : <SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
