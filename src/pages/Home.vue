<style scoped lang="scss">
    main {
        display: grid;
        grid-template-columns: 1fr 3fr 2fr;
        grid-template-areas: "n i nn";
        grid-template-rows: 80vh;
        .search {
            display: flex;
            flex-direction: column;
            justify-content: center;
            grid-area: i;
            span {
                font-size: 2.85rem;
            }
            .search-row {
                display: flex;
                padding: 0;
                margin: 0;
                button {
                    display: flex;
                    align-items: center;
                    margin-left: 1rem;
                    font-size: 1.5rem;
                }
                input {
                    flex: 1;
                    height: 4rem;
                    padding: 20px 20px;
                    font-size: 1.5rem;
                    color: #069999;
                }
                input:focus {
                    border: solid 1px #069999;
                }
            }

        }
    }

</style>
<template>
    <main>
        <div class="search">
            <span class="secondary no-wrap">De qual<strong class="primary">&nbsp;especialista&nbsp;</strong>você está precisando?</span>
            <b-row class="search-row">
                <b-form-input
                        autocomplete="off"
                        v-model="specialtiesSelect"
                        class="rounded-pill shadow"
                        list="input-list"
                        id="input-with-list"
                ></b-form-input>
                <b-form-datalist :options="dataListOptions" list="input-list" id="input-list"/>
                <button
                        type="submit"
                        @click="onScheduleNow"
                        class="button-prymary shadow rounded-pill no-wrap"
                >Agendar agora
                </button>
            </b-row>
        </div>
    </main>
<!--                <div class="flex-column box-information">-->
<!--                    <div class="d-flex box-one">-->
<!--                        <div class="lateral-one"/>-->
<!--                        <div>-->
<!--                            <MessageBlock style="padding-bottom: 4vw;" :titulo="titulo1" :message="message1"/>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="espacamento"/>-->
<!--                    <div class="d-flex box-two">-->
<!--                        <div>-->
<!--                            <MessageBlock style="padding-bottom: 4vw;" :titulo="titulo2" :message="message2"/>-->
<!--                        </div>-->
<!--                        <div class="lateral-two"/>-->
<!--                    </div>-->
<!--                    <div style="height: 10vw" class="espacamento"/>-->
<!--                </div>-->

<!--        <div class="d-flex final-box center align-items-center">-->
<!--            <img style="height: 6vw; padding-left: 12vw;" src="../images/botao-esquerdo.svg" alt/>-->
<!--            <div class="d-flex center-box">-->
<!--                <img class="p-0 m-0" style="min-width: 13vw;max-height: 13vw;" src="../images/velho.svg" alt/>-->
<!--                <div class="center-text">-->
<!--                    <span class="secondary-class">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id luctus massa.-->
<!--                       Curabitur luctus orci ac quam fermentum mattis. Nullam in tortor placerat, gravida massa vel, lacinia-->
<!--                       arcu.-->
<!--                    </span>-->
<!--                    <div>-->
<!--                        <span class="fourth-class text-box" style="font-size: 1.2vw">-->
<!--                            João Carlos, 72 anos - Florianópolis - SC-->
<!--                        </span>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <img style="height: 6vw; padding-right: 12vw;" src="../images/botao-direito.svg" alt/>-->
<!--        </div>-->
<!--        <div class="shared-box">-->
<!--            <span class="primary-class shared-text">Compartilhe a sua experiência com a gente</span>-->
<!--        </div>-->

</template>

<script>

    import {listSpecialties} from "../api/specialties";

    export default {
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
            onScheduleNow() {
                const city = JSON.parse(localStorage.getItem("city"));
                if(city) {
                    this.$router.push(`/especialidade/${this.removeAcento((this.specialtiesSelect.trim()))}`);
                } else if (!this.specialtiesSelect) {
                    this.$bvToast.toast(`Digite a especialidade que você procura`, {
                        title: 'Aviso',
                        autoHideDelay: 5000,
                    })
                } else {
                    this.$bvModal.show("modal-localization");
                }
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
            }
        },

    };
</script>