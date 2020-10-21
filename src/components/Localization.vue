<style lang="scss">
    @import "src/styles/variable.scss";

    .city:hover {
        color: $default-color-secondary !important;
    }

    .title-class {
        color: $default-color-primary;
    }
</style>
<template>
    <b-container class="d-flex" fluid>
        <b-modal id="modal-localization" centered hide-footer title-class="title-class" title="Escolha sua Localização">
            <div style="width: 100% !important;">
                <div class="d-flex flex  align-items-center rounded-pill"
                     style="border: 3px solid #069999; width: 100%; height: 30%; margin-bottom: 10px; cursor:pointer;"
                     v-on:click="alterCity(city)" v-for="(city) in this.cities" v-bind:key="city.name">
                    <div v-if="city.name === propsCity.name" style="width: 30%" class="d-flex justify-content-end">
                        <img src="../images/marcador.svg" style="height: 2.5rem;"/>
                    </div>
                    <div v-else class="d-flex justify-content-end" style="width: 30%">
                        <img src="../images/localization.svg" style="height: 2.5rem;"/>
                    </div>
                    <div class="d-flex justify-content-end" style="width: 70%">
                        <span class="secondary-class city" style="font-size: 2.5rem;">{{city.name}}</span>
                    </div>
                </div>
            </div>
        </b-modal>
    </b-container>
</template>
<script>
    export default {
        data() {
            return {
                cities: [
                    {name: "Florianópolis", id: "1"}
                    , {name: "Palhoça", id: "2"}
                    , {name: "São José", id: "3"}
                    , {name: "Biguaçu", id: "4"}
                ]
            };
        },
        props: {
            propsCity: {
                name: String,
                id: String
            }
        }
        ,
        methods: {
            async alterCity(city) {
                this.propsCity.id = city.id;
                this.propsCity.name = city.name;
                localStorage.setItem("city", JSON.stringify(city));
                this.$bvModal.hide("modal-localization");
            }
        }
    };
</script>