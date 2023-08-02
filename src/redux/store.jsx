import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const apiKey = import.meta.env.VITE_REACT_APP_X_RapidAPI_Key;
const apiHost = import.meta.env.VITE_REACT_APP_X_RapidAPI_Host;

//actions
const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

const FETCH_PRODUCT_DETAIL_REQUEST = "FETCH_PRODUCT_DETAIL_REQUEST";
const FETCH_PRODUCT_DETAIL_SUCCESS = "FETCH_PRODUCT_DETAIL_SUCCESS";
const FETCH_PRODUCT_DETAIL_FAILURE = "FETCH_PRODUCT_DETAIL_FAILURE";

//ACTION CREATORS
const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
  loading: true
});

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  loading: false,
  payload: products
});

const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  loading: false,
  payload: error
});

const fetchProductDetailRequest = () => ({
  type: FETCH_PRODUCT_DETAIL_REQUEST,
  loading: true
});

const fetchProductDetailSuccess = (product) => ({
  type: FETCH_PRODUCT_DETAIL_SUCCESS,
  loading: false,
  payload: product
});

const fetchProductDetailFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  loading: false,
  payload: error
});

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",{
        headers:{
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        },
        params:{
            categories: 'ladies_occasion_wedding',
        }

      })
      .then((res) => {
        dispatch(fetchProductsSuccess(res.data.results));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};

export const fetchDetails = (prodCode) => {
  return (dispatch) => {
    dispatch(fetchProductDetailRequest());
    axios
      .get("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail",{
        headers:{
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        },
        params:{
          productcode: prodCode,
        }

      })
      .then((res) => {
        dispatch(fetchProductDetailSuccess(res.data.product));
      })
      .catch((error) => {
        dispatch(fetchProductDetailFailure(error.message));
      });
  };
};


const productInitialState = {
  loading: true,
  products: [],
  error: ""
};

const productDetailInitialState = {
  loading: true,
  product: [],
  error: ""
};

//reducers
const productsReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: action.loading };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: action.loading, products: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: action.loading, error: action.payload };
    default:
      return state;
  }
};

const detailsReducer = (state = productDetailInitialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAIL_REQUEST:
      return { ...state, loading: action.loading };
    case FETCH_PRODUCT_DETAIL_SUCCESS:
      return { ...state, loading: action.loading, product: action.payload };
    case FETCH_PRODUCT_DETAIL_FAILURE:
      return { ...state, loading: action.loading, error: action.payload };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  products: productsReducer,
  details: detailsReducer
});

//store
const store = createStore(rootReducer, applyMiddleware(thunk));

// store.subscribe(() => console.log(store.getState()));

export { store };
