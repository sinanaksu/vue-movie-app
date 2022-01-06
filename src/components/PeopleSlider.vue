<template>
  <div class="row ps-1 pe-1">
    <VueSlickCarousel v-bind="settings">
      <div class="col" v-for="(item, index) of items" :key="index">
          <div class="card shadow-sm m-2 border-0">
            <img :src="imgFullURL(item.profile_path)" class="rounded-3" />
            <div class="card-body pt-4 ps-2 pe-2 pb-1">
              <p class="card-text fw-bold text-truncate pb-0 mb-1">
                {{ item.name ? item.name : item.original_name }}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">{{ item.character ? item.character : item.job }}</small>
              </div>
            </div>
          </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { utils } from "../utils/";

export default {
  name: "PeopleSlider",
  props: {
    items: Array,
  },
  data() {
    return {
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
              dots: true
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
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
};
</script>
