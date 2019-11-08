import { combineReducers } from "redux";
import StatReducer from "./stat-reducers";
import EquipmentReducer from "./active-equipment-reducers";
import UIReducer from "./ui-reducers";
import SkillReducer from "./skill-reducers";

const allReducers = combineReducers({
  primaryStats: StatReducer,
  equipment: EquipmentReducer,
  ui: UIReducer,
  skills: SkillReducer
});

export default allReducers;
