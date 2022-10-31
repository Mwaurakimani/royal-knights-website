<template>
    <website-layout :activeLink="3">
        <top-banner :pageName="pageName"></top-banner>
        <p class="px-[20px] max-w-screen-xl mx-auto mb-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem.
        </p>

        <div class="content-item-section max-w-screen-xl p-[20px] mx-auto">
            <div class="image-section">

            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.</p>
        </div>

        <div class="content-item-section max-w-screen-xl p-[20px] mx-auto flex-row-reverse">
            <div class="image-section">

            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.</p>
        </div>

        <div class="content-item-section max-w-screen-xl p-[20px] mx-auto">
            <div class="image-section">

            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.</p>
        </div>

        <div class="content-item-section max-w-screen-xl p-[20px] mx-auto flex-row-reverse">
            <div class="image-section">

            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.</p>
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
            pageName:"About Us"
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
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    .image-section{
        align-self: flex-start;
        width: 100%;
        height: 300px;
        background-color: cyan;
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
            width: 300px;
            margin-left: 10px;
            margin-right: 10px;
        }
        p{
            width: calc(100% - 320px);
        }


    }
}


</style>
