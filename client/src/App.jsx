import React , {useEffect} from "react";
import 'aos/dist/aos.css'
import LandingPage from "./views/LandingPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import EducationPage from "./views/EducationPage";
import WorkHistoryPage from "./views/WorkHistoryPage";
import ProjectsPage from "./views/ProjectsPage";
import AboutMePage from "./views/AboutMePage";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage/>}  path="/"/>
        <Route element={<EducationPage/>}  path="/Education"/>
        <Route element={<WorkHistoryPage/>} path="/Work_History"/>
        <Route element={<ProjectsPage/>} path="/Projects"/>
        <Route element={<AboutMePage/>} path="/About_Me"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
