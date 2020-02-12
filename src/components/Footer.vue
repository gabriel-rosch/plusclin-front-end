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
        <div class="redes-sociais">
          <span class="descontos">Especialistas</span>
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
  font-style: normal;
  font-weight: normal;
  font-size: 1.5vw;
  line-height: 3vw;
  text-decoration-line: underline;
  color: #ffffff;
}

.descontos {
width: 319px;
height: 23px;
left: 121.5px;
bottom: 216.5px;

font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;

color: #FED1CB;
}
</style>

