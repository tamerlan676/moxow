<template lang="pug">
div
    Categories
    .products
        Products(:products="products" category="suits")
  
</template>

<script>  
  export default {
    data() {
      return {
        isHovered: false
      };
    },
    async fetch ({ store }) {
        await store.dispatch('getSuits')
    },
    computed: {
        products() {
          return this.$store.state.suits
      }
    },
  }
  </script>

<styles lang="scss">

</styles>