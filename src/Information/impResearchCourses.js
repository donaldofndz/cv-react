import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import InformationTemp from "./informationTemp";
import GenericInfo from "./genericInfo";
import apiMock from "../ApiMock/apiMock";

class ImpResearchCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      researchProjects: {
        section: "",
        data: []
      },
      certifiedCourses: {
        section: "",
        data: []
      }
    };
  }

  componentDidMount() {
    const instanceApiMock = new apiMock();
    this.setState({
      researchProjects: instanceApiMock.getResearchProjects(),
      certifiedCourses: instanceApiMock.getCertifiedCourses()
    });
  }

  render() {
    const { researchProjects, certifiedCourses } = this.state;
    return (
      <Grid>
        <InformationTemp
          section={researchProjects.section}
          inComponent={<GenericInfo data={researchProjects.data} />}
        />
        <InformationTemp
          section={certifiedCourses.section}
          inComponent={<GenericInfo data={certifiedCourses.data} />}
        />
      </Grid>
    );
  }
}

export default ImpResearchCourses;
