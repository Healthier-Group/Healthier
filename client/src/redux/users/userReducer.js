

const initialState = { 
    users: [],
    products: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "hola":
            return state;
        default: 
            return state;
    }
}

export default reducer;