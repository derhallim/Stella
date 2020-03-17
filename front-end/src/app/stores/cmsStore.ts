import { observable, action } from "mobx";
import { createContext } from "react";
import IApartment from "../models/IApartment";
import agent from "../api/agent";
import { IApartmentMapInfo } from "../models/IApartmentMapInfo";
import Geocode from "react-geocode";

class CMSStore {
  @observable apartments: IApartment[] = [];
  @observable aptMarkerInfos: IApartmentMapInfo[] = [];

  @action loadApartments = async () => {
    try {
      this.apartments = [];
      const apartments = await agent.Apartments.list();

      apartments.forEach(apartment => {
        this.apartments.push(apartment);
      });
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  getApartment = (id: string) => {
    return this.apartments.find(a => a.id === id);
  };

  @action createApartment = async (apartment: IApartment) => {
    try {
      await agent.Apartments.create(apartment);
      this.apartments.push(apartment);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  @action openCreateForm = () => {};

  @action selectApartment = (id: string) => {};
}

export default createContext(new CMSStore());
