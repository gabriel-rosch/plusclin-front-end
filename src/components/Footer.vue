<template>
  <b-container class="footer" fluid>
    <div class="d-flex flex-column">
      <b-button class="tertiary-class becomeClinic rounded-pill border-primary" style="border: 2px solid white">Torne-se uma clínica PlusClin</b-button>
      <div>
        <img class="logo d-flex justift-start" src="../images/pluscin.svg" alt />
      </div>
      <div style="margin-top: 2%; display: flex" class="box-links">
        <div style="display:flex; flex-direction: column;" class="links-esquerdo">
          <span class="links">Sobre nós</span>
          <span class="links">Central de Ajuda</span>
          <span class="links">Fale Conosco</span>
          <span class="links">Cartão Plusclin</span>
        </div>
        <div style="display:flex; flex-direction: column;" class="links-direito">
          <span class="links">Especialistas</span>
          <span class="links">Especialidades</span>
          <span class="links">Motivo da sua consulta</span>
        </div>
      </div>
      <div style="display: flex;" class="redes-sociais">
        <span style class="discounts">discounts e novidades nas nossas redes</span>
        <img class="social" src="../images/instagram.svg" alt />
        <img class="social" src="../images/facebook.svg" alt />
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
  height: 40vw;
  padding-left: 5vw;
  background-color: #e5695a;
}

.becomeClinic {
  font-size: 1.7vw;
  border-color: white;
  margin-top: 4.5vw;
  width: 31vw;
  line-height: 2.5vw;
}

.logo {
  margin-top: 2vw;
  min-width: 12vw;
  max-width: 12vw;
  min-height: 6vw;
  max-height: 6vw;
}

.links {
  width: 100%;
  font-size: 1.5vw;
  margin-right: 5vw;
  line-height: 3.5vw;
  text-decoration-line: underline;
  color: #ffffff;
}

.discounts {
  font-style: normal;
  font-weight: normal;
  font-size: 1.3vw;
  line-height: 7vw;
  color: #fed1cb;
}

.social {
  width: 5%;
  margin-left: 2%;
}
</style>

