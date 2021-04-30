import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, pintsRemaining, id } = action;
  switch(action.type) {
    case c.SELECT_KEG:
      const selectedKeg = state[id];
      return selectedKeg;

    default:
      return state;
  }
}