import { combineReducers } from 'redux';
import { weather } from './WeatherReducer';

export let reducers = combineReducers({ weather });
