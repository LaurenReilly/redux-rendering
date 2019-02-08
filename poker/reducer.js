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

//array of possible card values/suits
let valueArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K", "Q"];
let suitArray = ["C", "D", "H", "S"];

//random function
let random = (max) => {
    return Math.floor(Math.random() * max);
  }

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, id } = action;

// ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    if (type === "CHANGE") {
        let newCard = {
            value: valueArray[random(valueArray.length)],
            suit: suitArray[random(suitArray.length)]
        }
        if (id === 1) {
            return [
                newCard,
                ...state.slice(1)
            ];
        } else if (id === 2) {
            return [
                ...state.slice(0, 1),
                newCard
            ];
        }  
    }
    return state;
}