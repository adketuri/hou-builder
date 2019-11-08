const skills = {
  allocations: {}
};

export default function(state = skills, action) {
  switch (action.type) {
    case "SKILL_ADDED":
      const id = action.payload.id;
      let value = state.allocations[id] || 0;
      value = Math.min(value + 1, 9);
      state.allocations[id] = value;
      return {
        ...state
      };
    default:
      return skills;
  }
}
