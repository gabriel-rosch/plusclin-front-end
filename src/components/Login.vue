<template>
  <b-modal id="modal-login" hide-footer title="BootstrapVue">
    <template v-slot:modal-title>Login</template>
    <b-row class="connect">
      <img src="../images/facebook-orig.svg" alt />
      <span>Conectar com meu Facebook</span>
    </b-row>
    <b-row class="connect">
      <img src="../images/google-orig.svg" />
      <span>Conectar com a minha Conta Google</span>
    </b-row>
    <span class="insercao-span span-secondary">E-mail</span>
    <b-row class="insercao">
      <b-input placeholder="Digite seu email aqui" type="text"></b-input>
    </b-row>
    <span class="insercao-span span-secondary">Senha</span>
    <b-row class="insercao">
      <b-input placeholder="Digite sua senha aqui" type="text"></b-input>
    </b-row>

    <b-button class="btn-login" @click="$bvModal.hide('modal-login')">Login</b-button>
  </b-modal>
</template>

<style scoped>
.d-flex {
  display: flex;
}

.connect {
  display: flex;
  margin-left: 6%;
  margin-right: 6%;
  width: 88%;
  height: 3vw;
  background: #069999;
  border-radius: 60px;
  margin-bottom: 5%;
}

.connect img {
  width: 5%;
  margin-left: 10%;
  margin-right: 10%;
}

.connect span {
  display: flex;
  font-style: normal;
  font-weight: bold;
  color: white;
  align-items: center;
  justify-content: center;
}
.btn-login {
  width: 100%;
  margin-right: 5%;
  height: 95%;
  margin-top: 2%;
}

.btn-login:hover {
  border-color: rgba(229, 105, 90, 0.7) !important;
  background: rgba(205, 205, 205, 0.1);
  color: #e5695a;
  border-color: rgba(215, 92, 90, 0.1);
}

.insercao {
  display: flex;
  width: 100%;
  margin-left: 0%;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 3vw;
  margin-bottom: 5%;
}

.insercao input {
  width: 88%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  font-family: Asap;
  font-size: 1.35vw;
  color: #c4c4c4;
  text-align: center;
}

.insercao-span {
  margin-left: 9%;
}
</style>