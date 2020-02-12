<template>
  <b-container class="footer" fluid>
    <div style="display: flex; flex-direction: column;">
      <b-button
        style=" width: 28%; border-color:white;margin-left: 7%; margin-top: 5%; padding-top: 1%; padding-bottom: 1%; padding-left: 2%; padding-right: 2%;"
      >Torne-se uma clínica PlusClin</b-button>
      <img style="width: 15%; margin-left: 7%; margin-top: 4%;" src="../images/pluscin.svg" alt />
      <div style="display: flex" class="links">
        <div style="margin-left: 7%;display:flex; flex-direction: column;" class="links-esquerdo">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
        <div style="margin-left: 7%;display:flex; flex-direction: column;" class="links-direito">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "main-footer",
  components: {}
};
</script>

<style scoped>
.footer {
  height: 35vw;
  background-color: #e5695a;
}
</style>

