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
              <div class="col-1">
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
  <div class="row ps-1 pe-1 ">
    <VueSlickCarousel v-bind="settings">
      <div class="col" v-for="(crew, credit_id) of casts" v-bind:key="credit_id">
          <div class="card shadow-sm m-2 border-0">
            <img :src="imgFullURL(crew.profile_path)" class="rounded-3" />
            <div class="card-body pt-4 ps-2 pe-2 pb-1">
              <p class="card-text fw-bold text-truncate pb-0 mb-1">
                {{ crew.name ? crew.name : crew.original_name }}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">{{crew.character}}</small>
              </div>
            </div>
          </div>
      </div>
    </VueSlickCarousel>
  </div>
</div>


<div class="container">
      <h3 class="border-0 pb-2 ps-3 pt-2 mt-4">
        <span>{{ $t("crew") }}</span>
      </h3>
  <div class="row ps-1 pe-1 ">
    <VueSlickCarousel v-bind="settings">
      <div class="col" v-for="(crew, credit_id) of crews" v-bind:key="credit_id">
          <div class="card shadow-sm m-2 border-0">
            <img :src="imgFullURL(crew.profile_path)" class="rounded-3" />
            <div class="card-body pt-4 ps-2 pe-2 pb-1">
              <p class="card-text fw-bold text-truncate pb-0 mb-1">
                {{ crew.name ? crew.name : crew.original_name }}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">{{crew.job}}</small>
              </div>
            </div>
          </div>
      </div>
    </VueSlickCarousel>
  </div>
</div>
  </div>
</template>

<script>
import { detail, credits } from "../services/detail";
import { utils } from "../utils/";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Detail",
  data() {
    return {
      item: {},
      crews: {},
      casts: {},
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 0,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
    };
  },
  mixins: [utils],
  components: {
    VueSlickCarousel,
  },

  mounted() {
    detail(this.$route.params.id, this.$i18n.locale).then((res) => {
      this.item = res.data;
    });
    credits(this.$route.params.id, this.$i18n.locale).then((res) => {
      this.crews = (res.data.crew).slice(0,7);
      this.casts = (res.data.cast).slice(0,7);
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
