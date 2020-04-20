import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SendMessage from './pages/SendMessage';
import Thanks from './pages/Thanks';
import RequestError from './pages/RequestError';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={ SendMessage } />
                <Route path='/thanks' component={ Thanks } />
                <Route path='/error' component={ RequestError } />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;