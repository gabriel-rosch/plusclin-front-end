<template>
    <div id="home">
        <div style="margin-left: 11.5%;">
            <div>
                <div>
                    <b-row class="m-0" style="padding-top: 21.5vw">
                        <span class="fourth-class">De qual<span class="six-class">&nbsp;especialista&nbsp;</span>você está precisando?</span>
                    </b-row>
                    <b-row class="p-0 m-0">
                        <div class="d-flex" style="width: 44vw; height: 5vw">
                            <b-form-input
                                    autocomplete="off"
                                    v-model="specialtiesSelect"
                                    style="width: 100%; height: 100%; padding-left: 2vw;padding-right: 2vw;"
                                    class="rounded-pill"
                                    list="input-list"
                                    id="input-with-list"
                            ></b-form-input>
                            <b-form-datalist id="input-list" :options="dataListOptions"></b-form-datalist>
                        </div>
                        <div class="p0 m-0" style="height:5vw;">
                            <b-button
                                    type="submit"
                                    style="width: 13vw; height: 5vw !important; font-size: 1.5vw; margin-left: 1.5vw;"
                                    :to="`/especialidade/${this.removeAcento((specialtiesSelect.trim()))}`"
                                    class="d-flex rounded-pill bold align-items-center fourth-class p-0"
                            >Agendar agora
                            </b-button>
                        </div>
                    </b-row>
                </div>
                <div class="flex-column box-information">
                    <div class="d-flex box-one">
                        <div class="lateral-one"/>
                        <div>
                            <MessageBlock style="padding-bottom: 4vw;" :titulo="titulo1" :message="message1"/>
                        </div>
                    </div>
                    <div class="espacamento"/>
                    <div class="d-flex box-two">
                        <div>
                            <MessageBlock style="padding-bottom: 4vw;" :titulo="titulo2" :message="message2"/>
                        </div>
                        <div class="lateral-two"/>
                    </div>
                    <div style="height: 10vw" class="espacamento"/>
                </div>
            </div>
        </div>
        <div class="d-flex final-box center align-items-center">
            <img style="height: 6vw; padding-left: 12vw;" src="../images/botao-esquerdo.svg" alt/>
            <div class="d-flex center-box">
                <img class="p-0 m-0" style="min-width: 13vw;max-height: 13vw;" src="../images/velho.svg" alt/>
                <div class="center-text">
                    <span class="secondary-class">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id luctus massa.
                       Curabitur luctus orci ac quam fermentum mattis. Nullam in tortor placerat, gravida massa vel, lacinia
                       arcu.
                    </span>
                    <div>
                        <span class="fourth-class text-box" style="font-size: 1.2vw">
                            João Carlos, 72 anos - Florianópolis - SC
                        </span>
                    </div>
                </div>
            </div>
            <img style="height: 6vw; padding-right: 12vw;" src="../images/botao-direito.svg" alt/>
        </div>
        <div class="shared-box">
            <span class="primary-class shared-text">Compartilhe a sua experiência com a gente</span>
        </div>
    </div>
</template>

<script>
    import {listSpecialties} from "../api/specialties";
    import MessageBlock from "../components/MessageBlock";

    export default {
        components: {
            MessageBlock
        },
        data() {
            return {
                specialties: [],
                specialtiesSelect: "",
                message1:
                    "Você pode se cadastrar de maneira individual ou trazer a sua clínica para uma parceria. Para maiores " +
                    "esclarecimentos, entre em contato conosco através do email xxxxxx@xxx.xxx ou pelo número " +
                    "(xx)xxxxx-xxxx. Afilie-se à nossa plataforma!",
                message2:
                    "Chegou a oportunidade que a sua clínica esperava para poder modernizar suas consultas. É hora de se afiliar " +
                    "à nossa plataforma! Para maiores esclarecimentos, entre em contato conosco através do email " +
                    "xxxxxx@xxx.xxx ou pelo número (xx)xxxxx-xxxx.",
                titulo1: "Você é um especialista e deseja trabalhar conosco?",
                titulo2: "A sua clínica deseja ampliar os atendimentos?"
            };
        },
        methods: {
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
            }
        },
        computed: {
            dataListOptions() {
                return this.specialties.map(x => (x.name));
            }
        },
        async mounted() {
            const reponse = await listSpecialties();
            if (reponse.ok) {
                this.specialties = await reponse.json();
            } else {
                // eslint-disable-next-line no-console
                console.log("ERRO GET SPECIALTIES");
            }
        },

    };
</script>


<style scoped >
    .form-control {
        border-color: transparent;
        width: 100%;
        height: 100%;
        border: none;
        outline: 0;
        font-size: 1.5vw;
        color: #069999;
    }

    .form-control:focus,
    .form-control:active {
        font-size: 1.5vw;
        color: #069999;
        border: none;
        -webkit-box-shadow: none;
    }

    .box-one {
        margin-right: 0vw;
        margin-left: 0vw;
    }

    .box-two {
        margin-right: 0vw;
        margin-left: 0vw;
    }

    .box-information {
        height: 82vw;
        padding-top: 20.9vw;
        margin-bottom: 23vw;
    }

    .lateral-one {
        margin-top: 2vw;
        height: 100% -2vw;
        width: 10%;
        background-color: #99cdcd;
    }

    .lateral-two {
        height: 29.75vw;
        width: 13.3vw;
        background-color: #99cdcd;
    }

    .espacamento {
        display: flex;
        height: 5vw;
        background-color: #99cdcd;
    }

    .center-box {
        width: 30vw;
        margin-left: 0vw;
        margin-right: 0vw;
        padding-left: 0vw;
        height: 100%;
        justify-content: center;
    }

    .center-text {
        display: grid;
        width: 95%;
        margin-left: 5%;
        font-size: 1.4vw;
        align-content: center;
    }

    .shared-box {
        display: flex;
        padding-top: 3vw;
        height: 10vw;
        justify-content: center;
        align-content: center;
    }

    .shared-text {
        font-size: 1.1vw;
        text-decoration-line: underline;
    }
</style>