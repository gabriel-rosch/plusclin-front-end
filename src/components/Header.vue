<template>
  <div class="component">
    <b-container fluid>
      <b-row class="row">
        <b-col cols="4" class="c1">
          <img src="../images/logo.svg" alt />
        </b-col>
        <b-col class="c2" fluid>
          <img src="../images/localization.svg" alt />
          <b-col  cols="12" class="localization">
            <span class="span-secondary">Palhoça - SC</span>
            <span class="span-tertiary">Essa não é minha localização</span>
          </b-col>
        </b-col>
        <b-col class="c3">
          <b-button class="btn-primary cadastrar">Cadastrar-se</b-button>
          <span class="span-primary">Login</span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "main-header",
  components: {}
};
</script>

<style scoped>
.row {
  display: flex;
  padding-top: 1%;
}

.row > * {
  display: flex;
  width: 100%;
}
.c1,
.c2,
.c3 {
  justify-content: center;
  align-items: center;
}

.c1 img {
  width: 90%;
  max-width: 100%;
}
.c2 img {
  margin-left: 20%;
  width: 100%;
  max-width: 8%;
}

.c3 span {
  padding-left: 10%;
}

.localization {
  display: grid;
}

.cadastrar {
  margin-left: 2%;
  height: 95%;
}

</style>

