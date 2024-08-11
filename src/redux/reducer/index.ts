import { ActionType } from "../../constants/actionTypes";

interface Customer {
  id: string;
  description: string;
  title: string;
}

interface CustomersState {
  customers: Customer[];
  loading: boolean;
  error: string | null;
  selectedCustomerId: null | string;
  selectedCustomer: Customer | null;
}

const initialCustomersState: CustomersState = {
  customers: [],
  loading: false,
  error: null,
  selectedCustomerId: null,
  selectedCustomer: null,
};

export const customersReducer = (
  state = initialCustomersState,
  action: any
): CustomersState => {
  switch (action.type) {
    case ActionType.FETCH_CUSTOMERS_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.FETCH_CUSTOMERS_SUCCESS:
      return { ...state, loading: false, customers: action.payload };
    case ActionType.FETCH_CUSTOMERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ActionType.CHANGE_CUSTOMER:
        return { ...state, selectedCustomerId: action.payload, selectedCustomer: state.customers.find(customer => customer.id === action.payload) ?? null };
    default:
      return state;
  }
};

// photosReducer.ts
interface Photo {
  id: string;
  urls: {
    thumb: string;
  };
  alt_description: string;
}

interface PhotosState {
  photos: Photo[];
  loading: boolean;
  error: string | null;
}

const initialPhotosState: PhotosState = {
  photos: [],
  loading: false,
  error: null,
};

export const photosReducer = (
  state = initialPhotosState,
  action: any
): PhotosState => {
  switch (action.type) {
    case ActionType.FETCH_PHOTOS_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.FETCH_PHOTOS_SUCCESS:
      return { ...state, loading: false, photos: action.payload };
    case ActionType.FETCH_PHOTOS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
