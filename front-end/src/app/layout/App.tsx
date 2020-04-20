import React from "react";
import { NavBar } from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import AprtmentForm from "../../features/apartments/AprtmentForm";
import ListApartments from "../../features/cms/ListApartments";
import ApartmentDetails from "../../features/apartments/ApartmentDetails";
import IMS from "../../features/ims/IMS";
import CMS from "../../features/cms/CMS";
import HomePage from "../../features/home/HomePage";
import LoginForm from "../../features/user/LoginForm";

function App() {
  return (
    <>
      <NavBar />
      <Container style={{marginTop: '8em'}}>
        <Route path='/' exact component={HomePage} ></Route>
        <Route path='/apartments/:id'  component={ApartmentDetails} ></Route>
        <Route path='/createApartment' component={AprtmentForm} ></Route>
        <Route path='/cms' component={CMS} ></Route>
        <Route path='/ims' component={IMS} ></Route>
        <Route path='/apartments' component={ListApartments} ></Route>
        <Route path='/login' component={LoginForm} ></Route>

      </Container>
    </>
  );
}

export default App;
