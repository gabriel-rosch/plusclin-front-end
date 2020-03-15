<template>
    <b-modal id="modal-login" hide-footer>
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
      <div style="padding: 2vw;" class="d-flex flex-column">
        <div class="d-flex" style="height: 7vw">
          <b-button class="d-flex rounded-pill mb-3 tertiary-class">
            <div class="d-flex">
              <img class="d-flex justify-center social" src="../images/facebook-orig.svg" />
              <span class="d-flex social-text">Conectar com meu Facebook</span>
            </div>
          </b-button>
        </div>
        <b-form-group
          class="secondary-class"
          label-cols-lg="12"
          label-class="pl-4"
          style=" font-size: 1.3vw;"
          label="E-mail"
        >
          <b-form-input
            class="rounded-pill px-4"
            id="email"
            placeholder="Digite seu email aqui"
            type="text"
            v-model="email"
            style="height: 9vw; border: 1.2px solid #069999"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="secondary-class"
          label-cols-lg="12"
          label-class="pl-4"
          style=" font-size: 1.3vw;"
          label="Senha"
        >
          <b-form-input
            class="rounded-pill px-4"
            placeholder="Digite sua senha aqui"
            type="password"
            v-model="password"
            style="height: 9vw; border: 1.2px solid #069999"
          ></b-form-input>
        </b-form-group>
        <b-row class="m-0">
          <b-col cols="8" class="align-self-center">
            <a
              @click="notAccount"
              style="font-size: 1.1vw; color: #069999"
              class="font-weight-bold float-right notAccount"
            >Não possui uma conta</a>
          </b-col>
          <b-col class="px-8" cols="4">
            <b-button
              @click="login"
              class="tertiary-class w-100 rounded-pill"
              style="font-size: 1.3vw;"
            >Login</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
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
        this.$parent.fillSession();
        this.$bvModal.hide("modal-login");
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

.social {
  height: 3%;
}

.social-text {
  font-size: 1.5vw;
}
</style>



<!--
         <b-row id="facebook" class="d-flex flex-column h-100 w-100 box-social m-0">
         <b-button class="d-flex rounded-pill w-100 mb-3 tertiary-class" style="height: 4vw;">
           <b-col cols="2">
             <img style="width: 7vw" class="social" src="../images/facebook-orig.svg" />
           </b-col>
           <b-col cols="10" class="d-flex pl-0 align-self-center social-text" style="font-size: 3.5vw;">
             <span>Conectar com meu Facebook</span>
           </b-col>
         </b-button>
        </b-row>
        <b-row id="google" class="d-flex flex-column h-100 w-100 box-social m-0">
         <b-button class="d-flex rounded-pill w-100 mb-3 tertiary-class" style="height: 4vw;">
           <b-col cols="2">
             <img style="color: red;" src="../images/google-orig.svg" />
           </b-col>
           <b-col cols="10" class="d-flex pl-0 align-self-center" style="font-size: 1.3vw;">
             <span>Conectar com minha conta Google</span>
           </b-col>
         </b-button>
        </b-row>
        -->