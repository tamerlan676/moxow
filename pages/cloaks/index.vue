<template lang="pug">
div
    Categories
    .products
        Products(:products="products" category="cloaks")
  
</template>

<script>  
  export default {
    data() {
      return {
        isHovered: false
      };
    },
    async fetch ({ store }) {
        await store.dispatch('getCloaks')
    },
    computed: {
      products() {
          return this.$store.state.cloaks
      }
    },
  }
  </script>

<styles lang="scss">

</styles>