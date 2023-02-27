function cartReducer(cart, action) {
  const { type, id } = action;

  //cart is of shape { key: value } where productId is the key
  //and the value is the quantity of that product in the cart
  switch (type) {
    case 'add': {
      if (id in cart) {
        return { ...cart, [id]: cart[id] + 1 };
      }

      return { ...cart, [id]: 1 };
    }

    case 'remove': {
      if (cart[id] > 1) {
        return { ...cart, [id]: cart[id] - 1 };
      }

      const next = { ...cart };
      delete next[id];
      return next;
    }

    case 'delete': {
      const next = { ...cart };
      delete next[id];
      return next;
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default cartReducer;
