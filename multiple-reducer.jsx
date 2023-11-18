
//product constant
const { createStore, combineReducers }=require("redux");

const GET_PRODUCTS="GET_PRODUCTS";
const ADD_PRODUCT="ADD_PRODUCTS";

//car constant
const GET_CART_ITEMS="GET_CART_ITEMS";
const ADD_CART_ITEM="ADD_CART_ITEM";


//product state
const initialProductState={
    products:["sugar",'salt'],
    numberofProducts:2,
};

//cart state
const initialCartState={
cart:["sugar"],
    numberofProducts:1,
};



//product action

const getProducts=()=>{
    return {
        type:'GET_PRODUCTS',
    };
};


const addProduct=(product) => {
    return {
        type:ADD_PRODUCT,
        payload:product,
    };
};

//cart action

const getCart=()=>{
    return {
        type:'GET_CART_ITEMS',
    };
};


const addCart=(product) => {
    return {
        type:ADD_CART_ITEM,
        payload:product,
    };
};




const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
      case GET_PRODUCTS:
        return {
          ...state,
        };
      case ADD_PRODUCT:
        return {
          products: [...state.products, action.payload],
          numberofProducts: state.numberofProducts + 1,
        };
  
      default:
        return state;
    }
  };
  
  const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
      case GET_CART_ITEMS:
        return {
          ...state,
        };
      case ADD_CART_ITEM:
        return {
          cart: [...state.cart, action.payload],
          numberofProducts: state.numberofProducts + 1,
        };
  
      default:
        return state;
    }
  };



//store


const rootReducer=combineReducers({
    productR:productReducer,
    cartR:cartReducer,
});






const store =createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState());

});


  store.dispatch(getProducts());
  store.dispatch(addProduct("pen"));


      store.dispatch(getCart());
     store.dispatch(addCart("pen"));