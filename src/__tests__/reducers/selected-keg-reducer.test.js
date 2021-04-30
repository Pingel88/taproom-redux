import selectedKegReducer from './../../reducers/selected-keg-reducer';

test('Should return default state if there is no action type passed into the reducer', () => {
  expect(kegListReducer({}, { type: null })).toEqual({});
});