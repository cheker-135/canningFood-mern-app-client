import {
   
    CLEAR_ERRORS,
  
    ALL_INVOICES_REQUEST,
    ALL_INVOICES_FAIL,
    ALL_INVOICES_SUCCESS,
   
  } from "../constants/invoiceConstant";



  export const allinvoicesReducer = (state = { invoiceData: [] }, action) => {
    switch (action.type) {
      case ALL_INVOICES_REQUEST:
        return {
          loading: true,
        };
      case ALL_INVOICES_SUCCESS: {
        return {
          loading: false,
          invoiceData: action.payload,
        };
      }
  
      case ALL_INVOICES_FAIL:
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