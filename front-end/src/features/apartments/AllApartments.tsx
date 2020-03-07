import React, { useState, useEffect, useContext } from "react";
import agent from "../../app/api/agent";
import ApartmentsStore from '../../app/stores/apartmentsStore'
import IApartment from "../../app/models/IApartment";

const AllApartments = () => {
    const apartmentsStore = useContext(ApartmentsStore);
    
  useEffect(() => {
    apartmentsStore.loadApartments();
   
  }, [apartmentsStore]);
  
  return (
      <div>{apartmentsStore.apartments.map((apartment: IApartment) => <div>{apartment.description}</div>)}
    </div>
  );
};

export default AllApartments;