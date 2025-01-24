import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducer,
  productDetailsReducer,
  newReviewReducer,
  newProductReducer,
  deleteUpdateReducer,
   getALLReviewReducer,
   deleteReviewReducer
} from "./reducers/productReducers";
import {
  foodsReducer,
  foodDetailsReducer,
  deleteUpdateFoodReducer,
  newFoodReducer,

  
} from "./reducers/foodReducer";
import {
  profileReducer,
  userReducer,
  forgetPasswordReducer,
  userDetailsReducer,
  allUsersReducer,
} from "./reducers/userReducer";

import { cartReducer } from "./reducers/cartReducer";
import {
  newOrderReducer,
  myOrderReducer,
  orderDetialsReducer,
  allOrdersReducer,
  deletUpdateOrderReducer,
  

} from "./reducers/orderReducer";
import {
  newBookingReducer,
  myBookingReducer,
  bookingDetialsReducer,
  allBookingsReducer,
  deletUpdateBookingReducer,
  

} from "./reducers/bookingReducer";


import {
  allinvoicesReducer
  

} from "./reducers/invoiceReducer";


const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  foods: foodsReducer,
  foodDetails: foodDetailsReducer,
  invoiceDetails:  allinvoicesReducer,
  addNewFood: newFoodReducer,
  userData: userReducer,
  profileData: profileReducer,
  forgetPassword: forgetPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrder: myOrderReducer,
  orderDetails: orderDetialsReducer,
  allOrders: allOrdersReducer,
  deleteUpdateOrder: deletUpdateOrderReducer,
  addNewReview: newReviewReducer,
  addNewProduct: newProductReducer,
  deleteUpdateProduct: deleteUpdateReducer,
  deleteUpdateFood: deleteUpdateFoodReducer,
  newBooking: newBookingReducer,
  myBooking: myBookingReducer,
  bookingDetails: bookingDetialsReducer,
  allBookings: allBookingsReducer,
  deleteUpdateBooking: deletUpdateBookingReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  deleteReview :deleteReviewReducer,
  getAllReview : getALLReviewReducer
});

// get all Cart values from local storage and pass this initial state into store
let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : [],
  },
};


const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
