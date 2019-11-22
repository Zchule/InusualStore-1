const reducer = (state, action)=> {
  switch (action.type) {
    case 'ADD_CAR_SHOP':
      return {
        ...state,
        misPrendas: [...state.misPrendas, action.payload]
      }
    default:
      return state; 
  }
}

export default reducer;