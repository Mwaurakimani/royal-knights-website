<template>
  <li>
    <h5 class="heading">Program</h5>
    <div class="image-section">

    </div>
    <div class="description-section" style="font-size: 0.9em">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Culpa deleniti eum excepturi fugiat hic id ipsam obcaecati
    </div>
    <a href="">Learn More...</a>
  </li>
</template>
<script>
export default {
  name: 'program-lineup-component'
}
</script>
<style lang="scss" scoped>
@use "../resources/scss/index";

li {
    display: grid;
    grid-template-columns: [first] 140px [second] calc(100% - 150px);
    grid-template-rows: [row-1] 40px [row2] 140px [row3] 50px;
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
        background-color: red;
    }

    a {
        grid-column: 1/3;
        grid-row: 3/4;
        align-self: center;
        padding-left: 20px;
    }
}

</style>
