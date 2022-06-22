// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API } from '../actions';

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
      // ...state,
      // currencies: Object.keys(action.currencies).filter((key) => key !== 'USDT'),
      // loading: false,
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};
export default walletReducer;
