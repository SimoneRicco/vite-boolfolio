<script>
export default {};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link :to="{ name: 'home' }" class="navbar-brand"
        >Boolpress</router-link
      >

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              :to="{ name: 'projects.index' }"
              class="nav-link active"
              >Projects</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style></style>
