const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store
//e.preventDefault() wasn't stopping page refresh when pressing enter but would stop it if you typed a name and then clicked off of the field, took the text input out of the form in index.html to stop that behavior. 
let form = document.getElementById("nameForm");
form.addEventListener('change', e => {
    e.preventDefault();
    dispatch({type: "ADD", name: e.target.value})
});
