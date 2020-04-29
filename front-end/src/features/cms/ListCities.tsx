import React, {useEffect, useContext} from 'react'
import { Container } from 'semantic-ui-react'
import IApartment from '../../app/models/IApartment'
import cmsStore from '../../app/stores/cmsStore'
import CityDropdownOptions from './CityDropdownOptions'
import { RootStoreContext } from '../../app/stores/rootStore'

const ListCities = () => {    
    const ctx = useContext(RootStoreContext);
    const {cities, loadCities}  = ctx.cmsStore;
    useEffect(() => {
        loadCities();
    })

    return (
        <select className="form-control"  name="city" >             
       
        
           {cities.map(a => { 
               return (
                   
                   <CityDropdownOptions  city= {a}/>
               )
           })}
     </select> 
    )
}

export default ListCities