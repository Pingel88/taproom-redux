import selectedKegReducer from './../../reducers/selected-keg-reducer';
import * as c from './../../actions/ActionTypes';

describe('selectedKegReducer', () => {

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

  let action;

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectedKegReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully select a keg', () => {
    action = {
      type: c.SELECT_KEG,
      id: 'xyz-890'
    };
    expect(selectedKegReducer(currentState, action)).toEqual({
      name: 'SelectBeer',
      brand: 'Selectweiser',
      price: 4.99,
      alcoholContent: 99,
      pintsRemaining: 124,
      id: 'xyz-890'
    });
  });
});