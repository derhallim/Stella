import React, {useEffect, useContext} from 'react'
import { Container } from 'semantic-ui-react'
import IApartment from '../../app/models/IApartment'
import cmsStore from '../../app/stores/cmsStore'
import ApartmentView from './ApartmentView'
import { RootStoreContext } from '../../app/stores/rootStore'

const ListApartments = () => {
    // const rootStore = useContext(RootStoreContext);
    const ctx = useContext(RootStoreContext);


    const {apartments, loadApartments}  = ctx.cmsStore;
    
    useEffect(() => {
        loadApartments();
    })

    return (
       <Container>
           {apartments.map(a => { 
               return (
                   <ApartmentView apartment = {a}/>
               )
           })}
       </Container>
    )
}

export default ListApartments
