import {combineReducers} from "redux";
import StatReducer from './stat-reducers';
import EquipmentReducer from './active-equipment-reducers';
import UIReducer from './ui-reducers';

const allReducers = combineReducers({
    primaryStats: StatReducer,
    equipment: EquipmentReducer,
    ui: UIReducer,
});

export default allReducers;