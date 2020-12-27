import { combineReducers } from 'redux';
import nav from './nav';
import docker from './docker';

export default combineReducers({
    nav,
    docker
});
