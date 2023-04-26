<template>
    <website-layout>
        <top-banner :pageName="pageName"></top-banner>
        <h1>{{ event.title }}</h1>

        <div class="poster">
            <img :src="event.source">
        </div>

        <p class="px-[20px] max-w-screen-xl mx-auto mb-[10px]">Date : 00/00/0000</p>
        <p class="px-[20px] max-w-screen-xl mx-auto mb-[30px]">Time : 00:00am</p>
        <p class="px-[20px] max-w-screen-xl mx-auto mb-[80px]">Event Description</p>

    </website-layout>
</template>

<script>
import websiteLayout from "../../Layouts/websiteLayout.vue";
import topBanner from "../../Appcomponents/topBanner.vue";

export default {
    name: "ourWork.vue",
    data() {
        return {
            pageName: "Event"
        }
    },
    props:['event'],
    components: {
        websiteLayout,
        topBanner
    }
}
</script>

<style lang="scss" scoped>
@use "../resources/scss/index";

h1{
    text-align: center;
    font-weight: bolder;
    font-size: 1.3em;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

.poster{
    width: 90%;
    margin: auto;
    margin-bottom: 30px;
}

p:last-of-type{
    margin-bottom: 70px;
}

@media only screen and (min-width: 700px) {
    .poster{
        width: 500px;
        margin: auto;
        margin-bottom: 30px;
    }


}


</style>
