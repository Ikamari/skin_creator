const initialState = {
    version: "0.7.1",
    isDev: false,
    debug: false
};

const other = (state = initialState, action) => {
    switch (action.type) {
        case "SWITCH_DEBUG" :
            return {...state, debug: !state.debug};
        default:
            return state;
    }
};

export default other