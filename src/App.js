import React, { Component } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import Header from "./Header/header";
import ImpStudies from "./Information/impStudies";
import ImpWorkExperience from "./Information/impWorkExperience";
import ImpResearchCourses from "./Information/impResearchCourses";
import ImpSkills from "./Information/impSkills";
import NavBar from "./Navbar/navbar";
import Footer from "./Footer/footer";
import { Box, isWidthUp, withWidth } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Header />
        {isWidthUp("md", this.props.width) ? (
          <NavBar
            studies={<ImpStudies />}
            workExperience={<ImpWorkExperience />}
            researchCourses={<ImpResearchCourses />}
            skills={<ImpSkills />}
          />
        ) : (
          <Box>
            <ImpStudies />
            <ImpWorkExperience />
            <ImpResearchCourses />
            <ImpSkills />
          </Box>
        )}

        <Footer />
      </Container>
    );
  }
}

export default withWidth()(App);
