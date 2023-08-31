<template>
  <div id="app">
    <div class="container">
      <label>Введите новый продукт <input type="text" required="true" v-model="newProduct"></label>
      <button @click.prevent="addNewProduct">Добавить продукт</button>
      <h1>Список продуктов</h1>
      <ProductsList></ProductsList>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ProductsList from './components/ProductsList.vue'

export default {
  name: 'App',
  data() {
    return {
      newProduct: ''
    }
  },
  components: {ProductsList},
  methods: {
    ...mapMutations([
      'addProduct',
      'updateProductsList'
    ]),
    addNewProduct() {
      if (this.newProduct) {
        this.addProduct(this.newProduct)
        this.newProduct = ''
      } else {
        return
      }
    }
  },
  computed: {
    ...mapGetters([
      'getProductsData'
    ])
  },
  mounted() {
    if (localStorage.userProductsList) {
      this.updateProductsList(JSON.parse(localStorage.userProductsList));
    }
  },
  watch: {
    getProductsData: {
      deep: true,
      handler() {
        localStorage.userProductsList = JSON.stringify(this.getProductsData)
      }
    }
  }
}
</script>

<style>

</style>
