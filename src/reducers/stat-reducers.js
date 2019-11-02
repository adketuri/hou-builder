const stats = {
    "stats": {
        "Power": 5,
        "Stamina": 5,
        "Wisdom": 5
    },
    "level": 1,
    "rebirth": false
};

const minimumAllocatedStats = process.env.REACT_APP_MIN_STAT * Object.keys(stats['stats']).length;

export default function (state = stats, action) {
    switch (action.type) {
        case "STAT_CHANGED":
            const stat = action.payload.stat;
            let value = state['stats'][action.payload.stat] + action.payload.change;
            value = Math.max(process.env.REACT_APP_MIN_STAT, Math.min(value, process.env.REACT_APP_MAX_STAT));
            state.stats[stat] = value;
            const allocatedStats = Object.values(state.stats).reduce((t, n) => t + n);
            const level = Math.ceil((allocatedStats - minimumAllocatedStats) / 2 + 1);
            return {
                ...state,
                stats: {
                    ...state.stats,
                },
                level: level
            };
        default:
            return stats;
    }
}