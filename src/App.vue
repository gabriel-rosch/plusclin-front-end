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
  created() {}
};
</script>

<style>
@import "./styles/default-util.css";
@import "./styles/buttons-util.css";
@import "./styles/spans-util.css";
@import "./styles/border-util.css";

* {
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
}
.title-clinic-doctor {
  font-size: 3.3vw;
  font-family: "Asap Condensed", sans-serif;
  text-decoration-line: underline;
}
.link-primary {
  font-style: normal;
  font-weight: normal;
  font-size: 1.5vw;
}

.div-principal {
  height: 100%;
  background-image: url(images/wallpaper.png);
  background-repeat: no-repeat;
  background-size: 100%;
}

</style>
