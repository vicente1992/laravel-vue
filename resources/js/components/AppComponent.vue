<template>
  <div>
    <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <h4 class="text-white">Spa y Componentes</h4>
              <p class="text-muted">Laravel y vue</p>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
              <h4 class="text-white">Navegación</h4>
              <ul class="list-unstyled">
                <li>
                  <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li>
                  <router-link to="/blog" class="nav-link">Blog</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container d-flex justify-content-between">
          <router-link to="/" class="navbar-brand d-flex align-items-center">
            <strong>Vic_Ortiz</strong>
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
    <transition name="slide-fade" mode="out-in">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </div>
</template>

<script>
import posts from "./PostsComponent";

export default {
  components: {
    posts
  }
};
</script>

