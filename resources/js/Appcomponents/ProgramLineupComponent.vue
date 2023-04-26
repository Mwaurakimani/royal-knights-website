<template>
    <li style="max-width: 900px" >
        <h5 class="heading">{{ program.heading }}</h5>
        <div class="image-section">
            <img :src="program.imageLink">
        </div>
        <div class="description-section" style="font-size: 0.9em;text-overflow: ellipsis">
            {{program.details}}
        </div>
        <a :href="program.link">Learn More...</a>
    </li>
</template>
<script>
export default {
    name: 'program-lineup-component',
    props: ['program']
}
</script>
<style lang="scss" scoped>
@use "../resources/scss/index";

li {
    padding: 10px;
    display: grid;
    grid-template-areas:
        "heading"
        "image"
        "descritption"
        "learnmore";
    border-bottom: 1px solid index.$primary-color;
    padding-bottom: 25px;

    .heading {
        grid-area: heading;
        align-self: center;
        padding-left: 10px;
        color: index.$primary-color;
        font-weight: bolder;
        font-size: 1.2em;
        margin-bottom: 10px;
    }

    .image-section {
        grid-area: image;
        width: 100%;
        height: 100%;
        border-radius: 2px;
        margin-bottom: 10px;
    }

    a {
        margin-top: 20px;
        grid-area: learnmore;
        align-self: center;
        padding-left: 20px;
    }
}


@media screen and (min-width: 700px) {
    .container{
        max-width: 800px;
    }


    li {
        display: grid;
        grid-template-columns: [first] 200px [second] calc(100% - 150px);
        grid-template-rows: [row-1] auto [row2] auto [row3] 50px;
        grid-column-gap: 14px;
        border-bottom: 1px solid index.$primary-color;
        padding-bottom: 25px;

        .heading {
            grid-column: 1/3;
            align-self: center;
            padding-left: 10px;
            color: index.$primary-color;
            font-weight: bolder;
            font-size: 1.2em;
        }

        .image-section {
            grid-column: 1/2;
            width: 100%;
            height: 100%;
            border-radius: 2px;
        }

        a {
            grid-column: 1/3;
            grid-row: 3/4;
            align-self: center;
            padding-left: 20px;
        }
    }
}

</style>
