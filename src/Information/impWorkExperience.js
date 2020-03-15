import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import InformationTemp from "./informationTemp";
import apiMock from "../ApiMock/apiMock";
import WorkExperience from "./workExperience";

class ImpWorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workData: {
        section: "",
        data: []
      }
    };
  }

  componentDidMount() {
    const instanceApiMock = new apiMock();
    this.setState({
      workData: instanceApiMock.getWorkExperience()
    });
  }

  render() {
    const { workData } = this.state;
    return (
      <Grid>
        <InformationTemp
          section={workData.section}
          inComponent={<WorkExperience data={workData.data} />}
        />
      </Grid>
    );
  }
}

export default ImpWorkExperience;
