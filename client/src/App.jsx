import React from "react";
import LandingPage from "./views/LandingPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import EducationPage from "./views/EducationPage";
import WorkHistoryPage from "./views/WorkHistoryPage";
import ProjectsPage from "./views/ProjectsPage";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage/>}  path="/"/>
        <Route element={<EducationPage/>}  path="/Education"/>
        <Route element={<WorkHistoryPage/>} path="/Work_History"/>
        <Route element={<ProjectsPage/>} path="/Projects"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
