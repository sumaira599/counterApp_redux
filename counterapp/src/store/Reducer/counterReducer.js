const INITIALSTATE = {
    globalCounter: 0,
}

const counterReducer = (state = INITIALSTATE , action)=>{
    switch (action.type){
        case "ADD_COUNTER":
        console.log("addCounterReducer")
    return{
     globalCounter: ++state.globalCounter,
    };
        case "MINUS_COUNTER":
            console.log("minusCounterReducer");
            return{
                globalCounter: --state.globalCounter,
            };
            default:
                return{...state};
}
};

export default counterReducer;
