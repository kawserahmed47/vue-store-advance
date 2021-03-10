export const storage = {
  state: {
    inventory: [],
    cart: []
  },
  getters: {
    getInventory (state) {
      return state.inventory
    },
    getCart (state) {
      return state.cart
    }
  },
  mutations: {
    addCart (state, payload) {
      state.cart.push(payload)
    },
    removeCartItem (state, payload) {
      state.cart.splice(payload, 1)
    },
    clearCart (state) {
      state.cart = []
    },
    setInventory (state, payload) {
      state.inventory = payload
    }
  }
}
