import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  switch(action.type) {
    case c.SELECT_KEG:
      return 'potato'
    default:
      return state;
  }
}