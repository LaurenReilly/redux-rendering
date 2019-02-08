const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, color } = action;

    // ACTION 1 - Increment height by 10
    if (type === "HEIGHT") {
        return {
            ...state,
            height: state.height + 10
        }
    } else if (type === "WIDTH") {
    // ACTION 2 - Increment width by 10
        return {
            ...state,
            width: state.width +10
        }
    } else if (type === "COLOR") {
    // ACTION 3 - Change the color
        return {
            ...state,
            color: color
        }
    }
    return state;
}