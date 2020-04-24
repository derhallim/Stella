import { observable, action } from "mobx";
import { createContext } from "react";
import IApartment from "../models/IApartment";
import agent from "../api/agent";
import { IApartmentMapInfo } from "../models/IApartmentMapInfo";
import Geocode from "react-geocode";
import { RootStore } from "./rootStore";
import ICity from "../models/ICity";

export default class CMSStore {

  rootStore: RootStore; 

  constructor(rootStore: RootStore){
    this.rootStore = rootStore;
  }


  @observable apartments: IApartment[] = [];
  @observable aptMarkerInfos: IApartmentMapInfo[] = [];
  @observable cities: ICity[] = [];
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
  @action createCity = async (city: ICity) => {
    try {
      await agent.Cities.create(city);
      this.cities.push(city);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
}