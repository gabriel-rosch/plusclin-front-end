<template>
  <b-modal id="modal-login" hide-footer title="BootstrapVue">
    <template v-slot:modal-title>Login</template>
    <div class="px-5 login">
      <div class="external">
        <b-row>
          <b-button class="rounded-pill w-100">
            <div class="icon">
              <img class="w-40" src="../images/facebook-orig.svg" alt />
            </div>
            <span>Conectar com meu Facebook</span>
          </b-button>
        </b-row>
        <b-row>
          <b-button class="rounded-pill w-100">
            <div class="icon">
              <img class="w-40" src="../images/google-orig.svg" />
            </div>
            <span>Conectar com a minha Conta Google</span>
          </b-button>
        </b-row>
      </div>
      <span class="span-insertion span-secondary">E-mail</span>
      <b-row class="insertion">
        <b-input placeholder="Digite seu email aqui" type="text"></b-input>
      </b-row>
      <span class="span-insertion span-secondary">Senha</span>
      <b-row class="insertion">
        <b-input placeholder="Digite sua senha aqui" type="text"></b-input>
      </b-row>
      <b-row>
        <a class="a-sign">Não tenho cadastro</a>
        <b-button class="btn-login" @click="$bvModal.hide('modal-login')">Login</b-button>
      </b-row>
    </div>
  </b-modal>
</template>

<style >
#modal-login {
  max-width: 100%;
  min-width: 80;
}

.external button {
  /* rounded-pill */
  display: flex;
  height: 3rem;
  width: 100%;
  font-size: 100%;
  margin-bottom: 5%;
  align-items: center;
}

.external button .icon {
  display: flex;
  width: 25%;
  padding-right: 5%;
  padding-right: 5%;
}
.external button .icon img {
  display: flex;
  align-items: center;
}
.external button span {
  display: flex;
  width: 70%;
  font-size: 100%;
  margin-right: 5%;
}
</style>