import "./App.css";
import "@mantine/core/styles.css";

import {  MantineProvider } from "@mantine/core";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import Footer from "./Footer/Footer";
import FindJobsPage from "./Pages/FindJobsPage";
import FindTalentsPage from "./Pages/FindTalentsPage";
import TalentProfilePage from "./Pages/TalentProfilePage";
import PostJobPage from "./Pages/PostJobPage";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import JobDescPage from "./Pages/JobDescPage";
import ApplyJobPage from "./Pages/ApplyJobPage";
import CompanyPage from "./Pages/CompanyPage";
import PostedJobPage from "./Pages/PostedJobPage";
import '@mantine/dates/styles.css';
import JobHistoryPage from "./Pages/JobHistoryPage";
function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
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
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
