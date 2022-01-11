<template>
  <div>
    <div class="container-fluid bg-sub-bar p-1 mb-0">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 text-end">
            <ThemeSwitch class="me-5" />
            <LocaleSwitch />
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg bg-nav navbar-light shadow mb-3">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img :src="useLogo" width="150" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbars1"
          aria-controls="navbars1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbars1">
          <form class="ms-lg-5 row g-2">
            <div class="col-auto">
              <input
                class="form-control form-control-sm"
                type="text"
                :placeholder="$t('search_desc')"
                v-model.trim="searchQuery"
              />
            </div>
            <div class="col-auto">
              <button
                type="button"
                @click="search(searchQuery)"
                class="btn btn-primary btn-sm"
              >
                {{ $t("search") }}
              </button>
            </div>
          </form>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/">{{
                $t("home")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/about">{{
                $t("about")
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import ThemeSwitch from "./ThemeSwitch.vue";
import LocaleSwitch from "./LocaleSwitch.vue";
import LogoWhite from "../assets/logo-white.svg";
import LogoBlack from "../assets/logo.svg";
import { mapState } from "vuex";
import { utils } from "../utils/";
export default {
  name: "Navbar",
  data() {
    return {
      useLogo: LogoBlack,
      searchQuery: "",
    };
  },
  computed: {
    ...mapState(["darkmode"]),
  },
  mixins: [utils],
  components: {
    ThemeSwitch,
    LocaleSwitch,
  },
  methods: {
    search(qu) {
      if(qu != '') {
      this.$router.push({ path: "/search/" + qu.toLowerCase().replace(" ","-")});
      } else {
        alert(this.$i18n.t('search-empty'));
      }
    },
  },
  watch: {
    darkmode: function () {
      if (this.darkmode) {
        this.useLogo = LogoWhite;
      } else {
        this.useLogo = LogoBlack;
      }
    },
  },
};
</script>
