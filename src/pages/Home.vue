<template>
  <b-container fluid style="padding: 0;">
    <b-container fluid>
      <div style="padding-left: 10%;">
        <b-row class="pt-6">
          <span class="span-fourth">Qual o</span>
          <span class="span-six px-3">médico</span>
          <span class="span-fourth">você precisa consultar?</span>
        </b-row>
        <b-row class="d-flex tm-6">
          <b-col cols="7" class="d-flex">
            <b-form-input
              autocomplete="off"
              v-model="specialtiesSelect"
              class="d-flex rounded-pill px-5"
              list="input-list"
              id="input-with-list"
            ></b-form-input>
            <b-form-datalist id="input-list" :options="dataListOptions"></b-form-datalist>
          </b-col>
          <b-col cols="2" class="d-flex px-2 ml-2">
            <b-button
              id="btnAgendar"
              type="submit"
<<<<<<< HEAD
              :to="`/especialidade/${specialtiesSelect}`" 
              class="d-flex rounded-pill align-items-center"
=======
              :to="`/${specialtiesSelect}`"
              class="btn-primary btn-agendar"
              pill
>>>>>>> a2bab2c41c01648f6a47a9de789cf86a72609cd4
            >Agendar agora</b-button>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <div class="box-information">
      <div class="wallpaper">
        <div class="espacamento" />
        <div class="box1">
          <div class="header-box">
            <span class="span-fourth title-box">Consultas particulares no preço que você pode pagar</span>
            <div class="d-flex box px-5">
              <img class="px-5 w-25 icon" src="../images/card.svg" alt />
              <span
                class="span-secondary class text-box"
                style="font-size: 1.4vw;"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id luctus massa. Curabitur luctus orci ac quam fermentum mattis. Nullam in tortor placerat, gravida massa vel, lacinia arcu.</span>
            </div>
          </div>
        </div>
        <div class="box2">
          <div class="header-box">
            <span class="span-fourth title-box">Consultas particulares no preço que você pode pagar</span>
            <div class="d-flex box px-5">
              <img class="px-5 w-50 icon" src="../images/card.svg" alt />
              <span
                style="font-size: 1.4vw;"
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
            <img class="w-100" src="../images/velho.svg" alt />
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
      <div class="shared-box">
        <span class="span-primary shared-text">Compartilhe a sua experiência com a gente</span>
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
      specialties: [],
      specialtiesSelect: ""
    };
  },
  methods: {},
  computed: {
    dataListOptions() {
      return this.specialties.map(x => [x.name]);
    }
  },
  async mounted() {
    const reponse = await listSpecialties();
    if (reponse.ok) {
      this.specialties = await reponse.json();
    } else {
      // eslint-disable-next-line no-console
      console.log("ERRO GET SPECIALTIES");
    }
  }
};
</script>

<style scoped>
.pt-6 {
  padding-top: 19% !important;
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

#btnAgendar:hover {
  color: rgba(229, 105, 90, 1);
  background-color: rgba(255, 255, 255, 0.7);
  border-color: rgba(229, 105, 90, 1);
}

.box-information {
  height: 82.8vw;
  width: 100%;
  padding-top: 20%;
  margin-bottom: 25%;
}

.espacamento {
  width: 100%;
  height: 5%;
}

.wallpaper {
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

.botao-esquerdo {
  display: flex;
  margin-left: 15%;
}

.botao-direito {
  display: flex;
  margin-right: 15%;
}

.shared-box {
  display: flex;
  padding-top: 3%;
  justify-content: center;
  align-content: center;
}

.shared-text {
  font-size: 1.1vw;
  text-decoration-line: underline;
}

</style>

