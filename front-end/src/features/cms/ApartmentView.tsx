import React from "react";
import {  Card } from "semantic-ui-react";
import IApartment from "../../app/models/IApartment";

const ApartmentView = ({apartment}: {apartment: IApartment}) => {
  return (
      <Card
        image={apartment.imageUrl}
        header={apartment.title}
        meta={`Number of rooms ${apartment.numOfRooms}`}
        description={apartment.description}
        extra={apartment.city}
      />
  );
};

export default ApartmentView;