<template>
  <b-container fluid>
    <main-header />
    <b-container fluid class="box-pesquisa">
      <b-row class="row mt-6">
        <span class="span-fourth">Qual o</span>
        <span class="span-fourth" style="color: #E5695A;">&nbsp;médico&nbsp;</span>
        <span class="span-fourth">você precisa consultar?</span>
      </b-row>
      <b-row class="consulta row mt-2">
        <input class="medico span-secondary" value="TESTE" />
        <b-button class="btn-primary agendar">Agendar agora</b-button>
      </b-row>
    </b-container>
    <b-container fluid class="box-apresentation"></b-container>
  </b-container>
</template>

<script>
</script>

<style>
.main-page {
  background-color: aqua;
}

.mt-6 {
  padding-top: 15% !important;
}

.row {
  display: flex;
  padding-top: 1%;
}

.row > * {
  display: flex;
}

.consulta {
  display: flex;
  height: 7vw;
}

.box-pesquisa {
  padding-left: 10%;
}

.medico {
  width: 48%;
  height: 100%;
  font-size: 24;
  padding-left: 5%;
  padding-right: 5%;
  background: #ffffff;
  border-radius: 60px;
}

.medico:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

.agendar {
  margin-left: 2%;
  width: 23%;
  justify-content: center;
  font-size: 1.7vw;
  height: 100%;
  height: 100%;
}
.box-apresentation {
  margin-left: 10%;
  margin-top:  30%;
  width: 100%;
  height: 50vw;
  background: #99cdcd;
}
</style>

