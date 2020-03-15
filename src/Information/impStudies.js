import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import InformationTemp from "./informationTemp";
import apiMock from "../ApiMock/apiMock";
import Studies from "./studies";

class ImpStudies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studiesData: {
        section: "",
        data: []
      }
    };
  }

  componentDidMount() {
    const instanceApiMock = new apiMock();
    this.setState({
      studiesData: instanceApiMock.getStudiesData()
    });
  }

  render() {
    const { studiesData } = this.state;
    return (
      <Grid>
        <InformationTemp
          section={studiesData.section}
          inComponent={<Studies data={studiesData.data}></Studies>}
        />
      </Grid>
    );
  }
}

export default ImpStudies;
