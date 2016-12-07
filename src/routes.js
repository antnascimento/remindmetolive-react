import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
// import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import CasinoPage from './components/CasinoPage.js';
import PisaPage from './components/PisaPage.js';
import FlorencePage from './components/FlorencePage.js';
import StoriesPage from './components/StoriesPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="stories" component={StoriesPage}/>
    <Route path="pisa" component={PisaPage}/>
    <Route path="florence" component={FlorencePage}/>
    <Route path="casino" component={CasinoPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
