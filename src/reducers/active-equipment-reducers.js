const equipment = {};

export default function (state = equipment, action) {
    switch (action.type) {
        case "EQUIPMENT_CHANGED":
            return {
                ...state,
                [action.payload.slot]: action.payload.equipment
            };
        default:
            return state;
    }
}