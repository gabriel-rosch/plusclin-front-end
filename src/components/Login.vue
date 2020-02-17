<template>
  <b-modal id="modal-login" class="d-flex" hide-footer title="BootstrapVue">
    <template v-slot:modal-title>Login</template>
      <b-row class="px-3">
        
        <b-button ico class="w-100">
          <img class="w-5 p-5" src="../images/facebook-orig.svg" alt />
          Conectar com meu Facebook
          </b-button>
      </b-row>
      <b-row class="px-3">
        <img class="w-5" src="../images/google-orig.svg" />
        <b-button class="w-100">Conectar com a minha Conta Google</b-button>
      </b-row>
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

<style scoped>
.d-flex {
  display: flex;
}

.btn-login {
  width: 25% !important;
  height: 95%;
  margin-top: 2%;
  color: white !important;
  background-color: rgba(229, 105, 90, 1) !important;
}

.btn-login:hover {
  border-color: rgba(229, 105, 90, 0.7) !important;
  background-color: white !important;
  color: rgba(229, 105, 90, 1) !important;
  border-color: rgba(215, 92, 90, 0.1);
}

.insertion {
  display: flex;
  
  height: 3vw;
  margin-bottom: 5%;
}

.insertion input {
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  font-size: 1.05vw;
  color: #c4c4c4;
  text-align: center;
}

.span-insertion {
  margin-left: 9%;
}

.a-sign {
  display: flex;
  font-size: 1.1vw;
  color: rgba(229, 105, 90, 0.7);
  align-items: center;
}

.a-sign:hover {
  color: rgba(250, 85, 70, 1);
  cursor: pointer;
}


</style>