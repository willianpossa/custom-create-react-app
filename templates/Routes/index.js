module.exports = `import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import { isAuthenticated } from '../Services/Authentication';

// Layouts
import PublicLayout from './Layouts/Public';
import AuthenticateLayout from './Layouts/Authenticate';

// Bases
import PublicRoute from './Bases/Public';
import AuthRoute from './Bases/Authenticate';

// Paths
import RoutesAuth from './Paths/Auth';
import RoutesPublic from './Paths/Public';

// import RouteChanged from '@Components/Hoc/RouteChanged';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    { RoutesAuth.map(
                        route => <AuthRoute key={ route.path } { ...route } layout={ AuthenticateLayout } authed={ isAuthenticated() } />
                    )}

                    { RoutesPublic.map(
                        route => <PublicRoute key={ route.path } { ...route } layout={ PublicLayout } />
                    )}

                    <Route path="*" render={() => {
                        <h1>404 - Página não encontrada</h1>
                    }} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
`