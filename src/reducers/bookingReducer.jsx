import {
    CREATE_BOOKING_REQUEST,
    CREATE_BOOKING_FAIL,
    CREATE_BOOKING_SUCCESS,
    CLEAR_ERRORS,
    MY_BOOKING_REQUEST,
    MY_BOOKING_SUCCESS,
    MY_BOOKING_FAIL,
    BOOKING_DETAILS_REQUEST,
    BOOKING_DETAILS_SUCCESS,
    BOOKING_DETAILS_FAIL,
    ALL_BOOKINGS_REQUEST,
    ALL_BOOKINGS_FAIL,
    ALL_BOOKINGS_SUCCESS,
    DELETE_BOOKING_REQUEST,
    DELETE_BOOKING_SUCCESS,
    DELETE_BOOKING_FAIL,
    UPDATE_BOOKING_REQUEST,
    UPDATE_BOOKING_SUCCESS,
    UPDATE_BOOKING_FAIL,
    DELETE_BOOKING_RESET,
    UPDATE_BOOKING_RESET
  } from "../constants/bookingConstant";

export const newBookingReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOOKING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_BOOKING_SUCCESS:
      return {
        ...state,
        order: action.payload,
      };

    case CREATE_BOOKING_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// myOrders reducer :

export const myBookingReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case MY_BOOKING_REQUEST:
      return {
        loading: true,
      };
    case MY_BOOKING_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case MY_BOOKING_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// order details reducer  =>
export const bookingDetialsReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case BOOKING_DETAILS_REQUEST:
      return {
        loading: true,
        success : false
      };

    case BOOKING_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
        success : true
      };

    case BOOKING_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
  
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// All orders

export const allBookingsReducer = (state = { reservations: [] }, action) => {
  switch (action.type) {
    case ALL_BOOKINGS_REQUEST:
      return {
        loading: true,
      };
    case ALL_BOOKINGS_SUCCESS: {
      return {
        loading: false,
        reservations: action.payload,
      };
    }

    case ALL_BOOKINGS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Delete and Upadte

export const deletUpdateBookingReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BOOKING_REQUEST:
    case UPDATE_BOOKING_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
      };

    case DELETE_BOOKING_FAIL:
    case UPDATE_BOOKING_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_BOOKING_RESET:
      return {
        ...state,
        isDeleted: false,
      };
      
    case UPDATE_BOOKING_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
