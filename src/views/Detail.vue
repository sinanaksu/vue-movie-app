<template>
  <div>
  <div class="row text-white mt-n3 pe-0 ps-0 detail-section">
    <img :src="imgFullURL(item.poster_path, 1000, 450)" class="backimg" />
    <div class="col">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-3 text-center">
            <img v-if="item.poster_path"
              :src="imgFullURL(item.poster_path, 300, 450)"
              class="rounded-15 img-fluid"
            />
          </div>
          <div class="col-sm-12 col-md-9">
            <h2>
              {{ item.original_title }}
              <small class="text-muted">({{dateConvert(item.first_air_date? item.first_air_date: item.release_date,1)}})</small>
            </h2>

            <div class="row">
              <div class="col-sm-12 col-md-1">
            <div class="img-vote">{{ item.vote_average }}</div>
              </div>
              <div class="col" v-if="item.genres">
                <span v-for="(i, index) of item.genres" :key="index" class="me-4 fw-bold badge bg-secondary">{{i.name}}</span>

              </div>
            </div>
            <div class="text-muted mt-3">{{item.tagline}}</div>
            <div class="mt-3">{{item.overview}}</div>

          </div>
        </div>
      </div>
    </div>
  </div>

<div class="container">
      <h3 class="border-0 pb-2 ps-3 pt-2 mt-4">
        <span>{{ $t("cast") }}</span>
      </h3>
      <div v-if="casts.length">
        <PeopleSlider :items="casts" />
      </div>
</div>


<div class="container">
      <h3 class="border-0 pb-2 ps-3 pt-2 mt-4">
        <span>{{ $t("crew") }}</span>
      </h3>
      <div v-if="crews.length">
        <PeopleSlider :items="crews" />
      </div>
</div>
  </div>
</template>

<script>
import { detail, credits } from "../services/detail";
import { utils } from "../utils/";
import PeopleSlider from "../components/PeopleSlider.vue";

export default {
  name: "Detail",
  data() {
    return {
      item: {},
      crews: {},
      casts: {},
    };
  },
  mixins: [utils],
  components: {
    PeopleSlider,
  },

  mounted() {
    detail(this.$route.params.id, this.$i18n.locale).then((res) => {
      this.item = res.data;
    });
    credits(this.$route.params.id, this.$i18n.locale).then((res) => {
      this.crews = res.data.crew;
      this.casts = res.data.cast;
    });
  },
  watch: {
    "$i18n.locale": function () {
    detail(this.$route.params.id, this.$i18n.locale).then((res) => {
      this.item = res.data;
    });
    },
  },
};
</script>
<style scoped></style>
