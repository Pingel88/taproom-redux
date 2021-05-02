import * as actions from './../../actions';

describe ('Taproom actions', () => {

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg('abc-123')).toEqual({
      type: 'DELETE_KEG',
      id: 'abc-123'
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({
      name: 'TestBeer',
      brand: 'Testweiser',
      price: 6.99,
      alcoholContent: 7,
      pintsRemaining: 124,
      id: 'abc-123'
    })).toEqual({
      type: 'ADD_KEG',
      name: 'TestBeer',
      brand: 'Testweiser',
      price: 6.99,
      alcoholContent: 7,
      pintsRemaining: 124,
      id: 'abc-123'
    });
  });

  it('selectKeg should create SELECT_KEG action', () => {
    expect(actions.selectKeg('abc-123')).toEqual({
      type: 'SELECT_KEG',
      id: 'abc-123'
    });
  });

  it('deselectKeg should create DESELECT_KEG action', () => {
    expect(actions.deselectKeg()).toEqual({
      type: 'DESELECT_KEG'
    });
  });

  it('removePint should create REMOVE_PINT action', () => {
    expect(actions.removePint()).toEqual({
      type: 'REMOVE_PINT'
    });
  });
});