<template>
  <v-app>
    <div class="div-principal">
      <Header />
      <router-view></router-view>
      <Footer />
      <!-- <Carousel /> -->
    </div>
  </v-app>
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
* {
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
}

.span-primary {
  font-style: normal;
  font-weight: normal;
  font-size: 1.5vw;
  color: #e5695a;
}
.link-primary {
  font-style: normal;
  font-weight: normal;
  font-size: 1.5vw;
}

.span-secondary {
  font-style: normal;
  font-weight: normal;
  font-size: 1.1vw;
  color: #069999;
}

.span-tertiary {
  font-style: normal;
  font-weight: normal;
  font-size: 0.7vw;
  text-decoration-line: underline;
  color: #99cdcd;
}

.span-fourth {
  font-style: normal;
  font-weight: bold;
  font-size: 3.6vw;
  color: #069999;
}

.btn-primary {
  background: rgb(229, 105, 90);
  border-radius: 60px;
  font-size: 1.3vw;
  font-weight: bold;
  color: #ffffff;
  border-color: transparent;
  justify-content: center;
}

.btn-secondary {
  background: rgb(229, 105, 90);
  border-radius: 60px;
  font-size: 1.3vw;
  font-weight: bold;
  color: #ffffff;
  border-color: transparent;
  justify-content: center;
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
