import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/tiptap/styles.css";
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';

import {  MantineProvider } from "@mantine/core";
import { Notifications } from '@mantine/notifications';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ApplyJobPage from "./Pages/ApplyJobPage";
import CompanyPage from "./Pages/CompanyPage";
import FindJobsPage from "./Pages/FindJobsPage";
import FindTalentsPage from "./Pages/FindTalentsPage";
import HomePage from "./Pages/HomePage";
import JobDescPage from "./Pages/JobDescPage";
import JobHistoryPage from "./Pages/JobHistoryPage";
import PostedJobPage from "./Pages/PostedJobPage";
import PostJobPage from "./Pages/PostJobPage";
import ProfilePage from "./Pages/ProfilePage";
import SignUpPage from "./Pages/SignUpPage";
import TalentProfilePage from "./Pages/TalentProfilePage";



function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Notifications  position="top-center" zIndex={1000}/>
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
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
