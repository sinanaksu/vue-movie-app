<template>
  <div class="container mt-3">

    <h3 class="border-0 p-2 ps-3 pt-2">
      <span>{{ $t("search") }}: {{ $route.params.q }}</span>
    </h3>
    <div class="border-0 p-2 ps-3 pt-2" v-if="resultCount == 0">
      {{ $t("search-not-result") }}
    </div>
    <div v-if="results.length || resultCount == 0">
      <div class="row">
      <div class="col-sm-6 col-md-3" v-for="(item, index) of results" :key="index">
        <router-link
          :to="getSeoURL(item.name ? item.name : item.original_title, item.id)"
        >
          <div class="card shadow-sm m-2 border-0">
            <img :src="imgFullURL(item.poster_path)" class="rounded-3" />
            <span class="card-vote"> {{ item.vote_average }}</span>
            <div class="card-body pt-4 ps-2 pe-2 pb-1">
              <p class="card-text fw-bold text-truncate pb-0 mb-1">
                {{ item.name ? item.name : item.original_title }}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">{{
                  dateConvert(
                    item.first_air_date
                      ? item.first_air_date
                      : item.release_date
                  )
                }}</small>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      </div>
    </div>
    <div v-else class="d-flex justify-content-center">
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script>
import { search } from "../services/search";
import { utils } from "../utils/";
export default {
  name: "App",
  data() {
    return {
      results: {},
      resultCount: 1
    };
  },
  mixins: [utils],
  methods: {
    searchLoad() {
      search(this.$route.params.q, this.$i18n.locale).then((res) => {
        this.results = res.data.results;
        this.resultCount = res.data.results.length;
      });
    },
      getSeoURL(title, id) {
        return "/detail/" + this.toSeoUrl(title) + "/" + id;
      },
  },
  mounted() {
    this.results = {};
    this.searchLoad();
  },
  watch: {
    "$i18n.locale": function () {
      this.results = {};
      this.searchLoad();
    },
    "$route.params.q": function () {
      this.results = {};
      this.searchLoad();
    },
  },
};
</script>
