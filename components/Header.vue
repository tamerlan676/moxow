<template lang="pug">
.header
    a(href="/")
        img(src="~/assets/images/logo.svg")
    Navigation
</template>
    
    <script>
    export default {
        name: 'HeaderComp',
        data() {
            return {
                scrollPosition: null
            }
        },
        methods: {
        }
    
    }
    </script>
    
    <style lang="scss">
        .header{
            width: 100%;
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            flex-direction: column;
            box-sizing: border-box;
            background: #fff;
            padding: 24px;
            @media(min-width: 992px){
                padding: 16px;
            }
            a{
                display: block;
            }
            img{
                width: 195px;
                @media(min-width: 992px){
                    width: 200px;
                    margin-bottom: 24px;
                }
            }
            .burder{
                width: 30px;
                height: 20px;
                position: absolute;
                &:before{
                    position: absolute;
                    content: '';
                    width: 30px;
                    height: 2px;
                    background: rgb(75, 163, 231);
                    top: 0;
                }
                &:after{
                    position: absolute;
                    content: '';
                    width: 30px;
                    height: 2px;
                    background: rgb(75, 163, 231);
                    bottom: 0;
                }
                span{
                    position: absolute;
                    content: '';
                    width: 30px;
                    height: 2px;
                    background: rgb(75, 163, 231);
                    top:9px;
                }
            }   
        }
        .change_color {
            background: #fff 
        } 
    
    </style>