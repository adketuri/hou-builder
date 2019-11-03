// actionCreators: create and return an actions

export const changeStat = (stat, change) => {
    return {
        type: "STAT_CHANGED",
        payload: {stat, change}
    }
};

export const changeEquipment = (slot, equipment) => {
    return {
        type: "EQUIPMENT_CHANGED",
        payload: {slot, equipment}
    }
};

