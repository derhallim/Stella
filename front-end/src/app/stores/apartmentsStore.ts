import {observable, action} from 'mobx';
import { createContext } from 'react';
import IApartment from '../models/IApartment';
import agent from '../api/agent';

class ApartmentsStore{
    @observable apartments: IApartment[] = []; 
    @observable loadingInitial = false;

    @action loadApartments = () => {
        this.loadingInitial = true;  
        agent.Apartments.list()
            .then(apartments => {
                apartments.forEach(apartment => {
                    this.apartments.push(apartment)
                })
            })
            .finally(() => this.loadingInitial = false)
    }
}

export default createContext (new ApartmentsStore());