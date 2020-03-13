import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import InformationTemp from "./informationTemp"
import GenericInfo from "./genericInfo";
import apiMock from "../ApiMock/apiMock";


class ExtraInformation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      researchProjects: {
        section: "",
        data: []
      },
      certifiedCourses: {
        section: "",
        data: []
      },
      techSkills: {
        section: "",
        data: []
      }
    }
  }

  componentDidMount() {
    const instanceApiMock = new apiMock();
    this.setState({
        researchProjects: instanceApiMock.getResearchProjects(),
        certifiedCourses: instanceApiMock.getCertifiedCourses(),
        techSkills: instanceApiMock.getTechSkills()
    });
  }

  render() {
    const { researchProjects, certifiedCourses, techSkills } = this.state
    return (
      <Grid>
        <InformationTemp section={researchProjects.section} inComponent={<GenericInfo data={researchProjects.data}/>} />
        <InformationTemp section={certifiedCourses.section} inComponent={<GenericInfo data={certifiedCourses.data}/>} />
        <InformationTemp section={techSkills.section} inComponent={<GenericInfo data={techSkills.data}/>} />
      </Grid>
    )
  }
}

export default ExtraInformation; 