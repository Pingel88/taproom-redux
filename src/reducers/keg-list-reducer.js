import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, pintsRemaining, id } = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          pintsRemaining: pintsRemaining,
          id: id
        }
      });

    case c.DELETE_KEG:
      let newState = { ...state };
      delete newState[id];
      return newState;

    case c.REMOVE_PINT:
      const keg = state[id];
      const updatedKeg = Object.assign({}, keg, {
        pintsRemaining: keg.pintsRemaining - 1
      });
      const updatedState = Object.assign({}, state, {
        [id]: updatedKeg
      });
      return updatedState;

    default:
      return state;
  }
}