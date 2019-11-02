import {combineReducers} from "redux";
import StatReducer from './stat-reducers';

const allReducers = combineReducers({
    primaryStats: StatReducer
});

export default allReducers;