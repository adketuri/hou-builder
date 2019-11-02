// actionCreator -> job is to create and return an action
export const changeStat = (stat, change) => {
    return {
        type: "STAT_CHANGED",
        payload: {stat, change}
    }
};

