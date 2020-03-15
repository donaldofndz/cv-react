import React from "react";
import { Box, Chip } from "@material-ui/core";

function WorkExperience(props) {
  return (
    <Box>
      {props.data.map((element, index) => (
        <Box key={index} className="work">
          <p>
            {" "}
            <span className="work__topic">Company: </span> {element.company}
          </p>
          <p>
            {" "}
            <span className="work__topic">Position: </span> {element.job}
          </p>
          {element.data instanceof Object ? (
            <RecurringWorkExperience data={element.data} />
          ) : (
            <p>
              <span className="work__topic">Job Description: </span>
              {element.data}
            </p>
          )}
          <CheapCreation techonologies={element.techonologies} />
        </Box>
      ))}
    </Box>
  );
}

function RecurringWorkExperience(props) {
  return (
    <Box
      ml={6}
      className="work__inside work__inside__colorline"
      borderLeft={3}
      pl={3}
    >
      <WorkExperience data={props.data} />
    </Box>
  );
}

function CheapCreation(props) {
  return (
    <Box>
      {props.techonologies.map((element, index) => (
        <Chip key={index} className="work__chips" label={element} />
      ))}
    </Box>
  );
}

export default WorkExperience;
