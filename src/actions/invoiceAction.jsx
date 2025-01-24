import {
   
    ALL_INVOICES_REQUEST,
    ALL_INVOICES_SUCCESS,
    ALL_INVOICES_FAIL,
    CLEAR_ERRORS
   
  } from "../constants/invoiceConstant";
  import axios from "axios";
  import axiosInstance from '../axiosConfig';



  export const getinvoiceDetails = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_INVOICES_REQUEST });
  
      const { data } = await axiosInstance.get(`/api/v1/invoices/send-email`);
    
  
      dispatch({ type: ALL_INVOICES_SUCCESS, payload: data.invoiceData });
    } catch (error) {
      dispatch({ type: ALL_INVOICES_FAIL, payload: error.message });
    }
  };


  // clear errors
    
    export const clearErrors = () => async (dispatch) => {
      dispatch({ type: CLEAR_ERRORS });
    };
    