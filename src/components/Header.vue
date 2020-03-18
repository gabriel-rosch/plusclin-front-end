<template>
  <b-container fluid class="m-0 p-0">
    <Login />
    <Register />
    <div class="d-flex">
      <div class="d-flex c1">
        <img class="image-logo" src="../images/logo.svg" alt />
      </div>
      <div class="d-flex c2">
        <img src="../images/localization.svg" alt />
        <div class="localization">
          <span class="secondary-class">Palhoça - SC</span>
          <span class="tertiary-class">Essa não é minha localização</span>
        </div>
      </div>
      <div class="d-flex c3">
        <template v-if="!name">
          <b-button
            class="rounded-pill primary-class cadastrar"
            v-b-modal.modal-register
          >Cadastrar-se {{userName}}</b-button>
          <b-button v-b-modal.modal-login class="rounded-pill primary-class login">Login</b-button>
        </template>
        <template v-else>
          <div class="rounded-pill" style="width: 2.5vw; height: 2.5vw;">
            <b-icon-person-fill style="color: e5695a; width: 2.5vw; height: 2.5vw;"></b-icon-person-fill>
          </div>
          <span style="font-size: 1.2vw;" class="primary-class sair">Oi, {{this.userName}}!</span>
          <b-button
            style="height: 50px"
            class="rounded-pill primary-class px-4"
            @click="clearSession()"
          >Sair</b-button>
        </template>
      </div>
    </div>
  </b-container>
</template>

<script>
import Login from "../components/Login";
import Register from "../components/Register";

export default {
  components: {
    Login,
    Register
  },
  data() {
    return {
      name: ""
    };
  },
  name: "main-header",
  methods: {
    fillSession() {
      this.name = localStorage.getItem("userName");
    },

    clearSession() {
      localStorage.removeItem("userName");
      this.name = "";
      this.fillSession();
    }
  },
  mounted() {
    this.name = localStorage.getItem("userName");
  },
  computed: {
    userName() {
      return this.name;
    }
  }
};
</script>

<style scoped>
.c1,
.c2,
.c3 {
  display: flex;
  align-items: center;
}

.c1 {
  width: 27vw;
  padding-left: 3vw;
}

.c2 {
  width: 35vw;
  padding-left: 9vw;
}

.c3 {
  width: 15vw;
}

.c1 img {
  min-width: 27vw;
  max-width: 27vw;
}
.c2 img {
  margin-right: 1vw;
  min-width: 2vw;
  max-width: 2vw;
}

.image-logo:hover {
  cursor: pointer;
}

.localization {
  display: grid;
}

.btn.cadastrar {
  height: 4vw;
  min-width: 10vw;
  max-width: 10vw;
  font-size: 1.3vw;
  padding: 0;
}

.btn.login {
  height: 4vw;
  min-width: 10vw;
  max-width: 10vw;
  font-size: 1.3vw;
  padding: 0;
  margin-left: 1vw;
  margin-right: 2vw;
}

.btn-login:hover {
  background: rgba(205, 205, 205, 0.2);
  color: rgb(255, 255, 255) !important;
  background-color: rgba(229, 105, 90, 1) !important;
  border-color: rgba(215, 92, 90, 0.1);
}

.btn.sair {
  height: 4vw;
  width: 10vw;
  font-size: 1.3vw;
  padding: 0;
  margin-right: 5vw;
  margin-left: 1vw;
}
</style>

