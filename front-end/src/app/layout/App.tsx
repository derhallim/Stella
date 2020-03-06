import React, { useContext } from "react";
import { NavBar } from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import AprtmentForm from "../../features/apartments/AprtmentForm";
import CMSHome from "../../features/cms/CMSHome";
import AllApartments from "../../features/apartments/AllApartments";
import ApartmentsStore from '../stores/apartmentsStore'

function App() {

  const apartmentsStore = useContext(ApartmentsStore)
  return (
    <>
      <NavBar />
      <h1>{apartmentsStore.title}</h1>
      <Container style={{marginTop: '10em'}}>
        <Route path='/' exact component={HomePage }></Route>
        {/* <Route path='/apartments' component={Apartments}></Route> */}
        <Route path='/createApartment' component={AprtmentForm} ></Route>
        <Route path='/cms' component={CMSHome} ></Route>
        <Route path='/apartments' component={AllApartments} ></Route>
      </Container>
    </>
  );
}

export default App;
