import React from "react";
import { Grid, Box } from "@material-ui/core";

function InformationTemp(props) {
  return (
    <Grid className="informationTemp" container>
      <Grid
        item
        sm={12}
        md={3}
        style={{
          textAlign: "center"
        }}
      >
        <span className="informationTemp__header">{props.section}</span>
      </Grid>
      <Grid item sm={12} md={9}>
        <Box borderLeft={4} pl={3} className="informationTemp__colorline">
          {props.inComponent}
        </Box>
      </Grid>
    </Grid>
  );
}

export default InformationTemp;
