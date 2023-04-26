<template>
    <div class="page-banner">
        <h1 class="container">{{ pageName }}</h1>
    </div>
</template>

<script>
export default {
    name: "topBanner",
    props: ['pageName'],
}
</script>

<style lang="scss"  scoped>
h1{
    max-width: 1240px;
    padding: 0px;
    margin: 0px;
    margin: auto;
}

.page-banner{
    width: 100%;
    height: 90px;
    padding-top: 40px;
    padding-left: 20px;
    background-color: purple;
    margin-bottom: 20px;
    h1{
        color: white;
        font-size: 1.5em;
    }
}

</style>
