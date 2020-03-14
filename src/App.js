import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, AppBar, Tabs, Tab } from "@material-ui/core";
import Header from "./Header/header";
import ImpStudies from "./Information/impStudies";
import ImpWorkExperience from "./Information/impWorkExperience";
import ImpResearchCourses from "./Information/impResearchCourses";
import ImpSkills from "./Information/impSkills";
import NavBar from "./Navbar/navbar";

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <NavBar
        studies={<ImpStudies />}
        workExperience={<ImpWorkExperience />}
        researchCourses={<ImpResearchCourses />}
        skills={<ImpSkills />}
      />
    </Container>
  );
}

export default App;
