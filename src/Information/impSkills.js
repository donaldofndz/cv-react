import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import InformationTemp from "./informationTemp";
import GenericInfo from "./genericInfo";
import apiMock from "../ApiMock/apiMock";

class ImpSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      techSkills: {
        section: "",
        data: []
      }
    };
  }

  componentDidMount() {
    const instanceApiMock = new apiMock();
    this.setState({
      techSkills: instanceApiMock.getTechSkills()
    });
  }

  render() {
    const { techSkills } = this.state;
    return (
      <Grid>
        <InformationTemp
          section={techSkills.section}
          inComponent={<GenericInfo data={techSkills.data} />}
        />
      </Grid>
    );
  }
}

export default ImpSkills;
