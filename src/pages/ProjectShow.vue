<script>
import axios from "axios";
import { store } from "../store";
import { DateTime } from "luxon";
import App404 from "./App404.vue";

export default {
  components: {
    App404,
  },
  data() {
    return {
      project: null,
      store,
      luxon: DateTime,
      is404: false,
    };
  },
  created() {
    // richiesta axios per i dati del proj
    axios
      .get(this.store.baseUrl + "api/projects/" + this.$route.params.slug)
      .then((response) => {
        this.project = response.data.results;
      })
      .catch(() => (this.is404 = true));
  },
};
</script>

<template>
  <App404 v-if="is404" />
  <template v-else-if="project">
    <h1>{{ project.title }}</h1>
    <h2>Last modified: {{ this.luxon.now().toFormat("dd/MM/yyyy") }}</h2>
    <img :src="this.store.getImageUrl(project.image)" :alt="project.title" />
    <p>{{ project.content }}</p>
  </template>
</template>

<style></style>
