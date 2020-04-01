<template>
  <div class="div-principal">
    <div style="padding-top: 1%;">
      <Header />
    </div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";

export default {
  components: {
    Footer,
    Header
  },
  created() {},
  methods: {
  }
};
</script>

<style>
@import "./styles/default-util.css";
@import "./styles/buttons-util.css";
@import "./styles/spans-util.css";
@import "./styles/border-util.css";

* {
  font-family: "Asap Condensed", sans-serif;
  font-style: normal;
  font-weight: normal;

}

.div-principal {
  height: 100%;
  background-image: url(images/wallpaper.png);
  background-repeat: no-repeat;
  background-size: 100%;
}

</style>
