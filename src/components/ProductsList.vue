<template>
    <ul>
        <li v-for="product in getProductsUndone" :key="product.productId">
            {{ product.productName }}
            <button @click="productDoneChange(product.productId)">Вычеркнуть</button>
        </li>
        <li class="products-done" v-for="product in getProductsDone" :key="product.productId">
            {{ product.productName }}
            <button @click="productDoneChange(product.productId)">Вернуть</button>
        </li>
    </ul>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations([
            'productDoneChange'
        ])
    },
    computed: {
        ...mapGetters([
            'getProductsUndone',
            'getProductsDone'
        ])
    },
}
</script>