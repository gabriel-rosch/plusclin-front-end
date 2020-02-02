<template>
  <v-app>
    <div class="div-principal">
      <Header/>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  components: { Header },
  created() {}
};
</script>

<style>
* {
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
}

.div-principal {
  height: 100%;
  background-image: url(images/wallpaper.png);
  background-repeat: no-repeat;
  background-size: 100%;
}

@keyframes slide-in {
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
</style>
