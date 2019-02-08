const initialState = [
    {
        user: {
            handle: "@officialjaden",
            username: "Jaden Smith",
            isVerified: true,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "The Moment That Truth Is Organized It Becomes A Lie",
        likes: 231,
        retweets: 12,
        replies: 21
    },
    {
        user: {
            handle: "@officialjaden",
            username: "Jaden Smith",
            isVerified: true,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
        likes: 112,
        retweets: 2,
        replies: 24
    },
    {
        user: {
            handle: "@DigitalCrafts",
            username: "DigitalCrafts Bootcamp",
            isVerified: false,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "Sign up for our next course plz!",
        likes: 11,
        retweets: 3,
        replies: 144
    }
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    let mutableState = [...state];
    const { type } = action;
    if (type === "LIKES") {
    // ACTION 1 - Sort by # likes  
        return mutableState.sort((a, b) => b.likes - a.likes);
    } else if (type === "RETWEETS") {
    // ACTION 2 - Sort by # retweets
        return mutableState.sort((a, b) => b.retweets - a.retweets);
    } else if (type === "REPLIES") {
    // ACTION 3 - Sort by # replies
        return mutableState.sort((a, b) => b.replies - a.replies);
    }
    return state;
}
