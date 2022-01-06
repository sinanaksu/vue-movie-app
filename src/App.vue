<template>
  <div id="app" v-bind:class="{ dark: this.$store.state.darkmode }">
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
};
</script>
