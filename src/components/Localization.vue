<template>
    <b-container class="d-flex" fluid>
        <b-modal class="d-flex" hide-footer id="modal-localization" title="Escolha sua Localização"
                 v-for="(cidades) in this.cidades">
            <div class="d-flex flex  align-items-center rounded-pill"
                 style="border: 0.20vw solid #069999;; height: 3.5vw;">
                <div v-if="1 == 2" style="width: 2vw;">
                    <img src="../images/marcador.svg" style="height: 2.5vw;"/>
                </div>
                <div v-else style="width: 30%;" class="d-flex justify-content-end">
                    <img src="../images/localization.svg" style="height: 2.5vw;"/>
                </div>
                <div class="d-flex justify-content-end" style="width: 70%">
                    <span class="primary-class bold"
                          style="font-size: 2vw;">{{cidades}}</span>
                </div>
            </div>
        </b-modal>
    </b-container>
</template>

<script>
    export default {
        data() {
            return {
                cidades: ["Florianópolis", "Palhoça", "São José", "Biguaçu"]
            };
        }
    }
</script>

<style>
</style>