<template>
  <div class="div-principal">
    <div class="pt-2">
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

/** @keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

.slide-enter-active {
  animation: slide-in 0.3s ease;
}

.slide-leave-active {
  animation: slide-out 0.3s ease;
}
*/
</style>
