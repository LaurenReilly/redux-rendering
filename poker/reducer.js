const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];


const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, id, card } = action;

// ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    if (type === "CHANGE") {
        if (id === 1) {
            return [
                card,
                ...state.slice(1)
            ];
        } else if (id === 2) {
            return [
                ...state.slice(0, 1),
                card
            ];
        }  
    }
    return state;
}