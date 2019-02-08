const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
let width = document.getElementById("width");
let height = document.getElementById ("height");
let red = document.getElementById("red");
let blue = document.getElementById("blue");

width.addEventListener("click", e => dispatch({type: "WIDTH"}));
height.addEventListener("click", e => dispatch({type: "HEIGHT"}));
red.addEventListener("click", e => dispatch({type: "COLOR", color: "red"}));
blue.addEventListener("click", e => dispatch({type: "COLOR", color: "blue"}));
