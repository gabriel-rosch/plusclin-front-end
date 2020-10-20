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


    article {
        display: grid;
        flex-direction: column;
        justify-content: center;

        .message {
            display: grid;
            grid-template-areas: "i ii iii iiii";
            font-size: 1.8rem;
            grid-template-columns: 2fr 1fr 10fr 2fr;

            img:first-child {
                grid-area: i;
                height: 7rem;
                margin: auto auto auto auto;
            }

            .avatar {
                grid-area: ii;
                margin: auto auto auto auto;
            }

            .texts {
                grid-area: iii;
                display: grid;
                margin: 2rem 2rem;


                .description-text {
                    color: #746F73;
                    margin: auto 3rem;

                }

                .name-text {
                    margin: 1rem auto auto auto;
                }
            }

            img:last-child {
                grid-area: iiii;
                height: 7rem;
                margin: auto auto auto auto;
            }


        }

        .share-experience {
            font-size: 2rem;
            margin: 2rem auto;

            span {
                text-decoration-line: underline;
            }

            span:hover {
                cursor: pointer;
            }
        }

    }

    @media (min-width: 1220px) {
        [data-box] {
            opacity: 0;
        }

        [data-box="main"] {
            transform: translate3d(0, 100px, 0);
            transition: 1.3s;
        }

        [data-box="left"] {
            transform: translate3d(-500px, 0, 0);
            transition: 2s;
        }

        [data-box="right"] {
            transform: translate3d(500px, 0, 0);
            transition: 2s;
        }

        [data-box].animate {
            opacity: 1;
            transform: translate3d(0px, 0px, 0px);
        }

    }

    @media (max-width: 720px) {


        article {
            .message {
                grid-template-columns: 2fr 1fr 10fr 2fr;

                font-size: 1.4rem;
            }
        }
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
                            id="teste"
                            @click="onScheduleNow"
                            class="button-primary shadow rounded-pill no-wrap"
                    >Agendar
                    </button>
                </b-row>
            </div>
        </main>
        <section data-box="main">
            <div>
                <div data-box="left" class="box1 shadow">
                    <b-row class="row1 m-0">
                        <strong class="secondary">{{titulo1}}</strong>
                    </b-row>
                    <b-row class="row2 m-0">
                        <img src="../images/doctor.svg" alt/>
                        <span>{{message1}}</span>
                    </b-row>
                </div>
                <div data-box="right" class="box2 shadow">
                    <b-row class="row1 m-0">
                        <strong class="secondary">{{titulo2}}</strong>
                    </b-row>
                    <b-row class="row2 m-0">
                        <img src="../images/card.svg" alt/>
                        <span>{{message2}}</span>
                    </b-row>
                </div>
            </div>
        </section>

        <article data-box="main">

            <div class="message">
                <img src="../images/botao-esquerdo.svg" alt/>
                <div class="avatar">
                    <b-avatar variant="info" :src="this.velho" size="15rem"></b-avatar>
                </div>
                <div class="texts">
                    <div class="description-text">
                            <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id luctus massa.
                               Curabitur luctus orci ac quam fermentum mattis. Nullam in tortor placerat, gravida massa vel, lacinia
                               arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id luctus massa.
                               Curabitur luctus orci ac quam fermentum mattis. Nullam in tortor placerat, gravida massa vel, lacinia
                               arcu
                            </span>
                    </div>
                    <div class="name-text">
                                <span class="secondary font-weight-bolder">
                                    João Carlos, 72 anos - Florianópolis - SC
                                </span>
                    </div>
                </div>
                <img src="../images/botao-direito.svg" alt/>
            </div>


            <div class="share-experience">
                <span class="primary">Compartilhe a sua experiência com a gente</span>
            </div>
        </article>
    </div>
</template>

<script>
    // eslint-disable-next-line no-undef
    import {listSpecialties} from "../api/specialties";

    function animeScroll() {
        const windowTop = window.pageYOffset;
        document.querySelectorAll('[data-box]').forEach(function (element) {
            if (element.getAttribute('data-box') === "main") {
                if (windowTop + 800 > element.offsetTop) {
                    element.classList.add('animate');
                }
            } else {
                if (windowTop > element.offsetTop) {
                    element.classList.add('animate');
                }
            }
        })
    }

    window.addEventListener('scroll', function () {
        animeScroll();
    })

    export default {
        data() {
            return {
                specialties: [],
                device: false,
                specialtiesSelect: "",
                velho: "https://lh3.googleusercontent.com/a-/AOh14GgcdD2l8TTin-oW5YPkoJ9XDEZoBFBp2Z637zte",
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