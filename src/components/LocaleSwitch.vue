<template>
  <span role="button" @click="switchRun()">
    <img class="flag" :src="switchFlag"  />
  </span>
</template>
<script>
import gb from "../assets/locales/gb.svg";
import tr from "../assets/locales/tr.svg";
export default {
  name: "LocaleSwitch",
  methods: {
    switchRun() {
      this.$i18n.locale == "en"
        ? (this.$i18n.locale = "tr")
        : (this.$i18n.locale = "en");
    },
  },
  computed: {
    switchFlag: function () {
      return this.$i18n.locale == "en" ? tr : gb;
    },
  },
};
</script>
