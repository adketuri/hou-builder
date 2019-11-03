const ui = {
    "activeSlot": null,
    "showEquipment": false
};

export default function (state = ui, action) {
    switch (action.type) {
        case "EQUIPMENT_SHOWN":
            return {
                ...state,
                "activeSlot": action.payload,
                "showEquipment": true
            };
        case "EQUIPMENT_HIDE":
            return {
                ...state,
                "showEquipment": false
            };
        default:
            return state;
    }
}