<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";
import { store } from "../store";
import AppNav from "./AppNav.vue";

export default {
  components: {
    ProjectCard,
    AppNav,
  },
  data() {
    return {
      arrProj: [],
      nPages: 0,
      currentPage: 1,
      store,
    };
  },
  methods: {
    toPrevPage() {
      this.currentPage != 1 ? this.currentPage-- : null;
    },
    toNextPage() {
      this.currentPage != this.nPages ? this.currentPage++ : null;
    },
    getProjects() {
      axios
        .get(store.baseUrl + "api/projects", {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.arrProj = response.data.data;
          this.nPages = response.data.last_page;
        });
    },
  },
  created() {
    this.getProjects();
  },
  watch: {
    currentPage() {
      this.getProjects();
    },
  },
};
</script>

<template>
  <AppNav></AppNav>
  <nav>
    <ul class="pagination">
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          :class="{ disabled: currentPage == 1 }"
          @click="toPrevPage"
          >Previous</a
        >
      </li>
      <li
        v-for="page in nPages"
        :key="page"
        class="page-item"
        :class="{ active: page == currentPage }"
        @click="currentPage = page"
      >
        <span class="page-link">
          {{ page }}
        </span>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          :class="{ disabled: currentPage == nPages }"
          @click="toNextPage"
          >Next</a
        >
      </li>
    </ul>
  </nav>

  <div class="d-flex flex-wrap">
    <ProjectCard :projects="arrProj"></ProjectCard>
  </div>
</template>

<style lang="scss" scoped></style>
