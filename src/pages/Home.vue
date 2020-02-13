<template>
  <b-container fluid style="padding: 0;">
    <b-container fluid class="box-sourch">
      <div class="box-search">
        <b-row class="row-home mt-6">
          <span class="span-fourth">Qual o</span>
          <span class="span-fourth" style="color: #E5695A;">&nbsp;médico&nbsp;</span>
          <span class="span-fourth">você precisa consultar?</span>
        </b-row>
        <b-row class="consulta row-home">
          <div class="doctor">
            <b-form-input
              autocomplete="off"
              v-model="specialtiesSelect"
              class="form-control"
              list="input-list"
              id="input-with-list"
            ></b-form-input>
            <b-form-datalist class="form-recommendation" id="input-list" :options="dataListOptions"></b-form-datalist>
          </div>
          <b-button class="btn-primary agendar" @click="agendar()">Agendar agora</b-button>
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
      <div class="carrousel">
        <div class="botao-esquerdo">
          <img class="button-icon" src="../images/botao-esquerdo.svg" alt />
        </div>
        <div class="center-box">
          <div class="center-img">
            <img class="final-imagem" src="../images/velho.svg" alt />
          </div>
          <div class="center-text">
            <span
              class="span-secondary class text-box"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id luctus massa. Curabitur luctus orci ac quam fermentum mattis. Nullam in tortor placerat, gravida massa vel, lacinia arcu.</span>
          </div>
        </div>
        <div class="botao-direito">
          <img class="button-icon" src="../images/botao-direito.svg" alt />
        </div>
      </div>
      <div class="compartilhe-box">
        <span class="span-primary compartilhe-text">Compartilhe a sua experiência com a gente</span>
      </div>
    </div>
    <div class="testecarrousel"></div>
  </b-container>
</template>

<script>
import { listSpecialties } from "../api/specialties";
export default {
  data() {
    return {
      dataListOptions: [],
      specialties: [],
      specialtiesSelect: ""
    };
  },
  methods: {
    agendar() {
      window.location.href = "/Clinic&Especialitis=";
    }
  },
  async mounted() {
    const reponse = await listSpecialties();
    if (reponse.ok) {
      this.specialties = (await reponse.json()).map(spe => [spe.id, spe.name]);
      this.dataListOptions = this.specialties.map(spe => (spe[1]));
    } else {
      // eslint-disable-next-line no-console
      console.log("ERRO GET SPECIALTIES");
    }
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

.row-home {
  display: flex;
}

.row-home > * {
  display: flex;
}

.form-control {
  border-color: transparent;
  width: 100%;
  height: 100%;
  border: none;
  outline: 0;
  font-size: 1.5vw;
  color: #069999;
}

.form-control:focus,
.form-control:active {
  font-size: 1.5vw;
  color: #069999;
  border: none;
  -webkit-box-shadow: none;
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
  font-size: 24px;
  padding-left: 5%;
  padding-right: 5%;
  background: #ffffff;
  border-radius: 60px;
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
  flex-direction: column;
  display: flex;
  height: 40vw;
  justify-content: center;
}
.carrousel {
  display: flex;
}
.center-box {
  display: flex;
  width: 70%;
  justify-content: center;
}

.center-img {
  align-content: center;
  display: grid;
  width: 40%;
  padding-left: 10%;
}

.center-text {
  display: grid;
  width: 50%;
  padding-left: 3%;
  margin-right: 10%;
  align-content: center;
}

.final-imagem {
  display: flex;
  width: 100%;
  /* USAR FUTURAMENTE PARA TRABALHAR COM A IMAGEM*/
  /* border-radius: 25%; */
}

.botao-esquerdo {
  display: flex;
  margin-left: 15%;
}

.botao-direito {
  display: flex;
  margin-right: 15%;
}

.compartilhe-box {
  display: flex;
  padding-top: 3%;
  justify-content: center;
  align-content: center;
}

.compartilhe-text {
  font-size: 1.1vw;
  text-decoration-line: underline;
}

.button-icon {
  width: 100%;
}
</style>

