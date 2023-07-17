<script>
export default {
  props: {
    projects: Object,
  },
};
</script>

<template>
  <div
    class="card mx-auto mb-2"
    style="width: 18rem"
    v-for="project in projects"
    :key="project"
  >
    <img :src="project.url_image" class="card-img-top" alt="Project image" />
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <div class="overflow-auto project-description card-text">
        {{ project.content }}
      </div>
      <p class="card-text mt-1">Type: {{ project.type.name }}</p>
      <ul class="list-group list-group-flush technologies overflow-auto">
        <li
          v-for="technology in project.technologies"
          class="list-group-item"
          :key="technology"
        >
          {{ technology.name }}
        </li>
      </ul>
      <router-link
        :to="{ name: 'projects.show', params: { slug: project.slug } }"
        class="btn btn-primary mt-auto"
        >View</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-description {
  height: 6rem;
}
.technologies {
  height: 6rem;
}
</style>
