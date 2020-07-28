<style scoped lang="scss">
    main {
        display: grid;
        grid-template-areas: "i ii iii";
        grid-template-columns: 1fr 4fr 2fr;
        grid-template-rows: 40vw;

        .search {
            display: flex;
            padding: 0 1.5rem;
            flex-direction: column;
            justify-content: center;
            grid-area: ii;
            font-size: 2.85rem;

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
    section {
        padding-left: 8rem;
        position: relative;
        > div {
            background-color: #069999;
            height: 80rem;
            padding-left: 8rem;
        }
        .box1, .box2 {
            background-color: #fff;
            height: 35rem;
            strong {
                padding: 0 2rem;
                font-size: 2.85rem;
                font-weight: normal;
            }
            .row1, .row2 {
                padding-left: 5rem;
                height: 50%;
            }
            .row1 {
                align-items: center;
            }
            .row2 {
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: center;
                align-items: center;
                img {
                    height: 10rem;
                    margin-right: 4rem;
                }
                span {
                    font-size: 1.6rem;
                    margin-right: 4rem;
                    line-height: 3.2rem;
                    color: #746F73;
                }
            }
        }
        .box1 {
            position: absolute;
            margin-top: -4rem;
        }
        .box2 {
            position: absolute;
            margin-top: 35rem;
            left: 0;
            margin-right: 8rem;
        }
    }
    @media (max-width: 720px) {
        section {
            padding-left: 4rem;
            > div {
                padding-left: 4rem;
            }
            .box2 {
                margin-right: 4rem;
            }
        }
    }
    @media (max-width: 640px) {
        main {
            grid-template-columns: 1fr;
            grid-template-areas: "i";
            .search {
                grid-area: i;
                padding: 0 3rem;
            }
        }
        section {
            > div {
                margin-top: 8rem;
            }
        }
    }
    @media (max-width: 500px) {
        section {
            > div {
                .box1, .box2 {
                    .row1 {
                        height: 45%;
                    }
                    .row2 {
                        height: 55%;
                    }
                }
            }
        }
    }

</style>

<template>
    <div>
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
                            class="button-primary shadow rounded-pill no-wrap"
                    >Agendar
                    </button>
                </b-row>
            </div>
        </main>
        <section>
            <div>
                <div class="box1 shadow" >
                    <b-row class="row1 m-0">
                        <strong class="secondary">{{titulo1}}</strong>
                    </b-row>
                    <b-row class="row2 m-0">
                        <img src="../images/doctor.svg" alt />
                        <span>{{message1}}</span>
                    </b-row>
                </div>
                <div class="box2 shadow">
                    <b-row class="row1 m-0">
                        <strong class="secondary">{{titulo2}}</strong>
                    </b-row>
                    <b-row class="row2 m-0">
                        <img src="../images/card.svg" alt />
                        <span>{{message2}}</span>
                    </b-row>
                </div>
            </div>
        </section>
    </div>
<!--                <div class="d-flex final-box center align-items-center">-->
<!--                    <img style="height: 6vw; padding-left: 12vw;" src="../images/botao-esquerdo.svg" alt/>-->
<!--                    <div class="d-flex center-box">-->
<!--                        <img class="p-0 m-0" style="min-width: 13vw;max-height: 13vw;" src="../images/velho.svg" alt/>-->
<!--                        <div class="center-text">-->
<!--                            <span class="secondary-class">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id luctus massa.-->
<!--                               Curabitur luctus orci ac quam fermentum mattis. Nullam in tortor placerat, gravida massa vel, lacinia-->
<!--                               arcu.-->
<!--                            </span>-->
<!--                            <div>-->
<!--                                <span class="fourth-class text-box" style="font-size: 1.2vw">-->
<!--                                    João Carlos, 72 anos - Florianópolis - SC-->
<!--                                </span>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <img style="height: 6vw; padding-right: 12vw;" src="../images/botao-direito.svg" alt/>-->
<!--                </div>-->
<!--                <div class="shared-box">-->
<!--                    <span class="primary-class shared-text">Compartilhe a sua experiência com a gente</span>-->
<!--                </div>-->
</template>

<script>
    // eslint-disable-next-line no-undef
    import {listSpecialties} from "../api/specialties";

    export default {
        data() {
            return {
                specialties: [],
                device: false,
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
                if (city) {
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