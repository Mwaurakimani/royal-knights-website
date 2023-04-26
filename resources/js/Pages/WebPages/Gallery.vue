<template>
    <website-layout :activeLink="4">
        <top-banner :pageName="pageName"></top-banner>
        <div class="gallery-display">
            <div v-for="image in images"  class="image-section">
                <img :src="'/storage/frontEnd/images/'+image">
            </div>
        </div>
    </website-layout>
</template>

<script>

import websiteLayout from "../../Layouts/websiteLayout.vue";
import topBanner from "../../Appcomponents/topBanner.vue";

export default {
    name: "ourWork.vue",
    props:['images'],
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
    margin: auto auto 100px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap:10px;
    flex-wrap: wrap;

    .image-section{
        cursor: pointer;
        margin: auto;
        width: 200px;
        height: 200px;
        padding: 5px;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 0 6px lightgrey;
        transition: all ease-in 100ms;
        img{
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }

        &:hover{
            transform: scale(1.1);
        }
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
