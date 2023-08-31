import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productsList: [
      {
        productId: 0,
        productName: 'Яблоко',
        productDone: false,
      },
      {
        productId: 1,
        productName: 'Банан',
        productDone: true,
      },
      {
        productId: 2,
        productName: 'Апельсин',
        productDone: false,
      },
      {
        productId: 3,
        productName: 'Груша',
        productDone: true,
      },
      {
        productId: 4,
        productName: 'Персик',
        productDone: false,
      },
    ]
  },
  getters: {
    getProductsUndone: state => {
      return state.productsList.filter(product => product.productDone === false)
    },
    getProductsDone: state => {
      return state.productsList.filter(product => product.productDone === true)
    },
    getProductsData: state => {
      return state.productsList
    }
  },
  mutations: {
    productDoneChange(state, productId) {
      if (state.productsList.find(product => product.productId === productId).productDone) {
        state.productsList.find(product => product.productId === productId).productDone = false
      } else {
        state.productsList.find(product => product.productId === productId).productDone = true
      }
    },
    addProduct(state, productName) {
      state.productsList.push({
        productId: state.productsList.length,
        productName: productName,
        productDone: false,
      })
    },
    updateProductsList(state, productsData) {
      state.productsList = productsData
    }
  },
  actions: {
  },
  modules: {
  }
})
