import React from 'react'
import { Container, Grid } from 'semantic-ui-react';
import { IMSNav } from './IMSNav';
import { Route } from 'react-router-dom';
import {Electricians, Plumbing, Renovation, Elevators, Cleaning, IMSHome} from './index'

 const IMS = () => {
    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <IMSNav/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route path='/ims/' exact component={IMSHome}/>
                        <Route path='/ims/electricians'  component={Electricians}/>
                        <Route path='/ims/plumbing'  component={Plumbing}/>
                        <Route path='/ims/renovation'  component={Renovation}/>
                        <Route path='/ims/elevators'  component={Elevators}/>
                        <Route path='/ims/cleaning'  component={Cleaning}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default IMS;  


