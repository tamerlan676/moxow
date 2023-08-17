<template lang="pug">
.content 
    h2 Moxow
    .text
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<styles lang="scss">
.content{
    padding: 24px;
    h2{
        margin-bottom: 24px;
        @media(min-width: 992px){
            text-align: center;
        }
    }
    .text{
        @media(min-width: 992px){
            width: 1120px;
            margin: 0 auto;
        }
    }
}

</styles>