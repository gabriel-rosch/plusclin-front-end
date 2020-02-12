<template>
  <b-container fluid>
    <b-row class="row">
      <b-col class="c1">
        <img src="../images/logo.svg" alt />
      </b-col>
      <b-col class="c2">
        <img src="../images/localization.svg" alt />
        <div class="localization">
          <span class="span-secondary">Palhoça - SC</span>
          <span class="span-tertiary">Essa não é minha localização</span>
        </div>
      </b-col>
      <b-col class="c3">
        <b-button class="btn-primary cadastrar" @click="cadastrar()">Cadastrar-se</b-button>
        <b-button class="btn-primary login" @click="login()">Login</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "main-header",
};
</script>

<style>
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

.localization {
  display: grid;
}

.cadastrar {
  margin-right: 5%;
  height: 95%;
}

.cadastrar:hover {
  background: rgba(205, 205, 205, 0.2);
  color: #e5695a;
  border-color: rgba(215, 92, 90, 0.1);
}
.cadastrar:focus {
  background: rgba(205, 205, 205, 0.2);
  color: #e5695a;
  border-color: rgba(215, 92, 90, 0.1);
}

.login {
  background-color: transparent;
  color: #e5695a;
  margin-right: 5%;
  height: 95%;
}

.login:hover {
  background: rgba(205, 205, 205, 0.2);
  color: #e5695a;
  border-color: rgba(215, 92, 90, 0.1);
}
</style>

