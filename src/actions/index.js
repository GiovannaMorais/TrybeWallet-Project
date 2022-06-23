// Coloque aqui suas actions
export const CHECK_EMAIL = 'CHECK_EMAIL';
// export const CHECK_WALLET = 'CHECK_WALLET';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const EXPENSES_OBJ_GLOBAL = 'EXPENSES_OBJ_GLOBAL';

export const CheckEmail = (payload) => ({
  type: CHECK_EMAIL,
  payload,
});

// export const CheckWallet = (payload) => ({
//   type: CHECK_WALLET,
//   payload,
// });

export const requestApi = () => ({
  type: REQUEST_API,
});

export const requestApiSuccess = (payload) => ({
  type: REQUEST_API_SUCCESS,
  payload,
});

export function fetchAPI() {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    return dispatch(requestApiSuccess(data));
  };
}

export const expenseAction = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const saveExpensesInState = (payload) => ({
  type: EXPENSES_OBJ_GLOBAL,
  payload,
});
