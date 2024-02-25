import React from "react";
import LandingPage from "./views/LandingPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import EducationPage from "./views/EducationPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage/>}  path="/"/>
        <Route element={<EducationPage/>}  path="/Education"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
