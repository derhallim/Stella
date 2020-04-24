import React, { useContext } from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { Form, Button, Header, Container } from 'semantic-ui-react';
import agent from "../../app/api/agent";
import ICity from "../../app/models/ICity";
import { RootStoreContext } from "../../app/stores/rootStore";
import TextInput from "../../app/common/form/TextInput";
import { create } from "domain";

const AddCity = () => {
  const rootStore = useContext(RootStoreContext);
  const { createCity } = rootStore.cmsStore;


  return (
    <FinalForm
    onSubmit={(values: ICity) =>
      createCity(values).catch(error => ({
       
      }))
    }    
    render={({
      handleSubmit,
      submitting,
      submitError,
      invalid,
      pristine,
      dirtySinceLastSubmit
    }) => (
    <Container style={{ marginTop: "10em" }}>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="">
          <label>City Name</label>
          <Field name='Name' component={TextInput} placeholder='City Name'  />
        </div>
        <button type="submit" className="ui button" style={{ marginTop: "1%" }}>
          Submit
        </button>
      </form>
      
    </Container>
    )}
    />
  );
};

export default AddCity;