<template lang="pug">
div
    Categories
    .products
        Products(:products="products" category="dresses")
  
</template>

<script>  
  export default {
    data() {
      return {
        isHovered: false
      };
    },
    async fetch ({ store }) {
        await store.dispatch('getDresses')
    },
    computed: {
        products() {
          return this.$store.state.dresses
      }
    },
  }
  </script>

<styles lang="scss">

</styles>