import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { id, kegList } = action;
  switch(action.type) {
    case c.SELECT_KEG:
      const selectedKeg = kegList[id];
      return selectedKeg;

    default:
      return state;
  }
}