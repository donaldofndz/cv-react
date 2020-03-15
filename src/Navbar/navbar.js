import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";

function TabPanel(props) {
  const { children, value, index } = props;
  return <Box>{value === index && <Box p={3}>{children}</Box>}</Box>;
}

const styles = theme => ({
  indicator: {
    backgroundColor: "#424242"
  }
});

function NavBar(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { classes } = props;

  return (
    <Box>
      <Box paddingTop={2} paddingBottom={2}>
        <AppBar
          position="static"
          style={{ boxShadow: "none" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            classes={{ indicator: classes.indicator }}
            className="navBar"
            elevation={0}
            centered
          >
            <Tab label="Education" />
            <Tab label="Work Experience" />
            <Tab label="Research and Courses" />
            <Tab label="Skills" />
          </Tabs>
        </AppBar>
      </Box>
      <TabPanel value={value} index={0}>
        {props.studies}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {props.workExperience}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {props.researchCourses}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {props.skills}
      </TabPanel>
    </Box>
  );
}

export default withStyles(styles)(NavBar);
