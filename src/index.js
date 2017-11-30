import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import { getCountries } from './actions/actions-countries';

render(
    <Provider store={store}>
        <div>
          <h1>Project Header</h1>
          <DevTools />
        </div>

    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries()); //wywołanie akcji za pomocą dyspozytora.

//provider może dostać tylko jeden element, dlatego jest w divie.
