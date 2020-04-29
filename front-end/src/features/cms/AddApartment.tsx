import React, { useContext, useEffect } from "react";
import { Container, Select } from "semantic-ui-react";
import agent from "../../app/api/agent";
import SelectInput from "../../app/common/form/SelectInput";
import { RouteComponentProps } from "react-router-dom";
import { RootStoreContext } from "../../app/stores/rootStore";
import ListCities from './ListCities';
import IApartment from "../../app/models/IApartment";
import { Form as FinalForm, Field } from "react-final-form";
import TextInput from "../../app/common/form/TextInput";



const AddApartment = () => {
  const rootStore = useContext(RootStoreContext);
  const { createApartment } = rootStore.cmsStore;
  const fileUploadHandler = (files: any) => {
    console.log(files[0]);
    var reader: FileReader = new FileReader();

    reader.onload = function(event) {
      var contents = event.target?.result;
      console.log(contents!.toString());
      contents = contents!.toString();
      agent.Images.create(
        contents.substring(contents.indexOf(",") + 1),
        "test"
      );
    };

    var s = reader.readAsDataURL(files[0]);
 
  };
  

  return (
    <FinalForm
        onSubmit={(values: IApartment) =>
          createApartment(values).catch(error => ({
           
          }))
        }    
        render={({
          handleSubmit
        }) => (
    <Container style={{ marginTop: "10em" }}>
      <form className="ui form"  onSubmit={handleSubmit}> 
        <div className="description">
          <label>Description</label>
          <Field name='description' component={TextInput} placeholder='Apartment Description'  />
        </div>
        <div className="field">
          <label>Numer Of Rooms</label>
          <Field  component={TextInput}  placeholder="Number Of Rooms" name="numOfRooms" type="number" />
         
        </div>
         <div className="field">
          <label>Numer Of Bathrooms</label>
          <Field  component={TextInput}  placeholder="Number Of Rooms" name="numOfBathrooms" type="number"/>
        </div>
        <div className="field">
          <label>Offer Type</label>
          <select className="mt-4 col-md-8 col-offset-4" name="offerType">
          <option>Select Offer Type</option>    
          <option key="Rent" value="Rent">Rent</option>    
          <option key="Sale" value="Sale">Sale</option>    
            </select>
  
        </div>
        <div className="field">
          <label>Price</label>
          <Field  component={TextInput}  placeholder="Price" name="price"  />
        </div>
        
        <div className="field">
          <label>City</label>
          <ListCities/>

    </div>
    
        <div className="field">
          <label>Full Address</label>
          <input placeholder="Full Address" name="fullAddress" />
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input
              type="checkbox"
              className="hidden"
            />
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>
        <button type="submit" className="ui button">
          Submit
        </button>
      </form>
      <div>
        <label htmlFor="file" className="ui icon button">
          <i className="file icon"></i>
          Open File
        </label>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={e => fileUploadHandler(e.target.files)}
        />
      </div>
    </Container>
        )}
 />
 );
};

export default AddApartment;