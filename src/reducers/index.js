const reducer = (state, action ) => {
  switch (action.type) {
    case 'GET_PAYMENTS':
      return {
        ...state,
        user: action.payload
      }
    case 'GET_PAYMENT_DETAIL':

      return {
        ...state,
        // Line to read all ids from URL /payment/:id 
        // details: state.payments_details.find(item => item.id === action.payload) || [] 
        // Line to demo id to validate in list payments_details
        details: state.payments_details.find(item => item.id === "ord_2m9fvZfVz97nQhMmg") || [] 
      }
    default:
      return state;
  }
}

export default reducer;