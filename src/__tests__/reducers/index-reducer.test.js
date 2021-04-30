import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import kegListReducer from '../../reducers/keg-list-reducer';

let store = createStore(rootReducer);

describe ('rootReducer', () => {

  test('Should return a default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainKegList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that the initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().mainKegList).toEqual(kegListReducer(undefined, { type: null }));
  });
});