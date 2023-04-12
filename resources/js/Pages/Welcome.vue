<template>
    <website-layout :activeLink="1">
        <div class="mobile-banner">
            <div class="information-section">
                <h1>Royal Knights <br> Organization</h1>
                <p> As Royal Knights, we are dedicated to serving our communities in any way we can through volunteer programs, community service initiatives, and outreach efforts.</p>
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
                <p>Welcome to Royal Knights Organization, where community is at the heart of everything we do. Our goal is simple: to create a world where everyone can thrive. We believe that by working together and supporting one another, we can make a positive impact on the world around us.

                    As Royal Knights, we are dedicated to serving our communities in any way we can. Through volunteer programs, community service initiatives, and outreach efforts, we strive to make a difference in the lives of those around us.

                    Join us on our mission to build a brighter future for all. Together, as Royal Knights, we can make a world of difference.</p>
                <a href="" class="button-link">Get Involved</a>
            </div>
        </div>

        <div class="our-programs max-w-screen-l sub-section" style="margin-bottom: 200px">
            <div class="heading">
                <h4>What we do</h4>
                <h3>Programs</h3>
            </div>
            <div class="knowledge-section" style="margin-bottom:20px">
                <p style="border-bottom: 1px solid purple;padding-bottom: 20px">
                    We strive to empower and inspire the next generation of leaders. Our programs are designed to support youth in their personal and spiritual growth, while also providing practical guidance for academic and career success.
                    <br>
                    Over the years, we have reached out to hundreds of schools and churches, impacting the lives of thousands of young people. Our programs are created with the goal of guiding youth in their journey towards becoming responsible, compassionate, and successful members of society.We aim to create a cohesive and supportive environment that fosters growth and development.
                </p>
            </div>
            <ul class="program-lineup">
                <program-lineup-component v-for="program in programs" :program="program" />
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
            <p style="max-width: 800px" class="mb-[20px]">The Royal Knights Organisation has had a tremendous impact on the community over the years.Our organization's commitment to making a difference in the lives of young people has been unwavering, and we remain dedicated to continuing our work for many years to come. </p>
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

    data(){
        return{
            programs:[
                {
                    heading:"School Missionary Programs",
                    details:'At Royal Knights Organization, we are passionate about spreading the love and grace of God to those around us. Our school and missionary programs are designed to provide individuals of all ages and backgrounds with the opportunity to connect with positive role models, learn valuable life skills, and deepen their spiritual connections.'
                },
                {
                    heading:"Boys to men",
                    details:"Welcome to the Boys to Men program, a Royal Knights Organization initiative designed to help young boys aged 13-16 develop into successful and compassionate leaders. Our program focuses on teaching practical skills such as effective communication, decision-making, problem-solving, goal-setting, and teamwork, while also providing guidance on living a Godly life. Through our mentoring sessions, we are committed to helping boys grow in a Godly manner and become the best versions of themselves.\n" +
                        "\n" +
                        "At the Boys to Men program, we believe that every boy has the potential to become a leader. That's why we are dedicated to empowering boys with the skills and values they need to succeed in all areas of life, including school, work, and beyond. "
                },
                {
                    heading:"Preaching",
                    details:"Join us for an uplifting and inspiring experience as we bring the Word of God to churches across the country. At Royal Knights Organization, our preaching program is designed to provide Christians with the spiritual guidance they need to strengthen their faith and deepen their connection with God. Our passionate and knowledgeable preachers are committed to delivering powerful messages that speak directly to the hearts"
                },
                {
                    heading:"Academic and career guidance",
                    details:"At Royal Knights, we understand the importance of helping our youth navigate the journey from academic studies to career paths. We believe that every young person has unique gifts and talents that can be nurtured to reach their full potential. As a Christian organization, we are committed to providing guidance and support to help our youth make informed decisions about their future.Our team members are passionate about helping young people discover their passions, explore career options, and develop the skills necessary to achieve their goals."
                },

            ]
        }
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
