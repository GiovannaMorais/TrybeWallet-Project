// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
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
      loading: true,
    };
  case REQUEST_API_SUCCESS:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((key) => key !== 'USDT'),
      loading: false,
    };
  default:
    return state;
  }
};
export default walletReducer;
