<template>
    <select v-model="selectedVal" class="cart__selected-currency">
        <option v-for="opt in optionList" :value="opt" :key="opt" class="cart__selected-optional">{{ opt }}</option>
    </select>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'OptionalFilter',

    data() {
        return {
            optionList: ['UAH', 'USD'],
        }
    },
    computed: {
        ...mapGetters(['getSelectedCurrency', 'getProductsData']),

        selectedVal: {
            get() {
                return this.getSelectedCurrency
            },
            set(val) {
                this.setSelectedCurrency(val)
            },
        },
    },
    methods: {
        ...mapActions(['setSelectedCurrency']),
    },
}
</script>

<style lang="scss" scoped>
.cart__selected-currency {
    transition: all 0.3s ease 0s;
    padding: 10px;
    border: 1px solid #545252;
    border-radius: 10%;

    &:focus {
        transition: all 0.3s ease 0s;
        background-color: #cac9c9;
    }
}
</style>
