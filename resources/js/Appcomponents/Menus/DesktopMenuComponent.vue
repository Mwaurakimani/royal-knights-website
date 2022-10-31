<template>
    <div class="desktop-nav">
        <div class="log-section">
            <img src="/storage/frontEnd/logo.png" alt="">
            <p>Royal Knights <br> Organization</p>
        </div>
        <div class="buttons-area">
            <ul class="button-section">
                <Link as="li" :href="'/'" :class="[activeLink == 1 ? 'active' : '']">Home</Link>
                <Link as="li" :href="'/ourWork'" :class="[activeLink == 2 ? 'active' : '']"   >Our Work</Link>
                <Link as="li" :href="'/AboutUs'" :class="[activeLink == 3 ? 'active' : '']" >About</Link>
                <Link as="li" :href="'/Gallery'" :class="[activeLink == 4 ? 'active' : '']" >Gallery</Link>
            </ul>
            <div class="contact-button">
                <Link :href="'/Connect'" as="button">Connect</Link>
            </div>
        </div>
    </div>
</template>
<script>

import { Link } from "@inertiajs/inertia-vue3";

export default {
    name: 'desktop-menu-component',
    props:['activeLink'],
    components: {
        Link
    }
}
</script>
<style lang="scss" scoped>
@use "../resources/scss/index";

nav {
    width: 100%;
    height: fit-content;
}

.desktop-nav {
    display: none;
}

@media screen and (min-width: 918px) {
    .desktop-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .log-section {
            display: flex;
            height: 80px;
            padding: 10px 10px 10px 100px;

            p {
                padding-left: 30px;
                font-size: 1.4em;
                font-weight: bolder;
                color: purple;
            }
        }

        .buttons-area {
            width: 500px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-right: 20px;

            .button-section {
                height: 80px;
                display: flex;
                align-items: center;
                padding-right: 10px;

                li {
                    border: 1px solid transparent;
                    border-radius: 8px;
                    cursor: pointer;
                    padding: 5px 10px;
                    white-space: nowrap;
                    margin: 0px 5px;
                    box-sizing: border-box;

                    &:hover {
                        border: solid 1px purple;
                    }
                }

                .active {
                    background-color: purple;
                    color: white;
                    &:hover{
                        background-color: transparent;
                        border: solid 1px purple;
                        color: purple;
                    }
                }
            }

            .contact-button {
                button {
                    border: 1px solid purple;
                    padding: 10px 25px;
                    margin-right: 10px;
                    border-radius: 34px;
                    color: purple;
                    &:hover{
                        background-color: purple;
                        color: white;
                    }
                }
            }
        }
    }
}

</style>
