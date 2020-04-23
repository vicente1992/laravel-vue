<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card mb-3 mt-3" v-for="item in list" :key="item.id">
        <router-link
          class="card-header"
          :to="{name: 'post', params: {slug: item.slug}}"
          v-text="item.title"
        ></router-link>

        <div class="card-body">
          <p>ID: {{ item.id }}</p>
          <p class="card-text" v-text="item.excerpt"></p>
        </div>
      </div>
      <infinite-loading @infinite="infiniteHandler">
        <div slot="no-more">No hay mas archivos</div>
        <div slot="spinner">Cargando...</div>
        <div slot="no-results">SIn resultado</div>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      page: 0
    };
  },
  methods: {
    infiniteHandler($state) {
      this.page++;
      let url = "http://laravel-vue.test/api/posts?page=1" + this.page;

      axios
        .get(url)
        .then(res => {
          let posts = res.data.data;
          if (posts.length) {
            this.list = this.list.concat(posts);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
