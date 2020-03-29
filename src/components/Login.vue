<template>
  <b-container class="d-flex" fluid>
    <b-modal class="d-flex" id="modal-login" hide-footer title="BootstrapVue">
      <b-alert
        variant="danger"
        :show="dismissCountDown"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
        dismissible
      >
        <center>{{erro}}!</center>
      </b-alert>
      <template v-slot:modal-title>Login</template>
      <b-container class="d-flex px-5 flex-column">
        <b-row id="facebook" class="d-flex flex-column box-social m-0">
          <b-button class="d-flex rounded-pill mb-3 tertiary-class" style="height: 4rem;">
            <b-col cols="2">
              <img src="../images/facebook-orig.svg" />
            </b-col>
            <b-col cols="10" class="d-flex pl-0 align-self-center" style="font-size: 100%;">
              <span>Conectar com meu Facebook</span>
            </b-col>
          </b-button>
        </b-row>
        <b-row id="google" class="d-flex flex-column box-social m-0">
          <b-button class="d-flex rounded-pill mb-3 tertiary-class" style="height: 4rem;">
            <b-col cols="2">
              <img src="../images/google-orig.svg" />
            </b-col>
            <b-col cols="10" class="d-flex pl-0 align-self-center" style="font-size: 100%;">
              <span>Conectar com minha conta Google</span>
            </b-col>
          </b-button>
        </b-row>
        <b-form-group
          class="tertiary-class"
          label-cols-lg="12"
          label-class="pl-4"
          style=" font-size: 1.3rem;"
          label="E-mail"
        >
          <b-form-input
            class="rounded-pill px-4"
            id="email"
            placeholder="Digite seu email aqui"
            type="text"
            v-model="email"
            style="height: 4rem; border: 1.2px solid #069999"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="tertiary-class"
          label-cols-lg="12"
          label-class="pl-4"
          style=" font-size: 1.3rem;"
          label="Senha"
        >
          <b-form-input
            class="rounded-pill px-4"
            placeholder="Digite sua senha aqui"
            type="password"
            v-model="password"
            style="height: 4rem; border: 1.2px solid #069999"
          ></b-form-input>
        </b-form-group>
        <b-row class="m-0">
          <b-col cols="8" class="align-self-center">
            <a
              @click="notAccount"
              style="font-size: 1.1rem; color: #069999"
              class="font-weight-bold float-right notAccount"
            >Não possui uma conta</a>
          </b-col>
          <b-col class="px-8" cols="4">
            <b-button
              @click="login"
              class="w-100 rounded-pill tertiary-class"
              style="font-size: 1.3rem;"
            >Login</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </b-container>
</template>

<script>
import { create } from "../api/session";

export default {
  data() {
    return {
      password: "",
      email: "",
      erro: "",
      dismissSecs: 7,
      dismissCountDown: 0
    };
  },
  methods: {
    async login() {
      const response = await create({
        password: this.password,
        email: this.email
      });
      if (response.ok) {
        const session = await response.json();
        localStorage.setItem("userName", session.user.name);
        localStorage.setItem("provider", session.user.provider);
        localStorage.setItem("token", session.token);
        this.$parent.fillSession();
        this.$bvModal.hide("modal-login");
        if (session.user.provider) {
           window.location.href = "/MinhaAgenda";
        }
      } else {
        const session = await response.json();
        this.erro = session.error;
        this.showErrorAlert();
      }
    },
    async notAccount() {
      this.$bvModal.hide("modal-login");
      this.$bvModal.show("modal-register");
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showErrorAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>

<style>
.notAccount:hover {
  cursor: pointer;
}
</style>