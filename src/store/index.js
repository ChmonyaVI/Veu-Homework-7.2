import { createStore } from 'vuex'
import { products } from '../constans/productsForMagazion.js'
import { getTotalPrice } from '../constans/totalPrice.js'

export default createStore({
    state: {
        productsData: [], // куда пушить товары
        cart: [],
        totalPrice: 0,
        selectedCurrency: 'UAH', //тут селект по дефолку на гривне
    },
    getters: {
        getProductsData: (state) => {
            if (!state.selectedCurrency) state.productsData = products
            if (state.selectedCurrency === 'UAH') {
                state.productsData = []
                products.map((product) => state.productsData.push({ ...product, currency: state.selectedCurrency }))
            }
            if (state.selectedCurrency === 'USD') {
                state.productsData = []
                products.map((product) =>
                    state.productsData.push({
                        ...product,
                        price: (product.price / 36).toFixed(2),
                        currency: 'USD',
                    })
                )
            }
            return state.productsData
        },
        getCart: ({ cart }) => cart,
        getTotalCartPriceProduct: ({ totalPrice }) => totalPrice,
        getSelectedCurrency: ({ selectedCurrency }) => selectedCurrency,
    },
    mutations: {
        addCart(state, product) {
            const findProduct = state.cart.find((obj) => obj.id === product.id)
            if (findProduct) findProduct.count++
            else state.cart.push({ ...product, count: 1 })
            state.totalPrice = getTotalPrice(state.cart)
        },
        removeProductCart(state, id) {
            state.cart = state.cart.filter((item) => item.id !== id)
            state.totalPrice = getTotalPrice(state.cart)
        },
        setSelectedCurrency(state, currency) {
            state.selectedCurrency = currency
        },
    },
    actions: {
        addCart({ commit }, product) {
            commit('addCart', product)
        },
        removeProductCart({ commit }, id) {
            commit('removeProductCart', id)
        },
        setSelectedCurrency({ commit }, currency) {
            commit('setSelectedCurrency', currency)
        },
    },
})
