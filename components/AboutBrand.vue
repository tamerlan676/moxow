<template lang="pug">
.about
    .left 
        h1 Moxow 
        .text(v-html="text") {{ text }}
    .image 
        img(src="~/assets/images/about.jpg")
        .rf

</template>

<script>
export default {
    name: 'CategoriesComp',
    data() {
        return {
            text: `MOXOW - это воплощение гармонии между современными трендами и&nbsp;безвременной элегантностью. Мы тщательно подбираем материалы и&nbsp;оттачиваем дизайн, чтобы каждая деталь гармонично соединялась с&nbsp;общей концепцией бренда. Наша цель - дарить вам не&nbsp;только стиль, но и&nbsp;уверенность в&nbsp;себе, чтобы вы могли сиять в&nbsp;любой ситуации.`
        }
    }
    
}
</script>

<styles lang="scss" scoped>
.about{
    padding: 80px 16px;
    @media(min-width: 992px){
        width: 1120px;
        margin: 0 auto; 
        justify-content: space-between;
        padding: 120px 24px;
        display: flex;
        align-items: center;
    }
    .left{
        @media(min-width: 992px){
            width: 370px;
        }
    h1{
        margin-bottom: 24px;
    }
    .text{
        font-size: 18px;
        line-height: 32px;
        letter-spacing: 1px;
        margin-bottom: 24px;
        white-space: pre-line;
        @media(min-width: 992px){
            width: 370px;
            font-size: 20px;
            margin-bottom: 0;
        }
    }
    }
    .image{
        position: relative;
        .rf{
            width: 100px;
            height: 100px;
            position: absolute;
            background-size: cover;
            background-image: url(../assets/images/rf.png);
            animation: rotate 15s linear infinite;
            bottom: 20px;
            left: -15px;
            @media(min-width: 992px){
                width: 200px;
                height: 200px;
                left: -100px;
            }
    }

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
        }
    }

</styles>