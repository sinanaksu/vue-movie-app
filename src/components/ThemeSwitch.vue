<template>
  <span role="button" @click="switchRun()">
    <span v-html="switchTitle"></span>
  </span>
</template>

<script>
export default {
  name: "ThemeSwitch",
  methods: {
    switchRun() {
      this.$store.state.darkmode
        ? (this.$store.state.darkmode = false)
        : (this.$store.state.darkmode = true);
    },
  },
  computed: {
    switchTitle: function () {
      return this.$store.state.darkmode
        ? this.$t("lightmode") + ' <i class="bi bi-moon"></i>'
        : this.$t("darkmode") + ' <i class="bi bi-moon-fill"></i>';
    },
  },
};
</script>
