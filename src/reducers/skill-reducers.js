const skills = {
    "allocations": [60],
    "names": ['Physical', 'Magical', 'Agile', 'Spiritual', 'Ranged']
};

export default function (state = skills, action) {
    switch (action.type) {
        case "SKILL_ADDED":
            const id = action.payload.id;
            let value = state['allocations'][id]++;
            value = Math.min(value, 9);
            state.allocations[id] = value;
            return {
                ...state,
            };
        default:
            return skills;
    }
}