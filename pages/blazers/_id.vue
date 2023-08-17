<template lang="pug">
.product-page 
    .product-header 
        .breadcrumbs 
            nuxt-link(to="/blazers") Пиджаки
            .scope -
            .scope {{ getItem.acf.item_name }}
        ProductInner(:product="getItem") 
</template>
        
<script>
    export default {
        data() {
        return {
            id: this.$route.params.id,
            }
        },
        computed: {
            getItem() {
            return this.$store.state.blazers.filter(item => item.id === +this.$route.params.id)[0]
            },
        }
    }
</script>
        
<styles lang="scss">


</styles>