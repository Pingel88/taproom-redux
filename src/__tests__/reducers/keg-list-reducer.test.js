import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  
  let action;
  const kegData = {
    name: 'TestBeer',
    brand: 'Testweiser',
    price: 6.99,
    alcoholContent: 7,
    remainingPints: 124,
    id: 'abc-123'
  };
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add ney keg data to mainKegList', () => {
    const { name, brand, price, alcoholContent, remainingPints, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      remainingPints: remainingPints,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      remainingPints: remainingPints,
      id: id
      }
    });
  });
});