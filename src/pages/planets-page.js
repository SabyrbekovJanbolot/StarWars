import React, { Component } from 'react';
import SwapiService from '../services/swapi-service';
import { Row } from '../components/row';
import { PlanetsList } from '../components/sw-items/lists';
import { PlanetDetails } from '../components/sw-items/details';
import ErrorBoundry from '../components/error-handler/error-boundry';


export default class PlanetsPage extends Component {
    
    state = {
        selectedPlanet: 7
    };

    swapiService = new SwapiService();

    onPlanetSelected = (id) => {
        this.setState({
            selectedPlanet: id
        });
    }

    render() {
        const { selectedPlanet } = this.state; 

        return (
            <ErrorBoundry>
                <Row>
                    <ErrorBoundry>
                        <PlanetsList onItemSelected={this.onPlanetSelected}/>
                    </ErrorBoundry>
                    <ErrorBoundry>
                        <PlanetDetails itemId={selectedPlanet}/>
                    </ErrorBoundry>
                </Row>
            </ErrorBoundry>
        );
    }
} 