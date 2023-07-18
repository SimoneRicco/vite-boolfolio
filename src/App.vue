<script>
import ProjectList from "./components/ProjectList.vue";
import AppNav from "./components/AppNav.vue";
export default {
  components: {
    ProjectList,
    AppNav,
  },
};
</script>

<template>
  <div class="container">
    <!-- <h1>Benvenuto!</h1> -->
    <AppNav></AppNav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>
