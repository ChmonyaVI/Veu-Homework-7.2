<template>
    <div class="container__all-blocks">
        <option-filter />
        <product-list />
        <products-cart />
    </div>
</template>

<script>
import OptionFilter from './OptionFilter.vue'
import ProductList from './ProductList.vue'
import ProductsCart from './ProductsCart.vue'

export default {
    name: 'ProductPanel',
    components: { OptionFilter, ProductList, ProductsCart },
}
</script>

<style lang="scss" scoped>
.container {
    // .container__all-blocks

    &__all-blocks {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>
