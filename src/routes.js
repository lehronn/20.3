import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
import CountryFlagContainer from './containers/flag-container.component';
import CountryDetailsContainer from './containers/country-detail-container.component';
import ContinentsContainer from './containers/continents-container.component';

export default (
  <Route path='/' component={Navigation}>
    <IndexRoute component={Home}/>
    <Route path='countries' >
      <IndexRoute component={CountryFlagContainer}/>
      <Route path='country/:id' component={CountryDetailsContainer}/>
    </Route>
    <Route path='continents' component={ContinentsContainer}/>
    <Route path='contact' component={Contact}/>
    <Route path='*' component={NotFound}/>
  </Route>
);

// Jedyną różnicą między IndexRoute a <Route> jest to, że przyjmuje
// jeden parametr - wyłącznie komponent.
// Parametr path w takim komponencie zawsze odnosi się do pustej ścieżki,
// czyli '/'. Dwa poniższe zapisy są zatem ekwiwalentami:
//
// <Route path='/' component={Home} />
// <IndexRoute component={Home} />



// Stworzyliśmy komponent Route bez przekazywania do niego komponentu.
// Dzięki temu wydzieliliśmy wspólną ścieżkę, którą odziedziczą
// zagnieżdżone elementy:
//
// <CountryFlagContainer> jako <IndexRoute> renderowany będzie pod adresem
// swojego bezpośredniego rodzica - /countries
//
// <CountryDetailsContainer> również odziedziczy część ścieżki od swojego
// rodzica, ale doda do niej jeszcze coś od siebie, wskazując ostatecznie
// na /countries/country/:id, gdzie id jest parameterem (route parameter)
