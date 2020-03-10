import { observable, action, computed } from "mobx";
import { createContext } from "react";
import agent from "../api/agent";
import IAgency from "../models/IAgency";

class IMSStore {
  @observable agencies: IAgency[] = [];
  @observable loadingInitial = false;
  @observable selectedElevatorAgency: IAgency | undefined;
  @observable editMode = false;
  @observable submitting = false;
  @observable agencyType: string = "";

  @action loadAgencies = async () => {
    try {
      const agencies = await agent.Agencies.list(this.agencyType);
      agencies.forEach(agency => {
        this.agencies.push(agency);
      });
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  @action setAgency = (agencyName: string) => {
      this.agencyType = agencyName;
  }
}

export default createContext(new IMSStore());