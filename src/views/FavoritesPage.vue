<template>
    <Favorites />
    <SideBar />
</template>

<script>
import SideBar from "@/components/sidebar.vue";
import Favorites from "@/components/favorites.vue";
export default {
    name: "FavoritesPage",
    components: {
        SideBar,
        Favorites,
    },
};
</script>

<style></style>
