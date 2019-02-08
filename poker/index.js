const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

//array of possible card values/suits
let valueArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K", "Q"];
let suitArray = ["C", "D", "H", "S"];

//random function
let random = (max) => {
    return Math.floor(Math.random() * max);
}


let newCard = () => {
    return {
        value: valueArray[random(valueArray.length)],
        suit: suitArray[random(suitArray.length)]
    }
}
// Write DOM event listeners here, make them dispatch actions to the Redux store 

let card1 = document.getElementById('card1Button');
card1.addEventListener('click', e => dispatch({type: "CHANGE", id: 1, card: newCard()}));

let card2 = document.getElementById('card2Button');
card2.addEventListener('click', e => dispatch({type: "CHANGE", id: 2, card: newCard()}));