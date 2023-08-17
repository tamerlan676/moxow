<template lang="pug">
.wrapper 
    .photos
        img(:src="product.acf.image_1")
        img(:src="product.acf.image_2")
        img(:src="product.acf.image_3")
        img(:src="product.acf.image_4")
        img(:src="product.acf.image_5")
        img(:src="product.acf.image_6")
        img(:src="product.acf.image_7")
        img(:src="product.acf.image_8")
    .info
        h2 Информация
        .info-block 
            h3 Модель
            .text(v-html="model")
        .info-block 
            h3 Состав
            .text {{ product.acf.item_name }}
        .info-block 
            h3 Размеры
            .text {{ product.acf.sizes }}
        .info-block 
            h3 Где купить
            .logos 
                nuxt-link(to="#")
                    img(src="~/assets/images/ozon.svg")
                nuxt-link(to="/")
                    img(src="~/assets/images/lamoda.svg")
</template>

<script>
export default {
    name: 'ProductInner',
    props: {
        product: Object
    },
    data() {
        return {
            model: `Рост 170 см <br>
                 Объём груди 85 <br>
                Объём талии 60 <br>
                Объём бедер 92 <br>
                На модели размер XS-S`
        }
    }
    
}
</script>

<styles lang="scss" scoped>
        .wrapper{
            @media(min-width: 992px){
                display: flex;
            }
            .photos{
                display: flex;
                overflow: auto;
                margin-bottom: 24px;
                padding-left: 32px;
                position: relative;
                @media(min-width: 992px){
                    width: 70%;
                    display: grid;
                    grid-gap: 10px;
                    grid-template-columns: 1fr 1fr;
                    padding: 0;
                }
                &:before{
                    width: 32px;
                    height: 32px;
                    content: '';
                    position: absolute;
                    background-image: url(~/assets/images/arrows.svg);
                    left: 0;
                    top: 40%;
                    animation: slidein 1s linear infinite alternate-reverse;
                }
                @keyframes slidein {
                    0% {
                        left: 10px
                    }
                    100% {
                        left:30px
                    }
                    }
                img{
                    margin-right: 10px;
                    width: 400px;
                    @media(min-width: 992px){
                        width: 100%;
                        margin-right: 0;
                    }
                }
            }
            .info{
                padding: 24px;
                @media(min-width: 992px){
                    padding: 0 32px;
                    height: fit-content;
                    position: sticky;
                    top: 100px;
                }
                h2{
                    margin-bottom: 16px;
                }
                .info-block{
                    margin-bottom: 16px;
                    h3{
                        margin-bottom: 10px;
                    }
                    .logos{
                        display: flex;
                        align-items: center;
                        img{
                            width: 100px;
                            margin-right: 20px;
                        }
                    }
                }
            }
        }
</styles>