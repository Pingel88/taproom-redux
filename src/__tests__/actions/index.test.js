import * as actions from './../../actions';

describe ('Taproom actions', () => {

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg('abc-123')).toEqual({
      type: 'DELETE_KEG',
      id: 'abc-123'
    })
  })
})