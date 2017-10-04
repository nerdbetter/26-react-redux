const initialState = [];

export default (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
  case 'CATEGORY_CREATE':
    return {
      ...state,
      [payload.id]: [],
    };
  case 'CATEGORY_REMOVE':{
    let nextState = {...state};
    delete nextState[payload.id];
    return nextState;
  }
  case 'CARD_CREATE':{
    let { categoryID } = payload;
    let categoryCard = state[categoryID];
    return {
      ...state,
      [categoryID]: [
        ...categoryCard,
        payload,
      ],
    };
  }
  case 'CARD_UPDATE':{
    return state.map(card =>
      card.id === payload.id ? payload : card);
  }
  case 'CARD_REMOVE':{
    return state.map(card =>
      card.id !== payload.id);
  }
  default:
    return state;
  }
};
