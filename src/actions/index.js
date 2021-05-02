import * as c from './../actions/ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { name, brand, price, alcoholContent, pintsRemaining, id } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    pintsRemaining: pintsRemaining,
    id: id
  }
}

export const selectKeg = (id, kegList) => ({
  type: c.SELECT_KEG,
  kegList: kegList,
  id: id
});

export const deselectKeg = () => ({
  type: c.DESELECT_KEG
});

export const removePint = (id) => ({
  type: c.REMOVE_PINT,
  id: id
});