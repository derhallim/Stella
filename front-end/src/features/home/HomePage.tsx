import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import agent from "../../app/api/agent";
import IApartment from "../../app/models/IApartment";
import Map from "../common/Map";
import ListApartments from "../cms/ListApartments";
const HomePage = () => {
  return (
    <Container>
      <h1>Welcome to Stella</h1>
      <Map width="52%" height="40%" />
      <Container style={{marginTop: '40%'}}>

        <ListApartments />
        </Container>
      
    </Container>
  );
};

export default HomePage;
