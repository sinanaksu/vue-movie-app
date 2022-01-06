<template>
  <div class="home">
    <Jumbotron />
    <div class="container  mb-4">
      <h3 class="border-0 p-2 ps-3 pt-2">
        <span>{{ $t("top-tv") }}</span>
      </h3>
      <div v-if="topTV.length">
        <ItemList :items="topTV" />
      </div>
      <div v-else class="d-flex justify-content-center">
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>

    <div class="container mb-3">
      <h3 class="border-0 p-2 ps-3 pt-2">
        <span>{{ $t("top-movie") }}</span>
      </h3>
      <div v-if="topMovie.length">
        <ItemList :items="topMovie" />
      </div>
      <div v-else class="d-flex justify-content-center">
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Jumbotron from "../components/Jumbotron.vue";
import ItemList from "../components/ItemList.vue";
import { trending } from "../services/trending";
export default {
  name: "App",
  components: {
    Jumbotron,
    ItemList,
  },
  data() {
    return {
      topTV: {},
      topMovie: {},
    };
  },
  methods: {
    trendLoad() {
      trending("tv", this.$i18n.locale).then((res) => {
        this.topTV = res.data.results;
      });
      trending("movie", this.$i18n.locale).then((res) => {
        this.topMovie = res.data.results;
      });
    },
  },
  mounted() {
    this.topTV = {};
    this.topMovie = {};
    this.trendLoad();
  },
  watch: {
    "$i18n.locale": function () {
      this.topTV = {};
      this.topMovie = {};
      this.trendLoad();
    },
  },
};
</script>
