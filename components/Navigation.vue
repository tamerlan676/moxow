<template lang="pug">
.navigation 
    ul.navigation-wrapper
        li
            nuxt-link.link(to=`/`) Главная 
        li
            nuxt-link.link(to=`/about`) О Бренде
        li
            nuxt-link.link(to=`/dresses`) Каталог
        li
            nuxt-link.link(to=`/faq`) Вопрос-ответ
        li
            nuxt-link.link(to='/contacts') Контакты
</template>

<script>
export default {
    name: 'NavigationComp'
}
</script>

<styles lang="scss" scoped>
.navigation{
    width: 100%;
    @media(min-width: 992px){
        overflow: hidden;
        padding: 0;
    }
    .navigation-wrapper{
        display: flex;
        list-style: none;
        width: 100%;
        overflow: auto;
        margin-top: 24px;
        @media(min-width: 992px){
            margin: 0 auto;
            width: fit-content;
        }
        li{
            flex: 0 0 auto;
            margin-right: 32px;
            &:last-child{
                margin-right: 0;
            }

        }
        .link{
            color: var(--color-text);
            text-decoration: none;
        }
        a.nuxt-link-active {
            font-weight: bold;
        }
        /* exact link will show the primary color for only the exact matching link */
        a.nuxt-link-exact-active {
            font-family: 'Semi-Bold';
        }
        &::-webkit-scrollbar {
            display: none;
          }
    }

}
</styles>