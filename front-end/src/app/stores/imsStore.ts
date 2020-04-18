import { observable, action, computed } from "mobx";
import { createContext } from "react";
import agent from "../api/agent";
import IAgency from "../models/IAgency";
import { RootStore } from "./rootStore";

export default class IMSStore {

  rootStore: RootStore; 

  constructor(rootStore: RootStore){
    this.rootStore = rootStore;
  }

  @observable agencies: IAgency[] = [];
  @observable loadingInitial = false;
  @observable selectedElevatorAgency: IAgency | undefined;
  @observable editMode = false;
  @observable submitting = false;
  @observable agencyType: string = "";

  @action loadAgencies = async (agencyType: string) => {
    // this.agencies = [];
    // try {
    //   const agencies = await agent.Agencies.list(agencyType);
    //   agencies.forEach(agency => {
    //     this.agencies.push(agency);
    //   });
    // } catch (err) {
    //   console.log(err);
    // } finally {
    // }

    try {
      this.agencies = await agent.Agencies.list(agencyType);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  @action setAgency = (agencyName: string) => {
    this.agencyType = agencyName;
  };
}

