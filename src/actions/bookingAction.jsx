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
  } from "../constants/bookingConstant";
  import axios from "axios";
  import axiosInstance from '../axiosConfig';
  
  
  export const createBooking = (order) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_BOOKING_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axiosInstance.post("/api/v1/order/new", order, config);
  
      dispatch({ type: CREATE_BOOKING_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CREATE_BOOKING_FAIL, payload: error.message });
    }
  };
  
  // get all orders
  export const myBookings = () => async (dispatch) => {
    try {
      dispatch({ type: MY_BOOKING_REQUEST });
  
      const { data } = await axiosInstance.get("/api/v1/reservations/myOrders");
  
      dispatch({ type: MY_BOOKING_SUCCESS, payload: data.userOrders });
    } catch (error) {
      dispatch({ type: MY_BOOKING_FAIL, payload: error.message });
    }
  };
  
  // get single order
  
  export const getBookingDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: BOOKING_DETAILS_REQUEST });
  
      const { data } = await axiosInstance.get(`/api/v1/order/${id}`);
  
      dispatch({ type: BOOKING_DETAILS_SUCCESS, payload: data.order });
    } catch (error) {
      dispatch({ type: BOOKING_DETAILS_FAIL, payload: error.message });
    }
  };
  
  export const getAllBookings = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_BOOKINGS_REQUEST });
  
      const { data } = await axiosInstance.get(`/api/v1/reservations`);
    
  
      dispatch({ type: ALL_BOOKINGS_SUCCESS, payload: data.reservations });
    } catch (error) {
      dispatch({ type: ALL_BOOKINGS_FAIL, payload: error.message });
    }
  };
  
  
  // delet Order --> admin
  export const deleteBooking = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_BOOKING_REQUEST });
  
      const { data } = await axiosInstance.delete(`/api/v1/admin/reservation/${id}`);
  
      dispatch({ type: DELETE_BOOKING_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({ type: DELETE_BOOKING_FAIL, payload: error.message });
    }
  };
  
  // update order --> admin (status update) 
  export const updateBooking = (id, productData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_BOOKING_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axiosInstance.put(
        `/api/v1/admin/order/${id}`,
        productData,
        config
      );
      dispatch({ type: UPDATE_BOOKING_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({ type: UPDATE_BOOKING_FAIL, payload: error.message });
    }
  };
  
  // clear errors
  
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  