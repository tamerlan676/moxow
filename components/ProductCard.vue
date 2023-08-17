<template lang="pug">
.product-card(@mouseover="isHovered = true" @mouseleave="isHovered = false")
    nuxt-link(:to="`/${category}/${product.id}`")
      img(:src="currentImage" :alt="product.name")
      .product-info
        h3 {{ product.title.rendered }}
</template>
  
  <script>
  export default {
    name: 'ProductComp',
    props: {
      product: Object,
      category: String
    },
    data() {
      return {
        isHovered: false
      };
    },
    computed: {
      currentImage() {
        return this.isHovered ? this.product.acf.image_1 : this.product.acf.image_2;
      }
    }
  };
  </script>
  
  <styles scoped lang="scss">
  .product-card{
    width: 100%;
    border: 1px solid #DEDEDE;
    background: #f2f5fa;
    position: relative;
    .product-info h3{
      color: #000;
    }
  img{
      max-width: 100%;
  }
  h3{
      text-align: center;
      font-size: 17px;
      padding: 16px;
  }
}
</styles>