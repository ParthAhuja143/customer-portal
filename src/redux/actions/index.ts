
  import { Dispatch } from "redux";
  import axios from "axios";
import { ActionType } from "../../constants/actionTypes";
  
  export const fetchCustomers = () => async (dispatch: Dispatch) => {
    dispatch({ type: ActionType.FETCH_CUSTOMERS_REQUEST });
    try {
      const customers = Array.from({ length: 1000 }, (_, index) => ({
        id: `customer-${index + 1}`,
        name: `Customer ${index + 1}`,
        title: `Customer ${index + 1}`,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
      }));
      dispatch({ type: ActionType.FETCH_CUSTOMERS_SUCCESS, payload: customers });
    } catch (error) {
      dispatch({ type: ActionType.FETCH_CUSTOMERS_FAILURE, payload: (error as any).message });
    }
  };
  
  export const fetchPhotos = () => async (dispatch: Dispatch) => {
    dispatch({ type: ActionType.FETCH_PHOTOS_REQUEST });
    try {
        const response = await axios.get(
            `https://api.unsplash.com/photos/random?client_id=ULLx4g3dkGyP0RZEBhawlLkYsGQVojzv-dTH3UN6VFs&count=9`
          );
          dispatch({ type: ActionType.FETCH_PHOTOS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ActionType.FETCH_PHOTOS_FAILURE, payload: (error as any).message });
    }
  };

  export const changeCustomer = (id: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ActionType.CHANGE_CUSTOMER, payload: id });
  }
  