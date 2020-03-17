import React, {useEffect, useContext} from 'react'
import { Container } from 'semantic-ui-react'
import IApartment from '../../app/models/IApartment'
import cmsStore from '../../app/stores/cmsStore'
import ApartmentView from './ApartmentView'

const ListApartments = () => {
    const ctx = useContext(cmsStore)
    const {apartments, loadApartments}  = ctx;
    
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
