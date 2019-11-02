import {combineReducers} from "redux";
import StatReducer from './stat-reducers';

const allReducers = combineReducers({
    stats: StatReducer
});

export default allReducers;