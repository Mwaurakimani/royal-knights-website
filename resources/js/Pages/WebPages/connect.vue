<template>
    <website-layout :activeLink="5">
        <top-banner :pageName="pageName"></top-banner>
    </website-layout>
</template>

<script>

import websiteLayout from "../../Layouts/websiteLayout.vue";
import topBanner from "../../Appcomponents/topBanner.vue";

export default {
    name: "ourWork.vue",
    data(){
        return {
            pageName:"Connect"
        }
    },
    components:{
        websiteLayout,
        topBanner
    }
}
</script>

<style lang="scss" >
@use "../resources/scss/index";

</style>
