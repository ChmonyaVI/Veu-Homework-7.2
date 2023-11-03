<template>
    <div class="cart__item-cart cart-item">
        <div class="cart-item__title">{{ item.title }}</div>
        <div class="cart-item__count">{{ item.count }}</div>

        <div class="cart-item__price">
            <div>{{ item.price * item.count }}</div>
            <div>{{ item.currency }}</div>
            <div>{{ item.current }}</div>
            <button @click="removeItemInCart(item.id)" class="cart-item__button">Remove</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'CartItem',
    props: {
        item: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        itemPrice() {
            return this.item.price.toFixed(2)
        },
    },
    methods: {
        ...mapActions(['removeProductCart']),
        removeItemInCart(id) {
            this.removeProductCart(id)
        },
    },
}
</script>

<style lang="scss" scoped>
.cart {
    // .cart__item-cart

    &__item-cart {
    }
}
.cart-item {
    align-items: center;
    display: flex;
    // .cart-item__title

    &__title {
    }

    // .cart-item__count

    &__count {
    }

    // .cart-item__price

    &__price {
        align-items: center;
        display: flex;
        gap: 20px;
    }

    // .cart-item__button

    &__button {
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
            border: 1px solid rgb(209, 25, 25);
            transition: all 0.3s ease 0s;
            background-color: rgb(209, 25, 25);
        }
    }
}
</style>
