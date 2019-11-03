const equipment = {
    "weapon": {
        "name": "Wooden Sword",
        "atk": 5,
        "type": "sword"
    },
    "armor": {
        "name": "Scrap Leather",
        "def": 5
    },
    "helmet": {
        "name": "Scrap Helmet",
        "def": 5
    },
    "other": {
        "name": "Scrap Accessory",
        "def": 5
    }
};

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