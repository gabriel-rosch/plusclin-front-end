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
          <span class="links">Cartão Plusclin</span>
        </div>
        <div style="margin-left: 7%;display:flex; flex-direction: column;" class="links-direito">
          <span class="links">Especialistas</span>
          <span class="links">Especialidades</span>
          <span class="links">Motivo da sua consulta</span>
        </div>
      </div>
      <div style="display: flex;" class="redes-sociais">
        <span style="margin-left: 7%;" class="descontos">Descontos e novidades nas nossas redes</span>
        <img style="width: 5%;" src="../images/instagram.svg" alt />
        <img style="width: 5%; margin-left: 2%;" src="../images/facebook.svg" alt />
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
  height: 45vw;
  background-color: #e5695a;
}


.links {
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5vw;
  line-height: 3vw;
  text-decoration-line: underline;
  color: #ffffff;
}

.descontos {
  width: 28%;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3vw;
  line-height: 7vw;
  color: #fed1cb;
}
</style>

