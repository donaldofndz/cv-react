import React, { Component } from "react";
import { Grid, makeStyles, isWidthUp, withWidth } from "@material-ui/core";
import apiMock from "../ApiMock/apiMock";

const useStyles = makeStyles(theme => ({
  gridTile: {
    color: "red"
  }
}));

function SchoolSection(props) {
  return (
    <Grid xs={12}>
      <p className="header__title-aditional-info">
        {props.grade}
        <span className="header__title-aditional-info--extra">
          ({props.nameOfSchool})
        </span>
      </p>
    </Grid>
  );
}

function ExtraInfo(props) {
  return (
    <Grid item xs={12} sm={6}>
      <p>
        {props.leftVal} :<span>{props.rigthVal}</span>
      </p>
    </Grid>
  );
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoData: {
        name: "",
        studies: [],
        extraInfo: {}
      }
    };
  }

  componentDidMount() {
    const instanceApiMock = new apiMock();
    this.setState({ infoData: instanceApiMock.getBasicData() });
  }

  render() {
    const titleStyle = {
      borde: "1px solid red"
    };
    const { infoData } = this.state;
    const listOfSchools = infoData.studies.map((studies, index) => (
      <SchoolSection
        key={index}
        grade={studies.grade}
        nameOfSchool={studies.nameOfSchool}
      />
    ));
    const listOfExtraInfo = Object.keys(infoData.extraInfo).map(
      (key, index) => (
        <Grid item key={index} xs={12} sm={6}>
          <p>
            <span className="header__title-aditional-info --bold">{key}:</span>
            <span className="header__title-aditional-info --no-capital --left-space">
              {infoData.extraInfo[key]}
            </span>
          </p>
        </Grid>
      )
    );
    return (
      <Grid>
        <Grid
          container
          row
          className={
            isWidthUp("md", this.props.width) ? "header big" : "header"
          }
        >
          <Grid item sm={12} md={6}>
            <h1>{infoData.name}</h1>
          </Grid>
          <Grid
            container
            className={
              !isWidthUp("md", this.props.width)
                ? "header__school-container"
                : ""
            }
            sm={12}
            md={6}
          >
            {listOfSchools}
          </Grid>
        </Grid>
        <Grid container className="header__extra-info-container">
          {listOfExtraInfo}
        </Grid>
      </Grid>
    );
  }
}

export default withWidth()(Header);
