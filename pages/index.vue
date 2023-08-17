<template lang="pug">
.main   
  .banner 
    h3 MOXOW - Женская одежда из в России
    nuxt-link(to="/dresses") Смотреть каталог
  AboutBrand
  Squares
</template>

<script>  
  export default {
    name: 'MainPage',
    data () {
      return {
        query: '',
        suggestions: null
      }
    },
    async fetch ({ store }) {
        await store.dispatch('getDresses')
    },
    computed: {
      dresses() {
          return this.$store.state.dresses
      }
    },
  }
  </script>

  <styles lang="scss" scoped>
  .banner{
    width: 100%;
    height: 700px;
    background-size: cover;
    background-image: url(../assets/images/bg.jpg);
    background-position: center;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    &:before{
      width: 100%;
      height: 100%;
      position: absolute;
      content: '';
      background: #000;
      opacity: 0.5;
      z-index: 2;
    }
    h3{
      color: #fff;
      font-family: 'Semi-Bold';
      position: relative;
      z-index: 3;
      margin-bottom: 24px;
      text-align: center;
      @media(min-width: 992px){
        font-size: 32px;
      }
    }
    a{
      position: relative;
      z-index: 3;
      text-decoration: none;
      border: 2px solid #fff;
      padding: 12px 25px;
      color: #fff
    }
  }

  </styles>
