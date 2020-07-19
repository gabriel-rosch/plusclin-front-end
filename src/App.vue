<template>
  <div class="root">
    <Header />
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
  * {
  font-family: 'Asap', sans-serif;
  font-style: normal;
  font-weight: normal;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  min-width: 340px;
}
input, button {
  outline: 0;
}

.root {
  height: 100%;
  background-image: url(images/wallpaper.png);
  background-repeat: no-repeat;
  background-size: 100%;
}

</style>
