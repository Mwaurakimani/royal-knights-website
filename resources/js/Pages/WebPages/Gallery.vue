<template>
    <website-layout :activeLink="4">
        <top-banner :pageName="pageName"></top-banner>
        <div class="gallery-display">
            <div class="image-section">

            </div>
            <div class="image-section">

            </div>
            <div class="image-section">

            </div>
            <div class="image-section">

            </div>
            <div class="image-section">

            </div>
            <div class="image-section">

            </div>
            <div class="image-section">

            </div>
            <div class="image-section">

            </div>

        </div>
    </website-layout>
</template>

<script>

import websiteLayout from "../../Layouts/websiteLayout.vue";
import topBanner from "../../Appcomponents/topBanner.vue";

export default {
    name: "ourWork.vue",
    data(){
        return {
            pageName:"Gallery"
        }
    },
    components:{
        websiteLayout,
        topBanner
    }
}
</script>

<style  lang="scss" scoped>
@use "../resources/scss/index";


.gallery-display{
    width: 90%;
    background-color: red;
    margin: auto auto 100px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap:10px;
    flex-wrap: wrap;

    .image-section{
        margin: auto;
        width: 200px;
        height: 250px;
        background-color: cyan;
    }
}

@media only screen and (min-width: 1200px){
    .gallery-display{
        .image-section{
            margin: 0px;
        }
    }
}
</style>
