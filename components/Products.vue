<template lang="pug">
.products
    .products-wrapper
       ProductCard(v-for="(product, key) in products" :key="product.id" :product="product" :category="category")
</template>

<script>
export default {
    name: 'ProductsWrapper',
    props: {
        products: Array,
        category: String
    },
    data() {
      return {
        isHovered: false
      };
    },
    computed: {
      currentImage() {
        return this.isHovered ? this.product.acf.image_2 : this.product.acf.image_1;
      }
    },
}
</script>

<styles lang="scss" scoped>
.products{
display: flex;
    .products-wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
        @media(min-width: 992px){
        grid-template-columns: 1fr 1fr 1fr 1fr
        }
    }
}

</styles>