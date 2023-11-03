<template>
    <div class="wrapper">
        <product-panel />
    </div>
</template>

<script>
import ProductPanel from './components/taskMagazin/ProductPanel.vue'
export default {
    components: { ProductPanel },
    name: 'App',
}
</script>

<style lang="scss">
@import './assets/style/index.scss';
.wrapper {
}
</style>
