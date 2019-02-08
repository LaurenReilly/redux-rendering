const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

//random function (generic, could be simplified since min always = 0)
let random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

//reducer function handling dispatch of actions, spread original state array into the return statement, add in a random circle using the random index from random()
const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    let index = random(0, state.length);

    // ACTION: Add a random circle
    if (type === "ADD") {
        return [
            ...state,
            state[index]
        ]
    }
    return state;
}