import { createStore } from 'redux';
import reducers from '../reducers/index';
// import DevTools from '../DevTools';

const store = createStore(reducers);

export default store;

//Wystarczy przekazać reducer jako argument
// funkcji createStore, a następnie go wyeksportować.

// DevTools.instrument()
