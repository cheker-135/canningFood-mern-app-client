import axios from "axios";
import axiosInstance from '../axiosConfig';
import {
  ALL_FOOD_REQUEST,
  ALL_FOOD_SUCCESS,
  ALL_FOOD_FAIL,
  FOOD_DETAILS_REQUEST,
  FOOD_DETAILS_FAIL,
  FOOD_DETAILS_SUCCESS,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_FAIL,
  ADMIN_FOOD_FAIL,
  ADMIN_FOOD_REQUEST,
  ADMIN_FOOD_SUCCESS,
  NEW_FOOD_REQUEST,
  NEW_FOOD_SUCCESS,
  NEW_FOOD_FAIL,
  DELETE_FOOD_REQUEST,
  DELETE_FOOD_SUCCESS,
  DELETE_FOOD_FAIL,
  UPDATE_FOOD_REQUEST,
  UPDATE_FOOD_SUCCESS,
  UPDATE_FOOD_FAIL,
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
  CLEAR_ERRORS,
  ALL_REVIEW_FAIL,
} from "../constants/foodConstants";

// get ALL Foods
export const getFood = (
  keyword = "",
  currentPage = 1,
  price = [0, 100000],
  category,
  ratings = 0
) => {
  return async (dispatch) => {
    try {
      // initial state :
      dispatch({
        type: ALL_FOOD_REQUEST,
      });

      let link = `/api/v1/food?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      // when category selected by user then using another link
      if (category) {
        link = `/api/v1/food?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&category=${category}`;
      }
      const { data } = await axiosInstance.get(link);

      dispatch({
        type: ALL_FOOD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_FOOD_FAIL,
        payload: error.message,
      });
    }
  };
};

// Get Food Details
export const getFoodDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FOOD_DETAILS_REQUEST,
      });

      const { data } = await axiosInstance.get(`/api/v1/food/${id}`);
      console.log("data from redux" ,data)

      dispatch({
        type: FOOD_DETAILS_SUCCESS,
        payload: data.food,
      });
    } catch (error) {
      dispatch({
        type: FOOD_DETAILS_FAIL,
        payload: error.message,
      });
    }
  };
};

//Add new Review
export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axiosInstance.put(`/api/v1/review/new`, reviewData, config);

    dispatch({ type: NEW_REVIEW_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({ type: NEW_REVIEW_FAIL, payload: error.message });
  }
};

// admin food request :
export const getAdminFoods = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_FOOD_REQUEST });

    const { data } = await axiosInstance.get("/api/v1/admin/foods");

    dispatch({ type: ADMIN_FOOD_SUCCESS, payload: data.foods });
  } catch (error) {
    dispatch({ type: ADMIN_FOOD_FAIL, payload: error.message });
  }
};

// Create Food
export function createFood(foodData) {
  return async function(dispatch) {
    try {
      dispatch({
        type: NEW_FOOD_REQUEST,
      });
         
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      const { data } = await axiosInstance.post(
        `/api/v1/admin/food/new`,
        foodData,
        config
      );

      dispatch({
        type: NEW_FOOD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_FOOD_FAIL,
        payload: error.message,
      });
    }
  };
}

// Delete Food request

export function deleteFood(id) {
  return async function(dispatch) {
    try {
      dispatch({ type: DELETE_FOOD_REQUEST });

      const { data } = await axiosInstance.delete(`/api/v1/admin/food/${id}`);
    
      dispatch({ type: DELETE_FOOD_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({ type: DELETE_FOOD_FAIL, payload: error.message });
    }
  };
}

// updateFood;
export const updateFood = (id, foodData) => async (dispatch) => {
         try {
           dispatch({ type: UPDATE_FOOD_REQUEST });

           const config = {
              headers: { "Content-Type": "multipart/form-data" },
           };

           const { data } = await axiosInstance.put(
             `/api/v1/admin/food/${id}`,
             foodData,
             config
           );

           dispatch({
             type: UPDATE_FOOD_SUCCESS,
             payload: data.success,
           });
         } catch (error) {
           dispatch({
             type: UPDATE_FOOD_FAIL,
             payload: error.message,
           });
         }
       };

 // get all review of food admin ==>
 export const getAllreviews  = (foodId) => async (dispatch) =>{

     try {
        dispatch({type : ALL_REVIEW_REQUEST})

        const { data } = await axiosInstance.get(`/api/v1/reviews?id=${foodId}`);
        dispatch({type : ALL_REVIEW_SUCCESS , payload : data.reviews})
     } catch (error) {
        dispatch({type : ALL_REVIEW_FAIL , payload : error.message})
     }
 }


 // delete food review
export const deleteFoodReview = (reviewId , foodId) => async (dispatch) =>{
   try {
  dispatch({type : DELETE_REVIEW_REQUEST})

    const { data } = await axiosInstance.delete(
      `/api/v1/food/reviews/delete?id=${reviewId}&foodId=${foodId}`
    );

     dispatch({ type: DELETE_REVIEW_SUCCESS, payload: data.success });
   } catch (error) {
      dispatch({type : DELETE_REVIEW_FAIL , payload : error.message})
   }

}


// clear error
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
