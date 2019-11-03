import {combineReducers} from "redux";
import StatReducer from './stat-reducers';
import EquipmentReducer from './active-equipment-reducers';

const allReducers = combineReducers({
    primaryStats: StatReducer,
    equipment: EquipmentReducer
});

export default allReducers;