import React from "react";
import {  Card } from "semantic-ui-react";
import ICity from "../../app/models/ICity";
import styles from './ApartmentView.module.scss'

const CityDropdownOptions = ({city}: {city: ICity}) => {
  return (   
   
        <option key={city.id} value={city.name}>{city.name}</option>      

  );
};

export default CityDropdownOptions;