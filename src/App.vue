<script>
import ProjectList from "./components/ProjectList.vue";

export default {
  components: {
    ProjectList,
  },
};
</script>

<template>
  <div class="container">
    <!-- <h1>Benvenuto!</h1> -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>
