const reducer = (state, action)=> {
  switch (action.type) {
    case 'ADD_CAR_SHOP':
      return {
        ...state,
        misPrendas: [...state.misPrendas, action.payload]
      }
    case 'DELETE_PRENDA':
      return {
        ...state,
        misPrendas: state.misPrendas.filter((item) => item.id !== action.payload),
      }
    case 'SELECTED_PRODUCT':
      return {
        ...state,
        selectedProduct: state.prendas.find((item) => item.id === Number(action.payload)),
      }
    case 'SELECTED_PRODUCTS':
      return {
        ...state,
        selectedProducts: state.prendas.filter(item => item.categories.includes(action.payload)),
      }
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state; 
  }
}

export default reducer;