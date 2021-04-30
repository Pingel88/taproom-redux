import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('kegListReducer', () => {

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
      name: 'DeleteBeer',
      brand: 'Deleteweiser',
      price: 4.99,
      alcoholContent: 99,
      pintsRemaining: 124,
      id: 'xyz-890'
    }
  }
  
  let action;

  const kegData = {
    name: 'TestBeer',
    brand: 'Testweiser',
    price: 6.99,
    alcoholContent: 7,
    pintsRemaining: 124,
    id: 'abc-123'
  };
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to mainKegList', () => {
    const { name, brand, price, alcoholContent, pintsRemaining, id } = kegData;
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsRemaining: pintsRemaining,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id]: {
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsRemaining: pintsRemaining,
      id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id: 'xyz-890'
    };
    expect(kegListReducer(currentState, action)).toEqual({
      'abc-123': {
        name: 'TestBeer',
        brand: 'Testweiser',
        price: 6.99,
        alcoholContent: 7,
        pintsRemaining: 124,
        id: 'abc-123'
      }
    });
  });
});