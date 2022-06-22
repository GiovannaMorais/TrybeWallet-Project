import { REQUEST_API, REQUEST_API_SUCCESS } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,

};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
    };
  case REQUEST_API_SUCCESS:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((key) => key !== 'USDT'),
    };
  default:
    return state;
  }
};
export default walletReducer;
