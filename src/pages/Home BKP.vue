<template>
  <div style="margin-left: 10vw;">
    <div>
      <div>
        <b-row class="m-0" style="padding-top: 21.5vw">
          <span class="fourth-class">Qual o</span>
          <span class="six-class">&nbsp;médico&nbsp;</span>
          <span class="fourth-class">você precisa consultar?</span>
        </b-row>
        <b-row class="p-0 m-0">
          <div class="d-flex" style="width: 41vw; height: 5vw">
            <b-form-input
              autocomplete="off"
              v-model="specialtiesSelect"
              style="width: 100%; height: 100%; padding-left: 2vw;padding-right: 2vw;"
              class="rounded-pill"
              list="input-list"
              id="input-with-list"
            ></b-form-input>
            <b-form-datalist id="input-list" :options="dataListOptions"></b-form-datalist>
          </div>
          <div class="p0 m-0" style="height:5vw;">
            <b-button
              type="submit"
              style="width: 13vw; height: 5vw !important; font-size: 1.5vw; margin-left: 1.5vw;"
              :to="`/especialidade/${specialtiesSelect}`"
              class="d-flex rounded-pill align-items-center primary-class p-0"
            >Agendar agora</b-button>
          </div>
        </b-row>
      </div>

      <!-- -->
      <div class="box-information">
        <div class="wallpaper">
          <div class="espacamento" />
          <div class="box1">
            <div class="header-box">
              <span
                class="fourth-class title-box"
              >Consultas particulares no preço que você pode pagar</span>
              <div class="d-flex box px-5">
                <img class="icon" src="../images/card.svg" alt />
                <span
                  class="secondary-class class text-box"
                  style="font-size: 1.4vw;"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id luctus massa. Curabitur luctus orci ac quam fermentum mattis. Nullam in tortor placerat, gravida massa vel, lacinia arcu.</span>
              </div>
            </div>
          </div>
          <div class="box2">
            <div class="header-box">
              <span
                class="fourth-class title-box"
              >Consultas particulares no preço que você pode pagar</span>
              <div class="d-flex box px-5">
                <img class="icon" src="../images/card.svg" alt />
                <span
                  class="secondary-class class text-box"
                  style="font-size: 1.4vw;"
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
    </div>
  </div>
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

.box-information {
  height: 82vw;
  padding-top: 25.2vw;
  margin-bottom: 23vw;
}

.icon {
  width: 25vw;
  height: 8vw;
}

.espacamento {
  height: 2.5vw;
}

.wallpaper {
  margin-top: 4.5vw;
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

