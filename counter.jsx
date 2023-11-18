
//constant,state,action,reddducer,store


//const

const { createStore }=require("redux");

const INCREMENT="INCREMENT";
const INCREMENT_BY_VALUE="INCREMENT_BY_VALUE";
const DECREMENT="DECREMENT";
const RESET="RESET";

//state
const initialState={
    count:0,
};

//action

const incrementCounterAction=()=>{
    return {
        type:INCREMENT,
    };
};

const decrementCounterAction=()=>{
    return {
        type:DECREMENT,
    };
};

const resetCounterAction=()=>{
    return {
        type:RESET,
    };
};

const incrementCounterByValue=(value)=>{
    return{
        type:INCREMENT_BY_VALUE,
        payload:value,
    }
}

//create reducer


const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + 1,
        };
      case DECREMENT:
        return {
          ...state,
          count: state.count - 1,
        };
      case RESET:
        return {
          ...state,
          count: 0,
        };

        case INCREMENT_BY_VALUE:
            return{
                ...state,
                count:state.count + action.payload,
            }
  
      default:
        state;
    }
  };





//store

const store =  createStore (counterReducer);

store.subscribe(()=> {
console.log(store.getState());
});

//store.dispatch(incrementCounterAction());
    //store.dispatch(incrementCounterAction());
 //store.dispatch(decrementCounterAction());
 store.dispatch(incrementCounterByValue(5));
 store.dispatch(incrementCounterByValue(15));
