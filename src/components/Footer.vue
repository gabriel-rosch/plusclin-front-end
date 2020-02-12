<template>
  <b-container class="footer" fluid>
    <div style="display: flex; flex-direction: column;">
      <b-button
        style=" width: 28%; border-color:white;margin-left: 7%; margin-top: 5%; padding-top: 1%; padding-bottom: 1%; padding-left: 2%; padding-right: 2%;"
      >Torne-se uma clínica PlusClin</b-button>
      <img style="width: 15%; margin-left: 7%; margin-top: 4%;" src="../images/pluscin.svg" alt />
      <div style="margin-top: 2%; display: flex" class="box-links">
        <div style="margin-left: 7%;display:flex; flex-direction: column;" class="links-esquerdo">
          <span class="links">Sobre nós</span>
          <span class="links">Central de Ajuda</span>
          <span class="links">Fale Conosco</span>
          <span class="links">Cartão PlusClin</span>
        </div>
        <div style="margin-left: 7%;display:flex; flex-direction: column;" class="links-direito">
          <span class="links">Especialistas</span>
          <span class="links">Especialidades</span>
          <span class="links">Motivo da sua consulta</span>
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

.links {
  width: 100%;
  bottom: 408px;
  font-size: 70%;
  line-height: 21px;
  text-decoration-line: underline;
  color: #ffffff;
}
</style>

