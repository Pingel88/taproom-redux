import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { id, kegList } = action;
  switch(action.type) {
    case c.SELECT_KEG:
      const selectedKeg = kegList[id];
      return selectedKeg;

    case c.DESELECT_KEG:
      return null;

    default:
      return state;
  }
}