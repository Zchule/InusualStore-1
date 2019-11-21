const reducer = (state, action)=> {
  switch (action.type) {
    case 'ADD_CAR_SHOP':
      return {
        ...state,
        mylist: [...state.mylist, action.payload]
      }
    default:
      return state; 
  }
}

export default reducer;