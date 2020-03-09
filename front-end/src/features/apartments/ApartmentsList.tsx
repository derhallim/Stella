import React, { useState, useEffect, useContext } from "react";
import ApartmentsStore from "../../app/stores/apartmentsStore";
import IApartment from "../../app/models/IApartment";
import ApartmentView from "./ApartmentView";

const ApartmentsList = () => {
  const apartmentsStore = useContext(ApartmentsStore);

  useEffect(() => {
    apartmentsStore.loadApartments();
  }, [apartmentsStore]);

  return (
    <div>
      {apartmentsStore.apartments.map((apartment: IApartment) => (
        <ApartmentView apartment={apartment}/>
      ))}
    </div>
  );
};

export default ApartmentsList;
