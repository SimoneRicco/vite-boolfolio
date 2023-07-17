<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  created() {
    // richiesta axios per i dati del proj
    axios
      .get(this.store.baseUrl + "api/projects/" + this.$route.params.slug)
      .then((response) => console.log(response));
  },
};
</script>

<template>
  <h2>Sono la show</h2>
</template>

<style></style>
