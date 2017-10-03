export default (state = {}, action = {}) => {
  const { type, payload } = action;
  switch (type) {
  case 'CATEGORY_CREATE':
    return {
      ...state,
      [payload.id]: [],
    };
  case 'CATEGORY_REMOVE':
    var nextState = {...state};
    delete nextState[payload.id];
    return nextState;
  case 'EXPENSE_CREATE':
    var { categoryID } = payload;
    var categoryExpense = state[categoryID];
    return {
      ...state,
      [categoryID]: [
        ...categoryExpense,
        payload,
      ],
    };
  default:
    return state;
  }
};
