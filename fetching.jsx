const {default:axios}=require("axios");
const {createStore,applyMiddleware}=require("redux")
const thunk=require("redux-thunk").default;

//constant
const GET_TODOS_REQUEST="GET_TODDOS_REQUEST";
const GET_TODOS_SUCCESS="GET_TODOS_SUCCESS";
const GET_TODOS_FAILED="GET_TODOS_FAILED";
const API_URL="https://jsonplaceholder.typicode.com/todos";
//STATES

const initialTodosState={
    todos:[],
    isLoading:false,
    error:null,
};



//actions

const getTODOSREQUEST=()=>{
    return{
        type:GET_TODOS_REQUEST,
    }
}

const getTODOSSUCCESS=(todos)=>{
    return{
        type:GET_TODOS_SUCCESS,
        payload:todos,
    }
}

const getTODOSFAILED=(error)=>{
    return{
        type:GET_TODOS_FAILED,
        payload:error,
    }
}


//todosReducer
const todosReducer=(state=initialTodosState,action)=>{
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return{
                ...state,
                isLoading:true,
            };

            case GET_TODOS_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    todos:action.payload
                };
        
                case GET_TODOS_FAILED:
                    return{
                        ...state,
                        isLoading:false,
                        error:action.payload
                    };
            
    
        default:
            return state;
    }
}

//async action creator

const fetchData=()=>{
    return(dispatch)=>{
       dispatch(getTODOSREQUEST());
       axios.get(API_URL)
       .then(res=> {
        const todos=res.data;
        const titles=todos.map((todo)=>todo.title);
        dispatch(getTODOSSUCCESS(titles));
       })
       .catch(error=>{
        const errorMessage=(error.message);
        dispatch(getTODOSFAILED(errorMessage))
       })
    }

}

//store
const store=createStore(todosReducer,applyMiddleware(thunk));
store.subscribe(()=> {
    console.log(store.getState());
});

store.dispatch(fetchData());