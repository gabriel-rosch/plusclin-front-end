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
          <b-button class="btn-primary cadastrar">Cadastrar-se</b-button>
          <span class="span-primary">Login</span>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
export default {
  name: "main-header",
  components: {}
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


.localization {
  display: grid;
}

.cadastrar {
  margin-right: 5%;
  height: 95%;
}
</style>

