import axios from "axios";
import {
  PRODUCT_CATEGORY_DETAILS_SUCCESS,
  PRODUCT_CATEGORY_DETAILS_FAILURE,
  PRODUCT_CATEGORY_DETAILS_REQUEST,
  PRODUCT_CATEGORY_LIST_FAILURE,
  PRODUCT_CATEGORY_LIST_REQUEST,
  PRODUCT_CATEGORY_LIST_SUCCESS,
} from "./../constants/productCategoryConstants";

export const fetchProductsCategoryRequest = () => {
  return {
    type: PRODUCT_CATEGORY_LIST_REQUEST,
  };
};

export const fetchProductCategorySuccess = (data) => {
  return { type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data };
};

export const fetchProductCategoryFailure = (error) => {
  return {
    type: PRODUCT_CATEGORY_LIST_FAILURE,
    payload: error,
  };
};

export const listCategoryProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsCategoryRequest);
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        const data = response.data;
        dispatch(fetchProductCategorySuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductCategoryFailure(errorMsg));
      });
  };
};

export const fetchProductsCategoryDetailsRequest = () => {
  return {
    type: PRODUCT_CATEGORY_DETAILS_REQUEST,
  };
};

export const fetchProductCategoryDetailsSuccess = (data) => {
  return {
    type: PRODUCT_CATEGORY_DETAILS_SUCCESS,
    payload: data,
  };
};

export const fetchProductCategoryDetailsFailure = (error) => {
  return {
    type: PRODUCT_CATEGORY_DETAILS_FAILURE,
    payload: error,
  };
};

export const listProductCategoryDetails = (id) => {
  return (dispatch) => {
    dispatch(fetchProductsCategoryDetailsRequest);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        const data = response.data;
        dispatch(fetchProductCategoryDetailsSuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductCategoryDetailsFailure(errorMsg));
      });
  };
};
