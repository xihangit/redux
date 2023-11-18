//define constant
const {createStore}=require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";


// define states

const initialCounterState = {
     count: 0,
     };

//action-object-type,payload

const incrementCounter=()=>{
    return {
        type :INCREMENT,
    }
}



const decrementCounter=()=>{
    return {
        type :DECREMENT,
    }
}

// create reducer
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + 19,
        };
      case DECREMENT:
        return {
          ...state,
          count: state.count - 13,
        };
  
      default:
        return state;
    }
  };


  // 4. store - getState(), dispatch(), subscribe()

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());