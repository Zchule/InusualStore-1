export const addCarShop = (payload) => ({
    type: 'ADD_CAR_SHOP',
    payload,
});

export const deletePrenda = (payload) => ({
    type: 'DELETE_PRENDA',
    payload,
});

export const selectedProducts = (payload) => ({
    type: 'SELECTED_PRODUCTS',
    payload,
});

export const selectedProduct = (payload) => ({
    type: 'SELECTED_PRODUCT',
    payload,
});

export const loginRequest = (payload) => ({
    type: 'LOGIN_REQUEST',
    payload,
  });
  
  export const logoutRequest = (payload) => ({
    type: 'LOGOUT_REQUEST',
    payload,
  });
  
  export const registerRequest = (payload) => ({
    type: 'REGISTER_REQUEST',
    payload,
  });