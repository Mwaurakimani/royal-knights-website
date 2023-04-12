<template>
    <website-layout :activeLink="1">
        <div class="mobile-banner">
            <div class="information-section">
                <h1>Royal Knights <br> Organization</h1>
                <p>
                    hii
                </p>
            </div>
        </div>

        <div class="who-we-are max-w-screen-l sub-section">
            <div class="heading">
                <h4>Who we are</h4>
                <h3>About us</h3>
            </div>
            <div class="image-section">

            </div>
            <div class="knowledge-section">
                <p>the quick brown fox jummped over the lazy dogs</p>
                <a href="" class="button-link">Get Involved</a>
            </div>
        </div>

        <div class="our-programs max-w-screen-l sub-section" style="margin-bottom: 200px">
            <div class="heading">
                <h4>What we do</h4>
                <h3>Programs</h3>
            </div>
            <div class="knowledge-section" style="margin-bottom:20px">
                <p style="border-bottom: 1px solid purple;padding-bottom: 20px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, aspernatur debitis dolor error
                    facilis ipsa omnis quidem recusandae. Accusantium, iusto, sit! Accusamus aliquam eius eveniet illum modi
                    nesciunt nulla sint?
                </p>
            </div>
            <ul class="program-lineup">
                <program-lineup-component/>
                <program-lineup-component/>
                <program-lineup-component/>
                <program-lineup-component/>
                <program-lineup-component/>
            </ul>
        </div>

        <div class="our-program-banner">
            <h2>Outreach</h2>
            <div class="display-banner flex align-middle justify-center">
                <div class="program-tab"></div>
                <div class="program-tab"></div>
                <div class="program-tab"></div>
                <div class="program-tab"></div>
            </div>
            <p style="max-width: 800px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur delectus doloremque ducimus esse expedita ipsa itaque maxime molestias natus numquam obcaecati odio officia optio perferendis porro quas rerum, veniam?</p>
        </div>

        <div class="events-section sub-section">
            <div class="heading">
                <h3>Up Coming Events</h3>
            </div>
            <ul>
                <li class="event-panel">
                    <div class="date-section">
                        20/20/2020 03:00 PM
                    </div>
                    <div class="event-heading">
                        THIS SI THE HEADING OF THE EVENT
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores aspernatur corporis deserunt dolores doloribus </p>
                </li>
                <li class="event-panel">
                    <div class="date-section">
                        20/20/2020 03:00 PM
                    </div>
                    <div class="event-heading">
                        THIS SI THE HEADING OF THE EVENT
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores aspernatur corporis deserunt dolores doloribus </p>
                </li>
                <li class="event-panel">
                    <div class="date-section">
                        20/20/2020 03:00 PM
                    </div>
                    <div class="event-heading">
                        THIS SI THE HEADING OF THE EVENT
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores aspernatur corporis deserunt dolores doloribus </p>
                </li>
                <li class="event-panel">
                    <div class="date-section">
                        20/20/2020 03:00 PM
                    </div>
                    <div class="event-heading">
                        THIS SI THE HEADING OF THE EVENT
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores aspernatur corporis deserunt dolores doloribus </p>
                </li>
            </ul>
        </div>
    </website-layout>
</template>

<script>

import websiteLayout from "../Layouts/websiteLayout.vue";
import ProgramLineupComponent from "../Appcomponents/ProgramLineupComponent.vue";
export default {
    name: "welcome",
    components: {
        websiteLayout,
        ProgramLineupComponent,
    },
    methods: {

    },
}

</script>

<style lang="scss">
@use "../resources/scss/index";

.mobile-banner {
    width: 100%;
    height: calc(100vh - 55px);
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    .information-section {
        width: 80%;
        display: block;
        margin: auto;
        background-color: lightgrey;
        padding-bottom: 80px;

        h1 {
            padding: 10px;
            font-weight: bolder;
            color: index.$primary-color;
            line-height: 30px;
            font-size: 1.3em;
            border-bottom: 1px solid index.$primary-color;
            width: 90%;
            margin: auto auto 20px;
        }

        p {
            width: 80%;
            margin: auto;
        }
    }
}

.desktop-nav{
    display: none;
}

.sub-section {
    max-width: 90%;
    height: fit-content;
    margin: auto auto 50px;

    .knowledge-section {
        width: 100%;
        margin-bottom: 20px;

        p {
            margin-bottom: 30px;
        }

        .button-link {
            width: fit-content;
            display: block;
            margin: auto;
        }
    }
}

.who-we-are {
    .image-section {
        width: 100%;
        height: 80vw;
        background-color: lightskyblue;
        margin-bottom: 10px;
    }
}

.our-programs{
    margin-bottom: 60px;
}

.our-program-banner {
    width: 100%;
    height: 100vh;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;

    h2{
        width: 100%;
        font-weight: bolder;
        font-size: 2.3em;
        text-align: center;
        margin-bottom: 20px;
    }

    .display-banner {
        width: 80%;
        height: 50vh;
        background-color: grey;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;

        .program-tab{
            width: 140px;
            height: 140px;
            background-color: white;
            border-radius: 8px;
        }
    }
    p{
        width: 75%;
        text-align: center;
    }
}

.events-section{
    .event-panel{
        margin-bottom: 30px;
        display: block;
        width: 95%;
        height: 200px;
        background-color: white;
        box-shadow: 0 0 6px lightgrey;
        border: none;

        .date-section{
            font-size: 0.85em;
            width: 180px;
            height: 30px;
            background-color: index.$primary-color;
            line-height: 30px;
            font-weight: bolder;
            color: white;
            padding-left: 10px;
            margin-bottom: 10px;
        }

        .event-heading{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 90%;
            height: 40px;
            line-height: 40px;
            font-weight: bolder;
            display: block;
            text-align: center;
            border-bottom: 1px solid index.$primary-color;
            margin: auto auto 10px;
        }
        p{
            font-size: 0.9em;
            margin: auto;
            width: 90%;
            border: none;
            color: rgb(38, 38, 38);
        }
    }
}



@media screen  and (min-width:700px) {
    .mobile-banner{
        height: 50vh;
    }
    .who-we-are{
        display: flex;
        flex-wrap: wrap;
        .heading{
            width: 100%;
        }
        .image-section{
            width: 300px;
            height: 300px;
        }
        .knowledge-section{
            width: 45%;
            margin-left: 5%;
        }
    }
    .our-program-banner{
        margin-bottom: 50px;
        height: 50vh;
        .display-banner{
            max-width: 800px;
            height: 200px;
            margin-bottom: 50px;
        }
    }

    .events-section{
        .heading{
            margin-bottom: 40px;
        }
        ul{
            display: flex;
            justify-content: space-around;

            flex-wrap: wrap;
        }
        .event-panel{
            width: 320px;
        }
    }

    .program-lineup{
        padding-left: 100px;
    }
}

@media screen and (min-width: 1020px) {
    .mobile-banner{
        height: 100vh;
        display: flex;
        align-items: flex-start;
        .information-section{
            margin-left: 5%;
            max-width: 280px;

        }
    }
    .sub-section{
        max-width: 1300px;
    }
}

</style>
