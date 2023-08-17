<template lang="pug">
.product-page 
    .product-header 
        .breadcrumbs 
            nuxt-link(to="/cloaks") Плащи
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
    async fetch ({ store }) {
            await store.dispatch('getCloaks')
        },
    computed: {
        getItem() {
            return this.$store.state.cloaks.filter(item => item.id === +this.$route.params.id)[0]
        },
    }
}
</script>
        
<styles lang="scss">
    .product-page{
        .product-header{
            padding:  24px 32px;
            .breadcrumbs{
                display: flex;
                margin-bottom: 24px;
                a{
                    color: #000;
                    text-decoration: none;
                }
                .scope{
                    margin-left: 10px;
                }
        }
        }
    }
    
    
    </styles>