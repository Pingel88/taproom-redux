export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, remainingPints, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          remainingPints: remainingPints,
          id: id
        }
      });
    default:
      return state;
  }
}