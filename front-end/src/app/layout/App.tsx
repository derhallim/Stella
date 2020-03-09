import React, { useContext, useEffect } from "react";
import { NavBar } from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import AprtmentForm from "../../features/apartments/AprtmentForm";
import CMSHome from "../../features/cms/CMSHome";
import ApartmentsList from "../../features/apartments/ApartmentsList";
import ApartmentsStore from '../stores/apartmentsStore'
import ApartmentDetails from "../../features/apartments/ApartmentDetails";
import IMS from "../../features/ims/IMS";

function App() {
  const apartmentsStore = useContext(ApartmentsStore)
  return (
    <>
      <NavBar />
      <Container style={{marginTop: '10em'}}>
        <Route path='/' exact component={ApartmentsList} ></Route>
        <Route path='/apartments/:id'  component={ApartmentDetails} ></Route>
        <Route path='/createApartment' component={AprtmentForm} ></Route>
        <Route path='/cms' component={CMSHome} ></Route>
        <Route path='/ims' component={IMS} ></Route>
        <Route path='/apartments' component={ApartmentsList} ></Route>
      </Container>
    </>
  );
}

export default App;
