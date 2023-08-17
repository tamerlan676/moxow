<template lang="pug">
div
    Categories
    .products
        Products(:products="products" category="blazers")
  
</template>

<script>  
  export default {
    data() {
      return {
        isHovered: false
      };
    },
    async fetch ({ store }) {
        await store.dispatch('getBlazers')
    },
    computed: {
      products() {
          return this.$store.state.blazers
      }
    },
  }
  </script>

<styles lang="scss">

</styles>