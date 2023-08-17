<template lang="pug">
.squares 
    nuxt-link.square(v-for="(item, key) in squares" :key="key" :to="item.link")
        img(:src="item.img")
        .title {{ item.title }}

</template>

<script>
export default {
    name: 'SquaresMain',
    data() {
        return {
            squares: [
                {
                    title: 'Костюмы',
                    link: '/suits',
                    img: require('~/assets/images/suits.jpg')
                },
                {
                    title: 'Платья',
                    link: '/dresses',
                    img: require('~/assets/images/dresses.jpg')
                },
                {
                    title: 'Плащи',
                    link: '/cloaks',
                    img: require('~/assets/images/paltos.jpg')
                },
                {
                    title: 'Пиджаки',
                    link: '/blazers',
                    img: require('~/assets/images/blazers.jpg')
                }
            ]
        }
    }
}
</script>

<styles lang="scss" scoped>
.squares{
    display: flex;
    overflow: auto;
    padding-left: 24px;
    @media(min-width: 992px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        overflow: auto;
        padding-left: 0;
    }
    .square{
        position: relative;
        width: 300px;
        flex: 0 0 auto;
        margin-right: 20px;
        border: 1px solid rgb(157, 178, 186);
        @media(min-width: 992px){
            overflow: auto;
            margin-right: 0;
            width: 100%;
        }
        &:before{
            position: absolute;
            width: 100%;
            height: 100%;
            transition: all .5s ease;
            background: rgb(32, 70, 83);
            opacity: 0.5;
            content: '';
            z-index: 2;
        }
        &:hover{
            &:before{
                opacity: 0.2;
            }
        }
        .title{
            position: absolute;
            bottom: 30px;
            left: 16px;
            color: #fff;
            font-size: 25px;
            font-family: 'Semi-Bold';
            z-index: 3;
        }
    }
    &::-webkit-scrollbar {
            display: none;
          }
}
</styles>