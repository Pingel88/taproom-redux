import rootReducer from '../../reducers/index';

describe ('rootReducer', () => {

  test('Should return a default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainKegList: {},
      formVisibleOnPage: false
    });
  });
});