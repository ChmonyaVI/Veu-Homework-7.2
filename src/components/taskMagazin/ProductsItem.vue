<template>
    <div class="cart__container">
        <div class="cart__title">{{ product.title }}</div>
        <div class="cart__price-block">
            <div class="cart__price">{{ priceProduct }}</div>
            <div class="cart__currency">{{ product.currency }}</div>
            <button @click="addProductInCart(product)" class="cart__button">Add</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'ProductsItem',
    props: {
        product: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        priceProduct() {
            return this.product.price
        },
    },
    methods: {
        ...mapActions(['addCart']),

        addProductInCart(product) {
            return this.addCart(product)
        },
    },
}
</script>

<style lang="scss" scoped>
.cart__container {
    transition: background-color 0.3s ease 0s;
    display: flex;
    align-items: center;
    padding: 5px;
    &:hover {
        transition: background-color 0.3s ease 0s;
        background-color: rgb(180, 180, 180);
    }
}
.cart__title {
    flex-basis: 100%;
}
.cart__price-block {
    align-items: center;
    display: flex;
    gap: 20px;
    flex-basis: 20%;
}
.cart__price {
    display: flex;
    flex-basis: 10%;
}
.cart__currency {
    flex-basis: 5%;
}
.cart__button {
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 8px;
    padding-right: 8px;
    border: 1px solid black;
    border-radius: 10%;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    &:hover {
        color: white;
        border: 1px solid rgb(25, 209, 25);
        transition: all 0.3s ease 0s;
        background-color: rgb(25, 209, 25);
    }
}
</style>
