import { combineReducers } from 'redux';
import countriesReducer  from './countries-reducer';
import styles from '../country.css';

const reducers = combineReducers({
    countriesReducer
});

export default reducers;

//dobrapraktyka: w tym pliku scalają się wszystkie reducery aplikacji
// za pomocą combineReducers.
