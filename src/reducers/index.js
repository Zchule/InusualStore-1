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
    default:
      return state; 
  }
}

export default reducer;