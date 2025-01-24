import {
    ALL_FOOD_REQUEST,
    ALL_FOOD_SUCCESS,
    ALL_FOOD_FAIL,
    ADMIN_FOOD_REQUEST,
    ADMIN_FOOD_SUCCESS,
    ADMIN_FOOD_FAIL,
    CLEAR_ERRORS,
    FOOD_DETAILS_REQUEST,
    FOOD_DETAILS_SUCCESS,
    FOOD_DETAILS_RESET,
    FOOD_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_RESET,
    NEW_FOOD_REQUEST,
    NEW_FOOD_SUCCESS,
    NEW_FOOD_FAIL,
    NEW_FOOD_RESET,
    DELETE_FOOD_REQUEST,
    DELETE_FOOD_SUCCESS,
    DELETE_FOOD_FAIL,
    DELETE_FOOD_RESET,
    UPDATE_FOOD_REQUEST,
    UPDATE_FOOD_SUCCESS,
    UPDATE_FOOD_FAIL,
    UPDATE_FOOD_RESET,
    ALL_REVIEW_REQUEST,
    ALL_REVIEW_SUCCESS,
    ALL_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    DELETE_REVIEW_RESET,
  } from "../constants/foodConstants";
  
  export const foodsReducer = (state = { foods: [] }, action) => {
    switch (action.type) {
      case ALL_FOOD_REQUEST:
      case ADMIN_FOOD_REQUEST: {
        return {
          ...state,
          loading: true,
          foods: [],
        };
      }
  
      case ADMIN_FOOD_SUCCESS:
        return {
          loading: false,
          foods: action.payload,
        };
  
      case ALL_FOOD_SUCCESS: {
        return {
          loading: false,
          foods: action.payload.foods,
         // foodsCount: action.payload.foodsCount,
         // resultPerPage: action.payload.resultPerPage,
          //filteredFoodCount: action.payload.filteredFoodCount,
        };
      }
      case ALL_FOOD_FAIL:
      case ADMIN_FOOD_FAIL: {
        return {
          loading: false,
          error: action.payload,
        };
      }
      // Clear error
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  // food details :
  export const foodDetailsReducer = (state = { food: {} }, action) => {
    switch (action.type) {
      case FOOD_DETAILS_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case FOOD_DETAILS_SUCCESS:
        return {
          loading: false,
          food: action.payload, // food details from backend
          success: true,
        };
      case FOOD_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case FOOD_DETAILS_RESET:
        return {
          success: false,
          ...state,
        };
  
      // error msg clear
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  
  // new Review Reducer
  export const newReviewReducer = (state = {}, action) => {
    switch (action.type) {
      case NEW_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_REVIEW_SUCCESS:
        return {
          loading: false,
          success: action.payload,
        };
  
      case NEW_REVIEW_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case NEW_REVIEW_RESET:
        return {
          ...state,
          success: false,
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
  
  // create a food reducer
  
  export const newFoodReducer = (state = { newFoodData: [] }, action) => {
    switch (action.type) {
      case NEW_FOOD_REQUEST: {
        return { loading: true };
      }
  
      case NEW_FOOD_SUCCESS:
        return {
          ...state,
          loading: false,
          success: action.payload.success,
          newFoodData: action.payload.data,
        };
  
      case NEW_FOOD_FAIL: {
        console.log(action.type);
        return {
          loading: false,
          error: action.payload,
        };
      }
      case NEW_FOOD_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS: {
        return {
          ...state,
          error: null,
        };
      }
  
      default:
        return state;
    }
  };
  
  // delete and Update reducer :
  
  export function deleteUpdateFoodReducer(state = { food: {} }, action) {
    switch (action.type) {
      case DELETE_FOOD_REQUEST:
      case UPDATE_FOOD_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case UPDATE_FOOD_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_FOOD_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
      case DELETE_FOOD_FAIL:
      case UPDATE_FOOD_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case UPDATE_FOOD_RESET:
        return {
          ...state,
          isUpdated: false,
        };
  
      case DELETE_FOOD_RESET:
        return {
          ...state,
          isDeleted: false,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  }
  
  // get all review Reducer =>
  
  export const getALLReviewReducer = (state = { reviews: [] }, action) => {
    switch (action.type) {
      case ALL_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ALL_REVIEW_SUCCESS:
        return {
          ...state,
          loading: false,
          reviews: action.payload,
        };
      case ALL_REVIEW_FAIL:
        return {
          ...state,
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
  
  // delete review reducer  =>
  
  export const deleteReviewReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_REVIEW_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case DELETE_REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_REVIEW_RESET:
        return {
          ...state,
          isDeleted: false,
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
  