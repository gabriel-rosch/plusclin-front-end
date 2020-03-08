<template>
  <b-container fluid class="p-0">
    <Login />
    <b-row class="row">
      <b-col class="c1">
        <img class="image-logo" src="../images/logo.svg" alt />
      </b-col>
      <b-col class="c2">
        <img src="../images/localization.svg" alt />
        <div class="localization">
          <span class="span-secondary">Palhoça - SC</span>
          <span class="span-tertiary">Essa não é minha localização</span>
        </div>
      </b-col>
      <b-col class="c3">
        <template v-if="!name">
          <b-button class="rounded-pill btn-primary btn-cadastrar" @click="cadastrar()">Cadastrar-se {{userName}}</b-button>
          <b-button v-b-modal.modal-login class="rounded-pill btn-primary btn-login">Login</b-button>
        </template>
        <template v-else>
          <span class="span-primary px-5" @click="cadastrar()">Oi, {{this.userName}}!</span>
          <b-button class="rounded-pill btn-primary btn-login" @click="clearSession()">Sair</b-button>

        </template>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Login from "../components/Login";

export default {
  components: {
    Login
  },
  data() {
    return {
      name: ''
    };
  },
  name: "main-header",
  methods: {
    fillSession() {
      this.name = localStorage.getItem('userName');
    },

    clearSession() {
      localStorage.removeItem('userName');
      this.name = '';
      this.fillSession();
    }
  },
  mounted() {
    this.name = localStorage.getItem('userName');
  },
  computed:{
    userName(){
      return this.name;
    }
  }
};
</script>

<style scoped>
.c1,
.c2,
.c3 {
  margin-top: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.c1 img {
  width: 90%;
  max-width: 100%;
}
.c2 img {
  margin-right: 2%;
  width: 5%;
}

.image-logo:hover {
  cursor: pointer;
}

.localization {
  display: grid;
}

.btn-cadastrar {
  margin-right: 5%;
  height: 95%;
}

.btn-cadastrar:hover {
  border-color: rgba(229, 105, 90, 0.7) !important;
  background: rgba(205, 205, 205, 0.1);
  color: #e5695a;
  border-color: rgba(215, 92, 90, 0.1);
}
.btn-cadastrar:focus {
  background: rgba(205, 205, 205, 0.2);
  color: #e5695a;
  border-color: rgba(215, 92, 90, 0.1);
}

.btn-login {
  background-color: transparent !important;
  color: rgb(229, 105, 90) !important;
  border-color: rgba(229, 105, 90, 1) !important;
  margin-right: 5%;
  width: 25%;
  height: 95%;
}

.btn-login:hover {
  background: rgba(205, 205, 205, 0.2);
  color: rgb(255, 255, 255) !important;
  background-color: rgba(229, 105, 90, 1) !important;
  border-color: rgba(215, 92, 90, 0.1);
}
</style>

