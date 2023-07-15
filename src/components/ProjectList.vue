<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      arrProj: [],
      nPages: 0,
      currentPage: 1,
    };
  },
  methods: {
    changePage(p) {
      this.currentPage = p;
      this.getProjects();
    },
    getProjects() {
      axios
        .get("http://localhost:8000/api/projects", {
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
};
</script>

<template>
  <nav>
    <ul class="pagination">
      <li
        v-for="page in nPages"
        :key="page"
        class="page-item"
        :class="{ active: page == currentPage }"
      >
        <span class="page-link" @click="changePage(page)">
          {{ page }}
        </span>
      </li>
    </ul>
  </nav>

  <div class="d-flex flex-wrap">
    <ProjectCard :projects="arrProj"></ProjectCard>
  </div>
</template>

<style lang="scss" scoped></style>
