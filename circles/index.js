const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

let colorArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "grey", "black"];

let length = colorArray.length;

//random integer function
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

// Write DOM event listeners here, make them dispatch actions to the Redux store 
let button = document.getElementById('addCircle');
button.addEventListener('click', e => dispatch({type: 'ADD', 
    color: colorArray[random(0, length)], 
    radius: random(10, 200)}));