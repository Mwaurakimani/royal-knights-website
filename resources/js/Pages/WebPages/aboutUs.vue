<template>
    <website-layout :activeLink="3">
        <top-banner :pageName="pageName"></top-banner>
        <p class="px-[20px] max-w-screen-xl mx-auto mb-[30px]">Royal Knights organization Story is a
            testament to the power of faith and the impact of hard work and dedication. In 2003, a group of visionary
            individuals came together and formed this incredible organization. They started by holding school missions
            in 2004, reaching out to young people in the Karuri area of Kiambaa constituency, Kiambu county in Kenya.</p>

        <div class="content-item-section max-w-screen-xl p-[20px] mx-auto">

            <p class="px-[20px]">By 2008, the organization had expanded its reach and started doing community work,
                cleaning local hospitals, visiting the elderly, and paying school fees for children who had no means.
                They were making a difference in people's lives, and their impact was growing.</p>

        </div>

        <div class="content-item-section max-w-screen-xl p-[20px] mx-auto">


            <p class="px-[20px]">In 2009, the organization held crusades in the local town, reaching out to the lost and
                spreading the good news. They continued their work with young people in high school, teaching them life
                skills and engaging them in team building activities during school camps in 2014.</p>
        </div>
        <div class="content-item-section max-w-screen-xl p-[20px] mx-auto">

            <p class="px-[20px]">By 2017, the organization had grown significantly and started holding concerts and
                talent shows in St. Martin de Pores Catholic Hall, Karuri, attracting more members and sharing the
                gospel with a wider audience. They introduced the Swallowship Fellowship in 2018, showing love to the
                less fortunate by giving food to the hungry and preaching the gospel to them.</p>

        </div>

        <div class="content-item-section max-w-screen-xl p-[20px] mx-auto">

            <p class="px-[20px]">Today, in 2023, the Royal Knights organization continues to make a difference in
                society, spreading the gospel, and transforming lives beyond measure. They have initiated events and
                festivals to engage their members more and attract more people to join them on their journey of faith.
                Through their unwavering commitment to their mission, the Royal Knights have inspired countless people
                and shown that with faith, dedication, and hard work, anything is possible.</p>

        </div>
        <div class="content-item-section max-w-screen-xl p-[20px] mx-auto">

            <p class="px-[20px]">In 2005, the organization took a more hands-on approach, doing home visits, carrying
                shopping for the less fortunate, and reducing idleness among the youth. They visited children's homes,
                carrying foodstuffs, clothes, and preaching the gospel while supporting talent shows.</p>

        </div>
    </website-layout>
</template>

<script>
import websiteLayout from "../../Layouts/websiteLayout.vue";
import topBanner from "../../Appcomponents/topBanner.vue";

export default {
    name: "ourWork.vue",
    data() {
        return {
            pageName: "About Us"
        }
    },
    components: {
        websiteLayout,
        topBanner
    }
}
</script>

<style lang="scss" scoped>
@use "../resources/scss/index";


.content-item-section {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    .image-section {
        align-self: flex-start;
        width: 100%;
        height: 300px;
        background-color: cyan;
        margin-bottom: 10px;
    }
}

.content-item-section:last-of-type {
    margin-bottom: 150px;
}

@media only screen and (min-width: 700px) {
    .content-item-section {
        padding-left: 80px;
        padding-right: 80px;
        flex-wrap: nowrap;

        .image-section {
            width: 300px;
            margin-left: 10px;
            margin-right: 10px;
        }

        p {
            width: calc(100% - 320px);
        }


    }
}


</style>
