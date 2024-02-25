import React from "react";
import LandingPage from "./views/LandingPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage/>}  path="/"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
