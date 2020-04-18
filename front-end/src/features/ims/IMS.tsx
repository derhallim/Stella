import React, { useContext } from "react";
import { Container, Grid } from "semantic-ui-react";
import { IMSNav } from "./IMSNav";
import { Route } from "react-router-dom";
import ListAgencies from "./ListAgencies";
import IMSHome from './IMSHome'

const IMS = () => {

 
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <IMSNav  />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route path="/ims/" exact component={IMSHome} />
            <Route path="/ims/agencies/:AgencyType" component={ListAgencies} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default IMS;
