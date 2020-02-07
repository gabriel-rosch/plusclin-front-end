<template>
  <b-container fluid style="padding: 0;">
    <main-header />
    <b-container fluid class="box-sourch">
      <div class="box-search">
        <b-row class="row mt-6">
          <span class="span-fourth">Qual o</span>
          <span class="span-fourth" style="color: #E5695A;">&nbsp;médico&nbsp;</span>
          <span class="span-fourth">você precisa consultar?</span>
        </b-row>
        <b-row class="consulta row">
          <div class="doctor">
            <input class="medico span-secondary" value="TESTE" />
          </div>
          <b-button class="btn-primary agendar">Agendar agora</b-button>
        </b-row>
      </div>
    </b-container>
    <div class="box-information">
      <div class="wallpaper">
        <div class="espacamento" />
        <div class="box1">
          <div class="header-box">
            <span class="span-fourth title-box">Consultas particulares no preço que você pode pagar</span>
            <div class="box">
              <img class="icon" src="../images/card.svg" alt />
              <span
                class="span-secondary class text-box"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id luctus massa. Curabitur luctus orci ac quam fermentum mattis. Nullam in tortor placerat, gravida massa vel, lacinia arcu.</span>
            </div>
          </div>
        </div>
        <div class="box2">
          <div class="header-box">
            <span class="span-fourth title-box">Consultas particulares no preço que você pode pagar</span>
            <div class="box">
              <img class="icon" src="../images/card.svg" alt />
              <span
                class="span-secondary class text-box"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id luctus massa. Curabitur luctus orci ac quam fermentum mattis. Nullam in tortor placerat, gravida massa vel, lacinia arcu.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="final-box">
      <img class="button-icon" src="../images/botao-esquerdo.svg" alt />
      <img class="button-icon" src="../images/botao-direito.svg" alt />
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      options: ["Apple"]
    };
  }
};
</script>

<style>
.main-page {
  background-color: aqua;
}

.mt-6 {
  padding-top: 19% !important;
}

.row {
  display: flex;
}

.row > * {
  display: flex;
}

.box-search {
  padding-left: 10%;
}
.consulta {
  display: flex;
  height: 6vw;
}

.doctor {
  width: 48%;
  height: 100%;
  font-size: 24;
  padding-left: 5%;
  padding-right: 5%;
  background: #ffffff;
  border-radius: 60px;
}

.medico:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

.agendar {
  margin-left: 2%;
  width: 23%;
  justify-content: center;
  font-size: 1.7vw;
  height: 100%;
}

/* PARTE INFERIOR DA TELA ABAIXO */

.box-information {
  height: 82.8vw;
  width: 100%;
  padding-top: 20%;
  margin-bottom: 25%;
}

.espacamento {
  /* background-color: pink; */
  width: 100%;
  height: 5%;
}

.wallpaper {
  z-index: 1000;
  margin-top: 5%;
  background-color: #99cdcd;
  width: 92%;
  margin-left: 8%;
  height: 132%;
}

.box1 {
  background-color: #ffffff;
  width: 90%;
  margin-left: 10%;
  height: 45%;
  margin-top: -6% !important;
}

.box2 {
  background-color: #ffffff;
  width: 88.7%;
  margin-top: 5%;
  margin-left: -8.7%;
  padding-left: 10%;
  height: 45%;
}

.header-box {
  display: grid;
}

.title-box {
  padding: 5% 35% 5% 10%;
  font-size: 3vw;
}

.box {
  display: flex;
  padding-left: 5%;
  padding-right: 15%;
}

.text-box {
  font-size: 1.4vw;
}

.icon {
  min-width: 20%;
  margin-right: 5%;
  max-width: 20%;
}

.final-box {
  display: flex;
  background-color: blue;
  height: 30vw;
}
</style>

