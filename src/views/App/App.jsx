import React from 'react';

import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';

import { Header } from '../../components';
import { HomePage } from '../HomePage';
import { BreweryDetailsPage } from '../BreweryDetails';

import { AppWrapper } from './App.styled';

export const App = () => (
    <AppWrapper>
        <Container>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/brewery/:breweryId" exact component={BreweryDetailsPage} />
            </Switch>
        </Container>
    </AppWrapper>
);

export default App;
