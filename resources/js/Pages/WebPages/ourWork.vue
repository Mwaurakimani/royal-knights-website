<template>
    <website-layout :activeLink="2">
        <top-banner :pageName="content.title"></top-banner>
        <p class="px-[20px] max-w-screen-xl mx-auto mb-[30px]">{{  content.description }}</p>

        <div v-for="(item,index) in content.sub_content" class="content-item-section max-w-screen-xl p-[20px] mx-auto" :class="[index%2 === 0 && item.image && item.description ? 'flex-row-reverse': '']">
            <div v-if="item.image" class="image-section">
                <img  style="object-position: center;object-fit: cover;width: 100%; height: 100%" :src="item.image" alt="">
            </div>
            <p v-if="item.description">{{ item.description }}</p>
        </div>

    </website-layout>
</template>

<script>
import websiteLayout from "../../Layouts/websiteLayout.vue";
import topBanner from "../../Appcomponents/topBanner.vue";

export default {
    name: "ourWork.vue",
    props:['content'],
    data(){
        return {
            pageName:"Our Programs"
        }
    },
    components:{
        websiteLayout,
        topBanner
    }
}
</script>

<style lang="scss">
@use "../resources/scss/index";


.content-item-section{
    max-width: 1000px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    .image-section{
        align-self: flex-start;
        width: 100%;
        height: 300px;
        margin-bottom: 10px;
    }
}

.content-item-section:last-of-type{
    margin-bottom: 150px;
}

@media only screen and (min-width: 700px){
    .content-item-section{
        padding-left: 80px;
        padding-right: 80px;
        flex-wrap: nowrap;
        .image-section{
            max-width: 300px;
            max-height: 300px;
            padding: 10px;
            margin-left: 10px;
            margin-right: 10px;
        }
        p{
            width: calc(100% - 320px);
        }


    }
}

</style>
