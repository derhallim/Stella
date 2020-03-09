import { observable, action, computed } from "mobx";
import { createContext } from "react";
import IApartment from "../models/IApartment";
import agent from "../api/agent";

class ApartmentsStore {
  @observable apartments: IApartment[] = [];
  @observable loadingInitial = false;
  @observable selectedApartment: IApartment | undefined;
  @observable editMode = false;
  @observable submitting = false;
    
  @action loadApartments = async () => {
    this.loadingInitial = true;
    try {
      const apartments = await agent.Apartments.list();
      apartments.forEach(apartment => {
        this.apartments.push(apartment);
      });
    } catch (err) {
      console.log(err);
    } finally {
      this.loadingInitial = false;
    }
  };

//   @action loadApartment = async (id: string){
//     // let apartment = this.getApartment(id);
//     // if(apartment) {
//     //     this.selectedApartment = apartment;
//     // }
//     // else{

//     // }
//   }


  getApartment = (id: string)  => {
      return this.apartments.find(a => a.id === id)
  }

  @action createApartment = async (apartment: IApartment) => {
    this.submitting = true;
    try {
      await agent.Apartments.create(apartment);
      this.apartments.push(apartment);
      this.editMode = false;
      this.submitting = false;
    } catch (err) {
      console.log(err);
    } finally {
      this.submitting = false;
    }
  };

  @action openCreateForm = () => {
    this.editMode = true;
    this.selectedApartment = undefined;
  };

  @action selectApartment = (id: string) => {
    this.selectedApartment = this.apartments.find(a => a.id === id);
    this.editMode = false;
  };
}

export default createContext(new ApartmentsStore());
