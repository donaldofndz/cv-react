import React, { useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import apiMock from "../ApiMock/apiMock";

function FooterColumn(props) {
  return (
    <Grid
      xs={12}
      sm={12}
      md={4}
      style={{
        textAlign: "center"
      }}
      item
    >
      {props.children}
    </Grid>
  );
}

function ShowLinks(props) {
  return (
    <Box>
      {Object.keys(props.links).map((key, index) => (
        <p key={index}>
          <a
            className="footer__links"
            target="_blank"
            rel="noopener noreferrer"
            href={props.links[key]}
          >
            {key}
          </a>
        </p>
      ))}
    </Box>
  );
}

export default function Footer() {
  const [links, setLinks] = React.useState({
    links: {}
  });
  const [contacts, setContacts] = React.useState({
    links: {}
  });

  useEffect(() => {
    const instApiMock = new apiMock();
    setLinks(instApiMock.getFooterLinks().links);
    setContacts(instApiMock.getFooterContacts().links);
  }, []);

  return (
    <Box className="footer">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={6}>
            <FooterColumn>
              <p className="footer__mainText">Links</p>
              <hr className="footer__line" />
              <ShowLinks links={links} />
            </FooterColumn>
            <FooterColumn>
              <p className="footer__mainText">Contact</p>
              <hr className="footer__line" />
              <ShowLinks links={contacts} />
            </FooterColumn>
            <FooterColumn>
              <Box>
                <p className="footer__extraText">Made by: Donaldo Fernandez</p>
              </Box>
            </FooterColumn>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
