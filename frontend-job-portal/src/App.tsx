import "./App.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import Footer from "./Footer/Footer";
import FindJobs from "./Pages/FindJobs";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/find-jobs" element={<FindJobs />}/>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
