<style lang="scss">
    @import "src/styles/variable.scss";

    .city:hover {
        color: $default-color-secondary !important;
    }

    .title-class {
        color: $default-color-primary;
    }

    .your-localization {
        float: right;
        color: $default-color-primary;
    }

    .your-localization img {
        height: 1.2rem;
        margin-bottom: 0.35rem;
    }


    #input-with-list-cities {
        flex: 1;
        padding: 1.1vw 1.2vw;
        font-size: $default-font-size * 0.85;
        color: $default-color-primary;
    }

    .cities {
        overflow: auto;
        height: 15rem;
    }

    .city-box {
        border: 3px solid $default-color-primary;
        width: 85%;
        margin-left: 9%;
        margin-right: 6%;
        cursor: pointer;
        margin-top: .3rem;
    }

    .city-name {
        font-size: 1.5rem;
        color: $default-color-primary;
    }


    .city-img-box {
        width: 30%
    }

    .city-img {
        height: 1.5rem;
    }
</style>
<template>
    <b-container class="d-flex" fluid>

        <b-modal id="modal-localization" centered hide-footer title-class="title-class" title="Escolha sua localização">
            <b-form-input
                    autocomplete="off"
                    v-model="cityWriting"
                    class="rounded-pill shadow"
                    id="input-with-list-cities"
            ></b-form-input>
            <div class="cities">
                <div class="d-flex flex align-items-center rounded-pill city-box"
                     v-on:click="alterCity(city)" v-for="(city) in this.cities" v-bind:key="city.name"
                     v-if="verifyCity(city.name)">
                    <div v-if="city.name === propsCity.name"
                         class="d-flex justify-content-end city-img-box">
                        <img src="../images/marcador.svg" class="city-img"/>
                    </div>
                    <div v-else class="d-flex justify-content-end city-img-box">
                        <img src="../images/localization.svg" class="city-img"/>
                    </div>
                    <div class="d-flex justify-content-end" style="width: 70%">
                        <span class="secondary-class city-name">{{city.name}}</span>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <span class="your-localization"
                  v-if="null !== propsCity.name"> Sua Localização Atual: {{propsCity.name}} <img
                    src="../images/marcador.svg"/></span>
        </b-modal>
    </b-container>
</template>
<script>


    export default {
        data() {
            return {
                cityWriting: "",
                cities: [
                    {name: "Florianópolis", id: "1"}
                    , {name: "Palhoça", id: "2"}
                    , {name: "São José", id: "3"}
                    , {name: "Santo Amaro", id: "4"}
                    , {name: "Rancho Queimado", id: "5"}
                    , {name: "Alfredo Wagner", id: "6"}
                ]
            };
        },
        props: {
            propsCity: {
                name: String,
                id: String
            }
        },
        computed: {
            citiesListOptions() {
                return this.cities.map(x => (x.name));
            }
        },
        methods: {
            async alterCity(city) {
                this.propsCity.id = city.id;
                this.propsCity.name = city.name;
                localStorage.setItem("city", JSON.stringify(city));
                this.$bvModal.hide("modal-localization");
            },
            removeAcento(text) {
                text = text.toLowerCase();
                text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
                text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
                text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
                text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
                text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
                text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
                text = text.replace(new RegExp('[ ]', 'gi'), '');
                return text;
            }, verifyCity(city) {
                return this.removeAcento(city.toString()).includes(this.removeAcento(this.cityWriting));
            }
        }
    }
    ;

</script>