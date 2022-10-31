<template>
    <nav>
        <mobile-menu-component/>
        <desktop-menu-component :activeLink="activeLink" />
    </nav>
    <slot>

    </slot>
    <footer>
        <mobile-footer/>
        <desktop-footer/>
        <div class="copy-right">&#169 2022 Royal Knights Organization . Site by Mwaura Kimani</div>
    </footer>
</template>

<script>

import MobileMenuComponent from "../Appcomponents/Menus/MobileMenuComponent.vue";
import DesktopMenuComponent from "../Appcomponents/Menus/DesktopMenuComponent.vue";
import mobileFooter from "../Appcomponents/Footer/MobileFooter.vue";
import desktopFooter from "../Appcomponents/Footer/DesktopFooter.vue";

export default {
    name: "websiteLayout",
    props:['activeLink'],
    components:{
        mobileFooter,
        desktopFooter,
        DesktopMenuComponent,
        MobileMenuComponent
    }
}
</script>

<style scoped>

</style>
