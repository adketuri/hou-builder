const stats = {
    "Power": 5,
    "Stamina": 5,
    "Wisdom": 5
};

export default function (state = stats, action) {
    switch (action.type) {
        case "STAT_CHANGED":
            const stat = action.payload.stat;
            const value = state[action.payload.stat];
            return {
                ...state,
                [action.payload.stat]: state[action.payload.stat] + action.payload.change
            };
        default:
            return stats;
            break;
    }
}