import React, { Component } from "react";
import { Grid, Box } from "@material-ui/core";


function InformationTemp(props) {

  return (
    <Grid className="informationTemp" container>
      <Grid container sm={12} md={3} justify="center" alignContent="flex-start">
        <spam className="informationTemp__header">
          {props.section}
        </spam>
      </Grid>
      <Grid sm={12} md={9}>
        <Box borderLeft={4} pl={3} className="informationTemp__colorline"	>
          {props.inComponent}
        </Box>
      </Grid>
    </Grid>
  )
}



export default InformationTemp; 