import React from 'react'
import { Chip, Box } from "@material-ui/core";

function GenericInfo(props) {
    return (
        props.data.map((element, index) => (
            <Box key={index} className="extraInfo__inside">
                {element.title !== "" ? <p className="extraInfo__title">{element.title}</p> : ''}
                {element.data !== "" ? <p className="">{element.data}</p> : ''}
                {element.techonologies.length > 0 ? <CheapCreation techonologies={element.techonologies}/> : ''}
            </Box>
        ))
    )
}

function CheapCreation(props) {
    return (
        <Box>
            {props.techonologies.map((element, index) => (
                <Chip key={index} className="work__chips" label={element} />
            ))}
        </Box>
    )
}

export default GenericInfo;