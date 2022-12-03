<template>
    <website-layout :activeLink="5">
        <top-banner :pageName="pageName"></top-banner>
        <div class="banner-background">
            <h1>GET IN TOUCH</h1>
            <div class="contact-det">
                <section>
                    <div class="icon-holder">
                    </div>
                    <label for=""> Phone :</label>
                    <p>+245 700 000 000</p>
                </section>
                <section>
                    <div class="icon-holder">
                    </div>
                    <label for="">Email :</label>
                    <p>email@email.com</p>
                </section>
                <section>
                    <div class="icon-holder">
                    </div>
                    <label for="">Address :</label>
                    <p>Nairobi CBD Times tower</p>
                </section>

            </div>
            <div class="contact-form">
                <div class="user-details">
                    <input type="text" placeholder="Name">
                    <input type="text" placeholder="Email">
                    <input type="text" placeholder="Subject">
                </div>
                <div class="text-area">
                    <textarea placeholder="Enter Message..."></textarea>
                </div>
                <div class="button-section">
                    <button class="button-link" >SEND MESSAGE</button>
                </div>
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
            pageName:"Connect"
        }
    },
    components:{
        websiteLayout,
        topBanner
    }
}
</script>

<style lang="scss" scoped src="./connect.scss" ></style>
