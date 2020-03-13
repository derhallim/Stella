import React from "react";
import { NavBar } from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import AprtmentForm from "../../features/apartments/AprtmentForm";
import ApartmentsList from "../../features/apartments/ApartmentsList";
import ApartmentsStore from '../stores/apartmentsStore'
import ApartmentDetails from "../../features/apartments/ApartmentDetails";
import IMS from "../../features/ims/IMS";
import CMS from "../../features/cms/CMS";

function App() {
  return (
    <>
      <NavBar />
      <Container style={{marginTop: '10em'}}>
        <Route path='/' exact component={ApartmentsList} ></Route>
        <Route path='/apartments/:id'  component={ApartmentDetails} ></Route>
        <Route path='/createApartment' component={AprtmentForm} ></Route>
        <Route path='/cms' component={CMS} ></Route>
        <Route path='/ims' component={IMS} ></Route>
        <Route path='/apartments' component={ApartmentsList} ></Route>
      </Container>
    </>
  );
}

export default App;
