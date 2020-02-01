
<template>
  <h1>MENU PRINCIPAL</h1>
    <div class="header">
      <div class="icon">
        <img class="icon-logo" src="../images/logo.svg" />
        <span class="text1">clube de consultas</span>
      </div>
      <div class="localization">
        <div class="icon-localization">
          <img class src="../images/localization.png" />
        </div>
        <div class="text-localization">
          <span class="text2">Palhoça - SC</span>
          <span class="text3">Essa não é minha localização</span>
        </div>
      </div>
      <div class="login">
        <b-button class="btn-principal">Cadastrar-se</b-button>
        <span class="btn-login">Login</span>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.header {
  display: flex;
  justify-content: space-around;
  height: 90px;
  width: 100%;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.icon-logo {
  width: 100%;
  height: 100%;
}
.localization {
  display: flex;
  align-items: center;
  height: 100%;
  width: 20%;
}

.text-localization {
  display: flex;
  flex-direction: column;
  height: 45%;
  width: 45%;
  padding-left: 2%;
}
.login {
  display: flex;
  align-items: center;
  display: flex;
  height: 100%;
}

.btn-principal {
  display: flex;
  width: 150px;
  height: 51px;
  left: 1091px;
  top: 17.6px;
  justify-content: center;
  background: #e5695a;
  border-radius: 60px;
}

.btn-login {
  display: flex;
  width: 44px;
  height: 23px;
  left: 1271px;
  top: 29.6px;
  margin-left: 20%;
  font-size: 18px;
  line-height: 21px;

  color: #e5695a;
}

.text1 {
  font-family: Asap;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  color: #99cdcd;
}
.text2 {
  /* Palhoça - SC */
  font-family: Asap;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #069999;
}
.text3 {
  /* Essa não é minha localização */
  font-family: Asap;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  color: #99cdcd;
}
</style>

