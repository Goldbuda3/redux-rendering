const initialState = [
    "Kamilah",
    "Stuart"
];


const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    // Add a Name Tag
    if (type === "ADD_NAME"){
        // make a copy of the state and add a circle to that copy
        newState = state.concat(action.name);
        console.log("returning");
        console.log(newState);
        return newState;
    }
        return state;
}