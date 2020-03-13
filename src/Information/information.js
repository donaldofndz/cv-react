import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import InformationTemp from "./informationTemp"
import apiMock from "../ApiMock/apiMock";
import Studies from "./studies"
import WorkExperience from "./workExperience"

class Information extends Component {

  constructor(props) {
    super(props)
    this.state = {
      studiesData: {
        section: "",
        data: []
      },
      workData: {
        section: "",
        data: []
      }
    }
  }

  componentDidMount() {
    const instanceApiMock = new apiMock();
    this.setState({
      studiesData: instanceApiMock.getStudiesData(),
      workData: instanceApiMock.getWorkExperience()
    });
  }

  render() {
    const { studiesData, workData } = this.state
    return (
      <Grid>
        <InformationTemp section={studiesData.section} inComponent={<Studies data={studiesData.data}></Studies>} />
        <InformationTemp section={workData.section} inComponent={<WorkExperience data={workData.data} />}/>
      </Grid>
    )
  }
}

export default Information; 