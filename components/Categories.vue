<template lang="pug">
.categories 
    ul.categories-wrapper
        li
            nuxt-link.category(to=`/dresses`) Платья
        li
            nuxt-link.category(to=`/suits`) Костюмы
        li
            nuxt-link.category(to=`/blazers`) Пиджаки
        li
            nuxt-link.category(to='/cloaks') Плащи
</template>

<script>
export default {
    name: 'CategoriesComp'
}
</script>

<styles lang="scss" scoped>
.categories{
    overflow: auto;
    padding-left: 24px;
    margin-top: 24px;
    margin-bottom: 24px;
    @media(min-width: 992px){
        overflow: hidden;
        padding: 0;
    }
    .categories-wrapper{
        display: flex;
        list-style: none;
        @media(min-width: 992px){
            margin: 0 auto;
            width: fit-content;
        }
        .category{
            flex: 0 0 auto;
            background: #EAEAEA;
            border-radius: 9px;
            color: var(--color-text);
            text-decoration: none;
            display: inline-block;
            vertical-align: top;
            padding: 14px 20px;
            text-align: center;
            margin-right: 5px;
            &:last-child(){
                margin-right: 0;
            }
        }
        a.nuxt-link-active {
            font-weight: bold;
        }
        /* exact link will show the primary color for only the exact matching link */
        a.nuxt-link-exact-active {
            color: #fff;
            background: #000;
        }
    }
    &::-webkit-scrollbar {
            display: none;
          }

}
</styles>