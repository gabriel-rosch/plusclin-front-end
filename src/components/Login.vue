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
        <center>Login ou senha incorretos!</center>
      </b-alert>
      <template v-slot:modal-title>Login</template>
      <b-container class="d-flex px-5 flex-column">
        <b-row id="facebook" class="d-flex flex-column h-100 w-100 box-social m-0">
          <b-button class="d-flex rounded-pill w-100 mb-3" style="height: 4rem;">
            <b-col cols="2">
              <img src="../images/facebook-orig.svg" />
            </b-col>
            <b-col cols="10" class="d-flex pl-0 align-self-center" style="font-size: 1.3rem;">
              <span>Conectar com meu Facebook</span>
            </b-col>
          </b-button>
        </b-row>
        <b-row id="google" class="d-flex flex-column h-100 w-100 box-social m-0">
          <b-button class="d-flex rounded-pill w-100 mb-3" style="height: 4rem;">
            <b-col cols="2">
              <img src="../images/google-orig.svg" />
            </b-col>
            <b-col cols="10" class="d-flex pl-0 align-self-center" style="font-size: 1.3rem;">
              <span>Conectar com minha conta Google</span>
            </b-col>
          </b-button>
        </b-row>
        <b-form-group
          class="span-secondary"
          label-cols-lg="12"
          label-class="pl-4"
          label-size="mg"
          label="E-mail"
        >
          <b-form-input
            class="rounded-pill"
            id="email"
            placeholder="Digite seu email aqui"
            type="text"
            v-model="email"
            style="height: 4rem; border: 1.2px solid #069999"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="span-secondary"
          label-cols-lg="12"
          label-class="pl-4"
          label-size="mg"
          label="Senha"
        >
          <b-form-input
            class="rounded-pill"
            placeholder="Digite sua senha aqui"
            type="text"
            v-model="password"
            style="height: 4rem; border: 1.2px solid #069999"
          ></b-form-input>
        </b-form-group>
        <b-row class="m-0">
          <b-col cols="8" class="align-self-center">
            <a
              href="localhost"
              style="font-size: 1.1rem; color: #069999"
              class="font-weight-bold float-right"
            >Não possui uma conta</a>
          </b-col>
          <b-col class="px-8" cols="4">
            <b-button @click="login" class="w-100 rounded-pill" style="font-size: 1.3rem;">Login</b-button>
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

        localStorage.setItem('userName', session.user.name);

        this.$parent.fillSession();
        this.$bvModal.hide("modal-login");
      } else {
        this.showErrorAlert();
      }
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
</style>