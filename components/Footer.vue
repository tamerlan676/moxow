<template lang="pug">
.footer 
    img(src="~/assets/images/footer.svg" width="120px") 
    .copyright(v-html="copyright")
</template>

<script>
export default {
    name: 'FooterComp',
    data() {
        return {
            copyright: `ООО "ФЭШНЛАЙН24" <br> ИНН: 5024235459 <br> ОГРН: 1235000098508`
        }
    }
}
</script>

<styles lang="scss">
.footer{
    padding: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    img{
        margin-bottom: 16px;
    }
}

</styles>