import React from "react";
import { Container, Grid } from "semantic-ui-react";
import CMSNav from "./CMSNav";
import { Route } from "react-router-dom";
import CMSHome from "./CMSHome";
import AddApartment from "./AddApartment";

const CMS = () => {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <CMSNav />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route path="/cms/" exact component={CMSHome} />
            <Route path="/cms/create-apartment" component={AddApartment} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default CMS;
