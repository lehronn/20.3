import { combineReducers } from 'redux';
import countriesReducer  from './countries-reducer';

const reducers = combineReducers({
    countriesReducer
});

export default reducers;

//dobrapraktyka: w tym pliku scalają się wszystkie reducery aplikacji
// za pomocą combineReducers.
