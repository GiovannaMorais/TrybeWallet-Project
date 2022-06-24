import { REQUEST_API,
  REQUEST_API_SUCCESS,
  EXPENSES_OBJ_GLOBAL,
  REMOVE_EXPENSE, SAVE_EXPENSE_EDIT, EDIT_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  totalValue: 0,
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
  case EXPENSES_OBJ_GLOBAL:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter(
        (item) => item.id !== +action.payload,
      )],
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editor: false,
      expenses: [...action.payload],
    };
  case SAVE_EXPENSE_EDIT:
    return {
      ...state,
      editor: action.editor,
      idToEdit: action.id,
    };
  default:
    return state;
  }
};
export default walletReducer;
