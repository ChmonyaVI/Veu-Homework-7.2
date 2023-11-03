<template>
    <div class="mb">Product List:</div>
    <div class="cart__container-product-list">
        <products-item v-for="product in getProductsData" :key="product.id" :product="product" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductsItem from './ProductsItem.vue'
mapGetters
export default {
    name: 'ProductList',
    components: { ProductsItem },

    computed: {
        ...mapGetters(['getProductsData']),
    },
}
</script>

<style lang="scss" scoped>
.cart__container-product-list {
    padding: 20px;
    margin: 20px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
    width: 500px;
}
.mb {
    margin-top: 15px;
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
}
</style>
