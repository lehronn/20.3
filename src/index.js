import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/index';
import routes from './routes';
// import styles from './country.css';
import DevTools from './DevTools';

render(
  <Provider store={store}>
    <div>
      <Router history={hashHistory} routes={routes}>
      </Router>
      <DevTools />
    </div>

  </Provider>,
  document.getElementById('root')
);



//provider może dostać tylko jeden element, dlatego jest w divie.

// Komponent <Router> może przyjmować opcjonalny
// parametr routes. Dzięki temu, możemy wydzielić
// wszystkie tworzone route'y do osobnego pliku, który
// zazwyczaj nazywa się po prostu routes.js. Jest to
// bardzo dobra praktyka.
