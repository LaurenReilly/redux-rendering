const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
let likes = document.getElementById("sortLikes");
let retweets = document.getElementById("sortRetweets");
let replies = document.getElementById("sortReplies");

likes.addEventListener('click', e => dispatch({type: "LIKES"}));
retweets.addEventListener('click', e => dispatch({type: "RETWEETS"}));
replies.addEventListener('click', e => dispatch({type: "REPLIES"}));
