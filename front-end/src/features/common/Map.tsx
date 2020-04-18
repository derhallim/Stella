import React, {useContext, useState, useEffect} from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Geocode from "react-geocode";
import cmsStore from '../../app/stores/cmsStore'
import { observer } from "mobx-react-lite";
import { IApartmentMapInfo } from "../../app/models/IApartmentMapInfo";
import { RootStoreContext } from "../../app/stores/rootStore";

export interface IMapProps{
  width: string; 
  height: string; 
  google?: any;
}

const CompanyMap = (props: IMapProps) => {
  const ctx = useContext(RootStoreContext)
  Geocode.setApiKey("AIzaSyDX4PcNox7xclNHXj-OwXz3e8JI_Jlxj7E");
  const [markersData, setMarkersData] = useState<IApartmentMapInfo[]>([]); 

  const {apartments} = ctx.cmsStore;
  const amis: IApartmentMapInfo[] = [];


  useEffect(() => {
    setMarkersData(amis);
    apartments.forEach(a => {
      Geocode.fromAddress(a.fullAddress).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          amis.push({ lat, lng, title: a.title });
        },
        error => {
          console.error(error);
        }
      );
    })
    
  }, [])

  return (
    <Map
      google={props.google}
      zoom={14}
      style={{ width: props.width, height: props.height, position: "relative" }}
      initialCenter={{
        lat: 45.5158889,
        lng: -73.5759575
      }}
    >
{/* 
      {markersData.map(markersData => { 
        return (
          <Marker
          name={markersData.title}
          position={{lat: markersData.lat, lng:markersData.lng}} />
        )
      })} */}

<Marker
          name= "Apartment 5 1/2 in Downtown Montreal"
          position={{lat: 45.5077014, lng:-73.575464}} />

<Marker
          name="Small Studio for rent in Montreal."
          position={{lat: 45.5140846, lng: -73.5685439}} />
  <Marker
          name= "Cozy aparmtnet with 2 bathrooms available"
          position={{lat: 45.5187606, lng:-73.5724814}} />
          
      <InfoWindow>
        <div>
          <h1>Test</h1>
        </div>
      </InfoWindow>
    </Map>
  );
};
export default  GoogleApiWrapper({
  apiKey: `AIzaSyDX4PcNox7xclNHXj-OwXz3e8JI_Jlxj7E`
})(CompanyMap);
