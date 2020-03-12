import React, { useContext } from "react";
import { Container, Grid } from "semantic-ui-react";
import { IMSNav } from "./IMSNav";
import { Route } from "react-router-dom";
import IMSStore from "../../app/stores/imsStore";
import ListAgencies from "./ListAgencies";
import IMSHome from './IMSHome'

const IMS = () => {
  const imsStore = useContext(IMSStore);

  const onNavClick = (agencyType: string) => {
    // imsStore.setAgency(agencyType);
    // imsStore.loadAgencies();
  };

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <IMSNav navOnClick={onNavClick} />
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
