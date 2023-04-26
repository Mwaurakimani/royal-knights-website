<template>
    <div class="mobile-nav">
        <div class="top-bar">
            <div class="logo-section">
                LOGO
            </div>
            <div class="menu-section" @click="toggle_dropdown" data-dropped="false">
                <div class="menu-box">
                    <img src="/storage/frontEnd/icons8-menu-64.png" alt="">
                </div>
            </div>
        </div>
        <div id="drop_down_panel">
            <ul>
                <Link :href="'/'" as="li"  ><p>Home</p></Link>
                <Link :href="'/AboutUs'" as="li"  ><p>About Us</p></Link>
                <Link :href="'/ourWork'" as="li"  ><p>Our Programs</p></Link>
                <Link :href="'/Gallery'" as="li"  ><p>Gallery</p></Link>
                <Link :href="'/Connect'" as="li"  ><p>Connect</p></Link>
            </ul>
        </div>
    </div>
</template>
<script>
import { Link } from '@inertiajs/inertia-vue3';

export default {
    name: 'mobile-menu-component',
    components:{
        Link
    },
    methods: {
        toggle_dropdown() {
            let drop_panel = $('#drop_down_panel');
            let status = $(event.currentTarget).attr("data-dropped")

            if (status === "false") {
                $(event.currentTarget).attr("data-dropped", "true")
                drop_panel.children("ul").fadeIn('fast', 'linear')
                drop_panel.css(
                    {
                        height: "200px"
                    }
                )


            } else {
                $(event.currentTarget).attr("data-dropped", "false")
                drop_panel.css(
                    {
                        height: "0px"
                    }
                )

                drop_panel.children("ul").fadeIn('fast', 'linear')
            }

        }
    }
}
</script>
<style lang="scss" scoped>
@use "../resources/scss/index";

.mobile-nav {
    z-index:5000;
    width: 100%;
    height: fit-content;
    position: sticky;
    top: 0px;
    background-color: white;


    .top-bar {
        width: 100%;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo-section {
            width: 160px;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 10px;
            font-weight: bolder;
        }

        .menu-section {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

            .menu-box {
                width: 40px;
                height: 40px;
            }
        }
    }

    #drop_down_panel {
        width: 100%;
        height: 0px;
        transition: all ease-in 250ms;
        background-color: pink;

        ul {
            width: 100%;
            height: 100%;
            background-color: #f6f6f6;
            overflow: hidden;

            li {
                width: 100%;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;

                p {
                    text-align: center;
                }

                &:hover {
                    background-color: index.$primary-color;
                    color: white;
                }
            }
        }
    }

}
</style>
