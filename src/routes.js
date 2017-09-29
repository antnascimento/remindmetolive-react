import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import ContactPage from './containers/ContactPage';

import MidsummerInHelsinkiStory from './stories/2017-08-20-midsummer-in-helsinki';
import SummerInAmsterdamStory from './stories/2017-06-17-summer-in-amsterdam';
import LisbonACharmingCityStory from './stories/2017-06-05-lisbon-a-charming-city';
import FlorenceStory from './stories/2017-01-15-florence-theme-park-of-renaissance';
import IrinaAndLucianMaternityPhotoSessionStory from './stories/2016-11-20-irina-and-lucian-maternity-photo-session';
import SienaTheTuscanBeautyStory from './stories/2016-11-12-siena-the-tuscan-beauty';
import PisaAfterglowStory from './stories/2016-10-08-pisa-afterglow';
import LondonAfterBrexitStory from './stories/2016-09-10-london-after-brexit';
import BridgesOfFlorenceStory from './stories/2016-06-30-bridges-of-florence';
import TenerifeTheLandOfEternalSpringStory from './stories/2016-06-11-tenerife-the-land-of-eternal-spring';
import LanzaroteBeachesStory from './stories/2016-05-17-lanzarote-beaches';
import WinterFairyTaleInSalzburgStory from './stories/2016-01-06-winter-fairy-tale-in-salzburg';
import CasinoOfConstantaStory from './stories/2015-10-15-the-casino-of-constanta';
import LoveAtTheGardensOfTheWorldStory from './stories/2015-09-30-love-at-the-gardens-of-the-world';
import LunarLandscapesOfLanzaroteStory from './stories/2015-09-29-lunar-landscapes-of-lanzarote';


import StoriesPage from './components/StoriesPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App} onChange={(prevState, nextState) => {
      if (nextState.location.action !== "POP") {
        window.scrollTo(0, 0);
      }
    }}>
    <IndexRoute component={HomePage}/>
    <Route path="stories" component={StoriesPage}/>
    <Route path="stories/midsummer-in-helsinki.html" component={MidsummerInHelsinkiStory}/>
    <Route path="stories/summer-in-amsterdam.html" component={SummerInAmsterdamStory}/>
    <Route path="stories/lisbon-a-charming-city.html" component={LisbonACharmingCityStory}/>
    <Route path="stories/florence-theme-park-of-renaissance.html" component={FlorenceStory}/>
    <Route path="stories/irina-and-lucian-maternity-photo-session.html" component={IrinaAndLucianMaternityPhotoSessionStory}/>
    <Route path="stories/siena-the-tuscan-beauty.html" component={SienaTheTuscanBeautyStory}/>
    <Route path="stories/pisa-afterglow.html" component={PisaAfterglowStory}/>
    <Route path="stories/london-after-brexit.html" component={LondonAfterBrexitStory}/>
    <Route path="stories/bridges-of-florence.html" component={BridgesOfFlorenceStory}/>
    <Route path="stories/tenerife-the-land-of-eternal-spring.html" component={TenerifeTheLandOfEternalSpringStory}/>
    <Route path="stories/lanzarote-beaches.html" component={LanzaroteBeachesStory}/>
    <Route path="stories/winter-fairy-tale-in-salzburg.html" component={WinterFairyTaleInSalzburgStory}/>
    <Route path="stories/the-casino-of-constanta.html" component={CasinoOfConstantaStory}/>
    <Route path="stories/love-at-the-gardens-of-the-world.html" component={LoveAtTheGardensOfTheWorldStory}/>
    <Route path="stories/lunar-landscapes-of-lanzarote.html" component={LunarLandscapesOfLanzaroteStory}/>

    <Route path="about" component={AboutPage}/>
    <Route path="contact" component={ContactPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
