export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = action.payload
      const product = state.findIndex((product) => product.id === newProduct.id)

      if (product === -1) {
        newProduct.quantity = 1
        return [...state, newProduct]
      } else {
        return state.map((productItem, index) => {
          if (index === product ) {
            return {...productItem, quantity: productItem.quantity + 1}
          } else {
            return productItem
          }
        })
      }
    
    case REMOVE_PRODUCT:
      
      const productId = action.payload
      return state.filter((cartItem) => cartItem.id !== productId)

    case UPDATE_QUANTITY:

      const { productId: id, quantity } = action.payload
      return state.map((cartItem) => {
        if (cartItem.id === id) {
          return {...cartItem, quantity}
        } else {
          return cartItem
        }
      })
    
    default:
      return state
  }
}