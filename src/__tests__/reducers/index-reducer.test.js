import rootReducer from './../../reducers/index';
import { createStore } from 'redux';
import kegListReducer from './../../reducers/keg-list-reducer';
import formVisibleReducer from './../../reducers/form-visible-reducer';
import selectedKegReducer from './../../reducers/selected-keg-reducer';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe ('rootReducer', () => {

  test('Should return a default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainKegList: {},
      formVisibleOnPage: false,
      selectedKeg: null
    });
  });

  test('Check that the initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().mainKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_KEG action works for kegListReducer and root reducer', () => {
    const action = {
      type: c.ADD_KEG,
      name: 'TestBeer',
      brand: 'Testweiser',
      price: 6.99,
      alcoholContent: 7,
      pintsRemaining: 124,
      id: 'abc-123'
    }
    store.dispatch(action);
    expect(store.getState().mainKegList).toEqual(kegListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that the initial state of selectedKegReducer matches root reducer', () => {
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, { type: null }));
  });

  test('Check that SELECT_KEG action works for selectedKegReducer and root reducer', () => {
    const currentState = {
      'abc-123': {
        name: 'TestBeer',
        brand: 'Testweiser',
        price: 6.99,
        alcoholContent: 7,
        pintsRemaining: 124,
        id: 'abc-123'
      },
      'xyz-890': {
        name: 'SelectBeer',
        brand: 'Selectweiser',
        price: 4.99,
        alcoholContent: 99,
        pintsRemaining: 124,
        id: 'xyz-890'
      }
    }
    const action3 = {
      type: c.ADD_KEG,
      name: 'TestBeer',
      brand: 'Testweiser',
      price: 6.99,
      alcoholContent: 7,
      pintsRemaining: 124,
      id: 'abc-123'
    }
    const action4 = {
      type: c.ADD_KEG,
      name: 'SelectBeer',
      brand: 'Selectweiser',
      price: 4.99,
      alcoholContent: 99,
      pintsRemaining: 124,
      id: 'xyz-890'
    }

    store.dispatch(action3);
    store.dispatch(action4);

    const action = {
      type: c.SELECT_KEG,
      kegList: currentState,
      id: 'xyz-890'
    }

    const action2 = {
      type: c.SELECT_KEG,
      kegList: store.getState().mainKegList,
      id: 'xyz-890'
    }


    store.dispatch(action2);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, action));
  });
});