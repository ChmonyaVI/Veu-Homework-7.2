<template>
    <h2 class="shop-cart__title">Shop cart:</h2>
    <div v-if="getCart.length" class="cart__list">
        <cart-item v-for="item in getCart" :key="item.id" :item="item" class="cart__list-cart" />
        <div>Total price: {{ totalCartPrice }} {{ getSelectedCurrency }}</div>
    </div>
    <div v-else class="cart__empty-cart">Shop cart is empty!</div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartItem from './CartItem.vue'

export default {
    name: 'ProductItem',
    components: { CartItem },

    computed: {
        ...mapGetters(['getCart', 'getTotalCartPriceProduct', 'getSelectedCurrency']),
        totalCartPrice() {
            return this.getTotalCartPriceProduct.toFixed(2)
        },
    },
}
</script>

<style lang="scss" scoped>
.cart {
    // .cart__list-title

    &__list {
        padding: 20px;
        margin: 20px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 20px;
        width: 500px;
    }

    // .cart__list-cart

    &__list-cart {
        display: flex;
        justify-content: space-between;
        padding: 5px;
        &:hover {
            transition: background-color 0.3s ease 0s;
            background-color: rgb(180, 180, 180);
        }
    }

    // .cart__empty-cart

    &__empty-cart {
    }
}
.shop-cart {
    // .shop-cart__title

    &__title {
        font-size: 28px;
        text-align: center;
        margin-bottom: 20px;
    }
}
</style>
