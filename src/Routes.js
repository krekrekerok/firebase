import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainContextProvider from './context/MainContext';
import Auth from './pages/Auth';
import Main from './pages/Main';

const Routes = () => {
    return (
        <MainContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path ="/auth" component={Auth}/>
                    <Route exact path ="/" component={Main}/>
                </Switch>
            </BrowserRouter>
        </MainContextProvider>
    );
};

export default Routes;