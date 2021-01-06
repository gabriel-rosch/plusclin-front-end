<style lang="scss">
    @import "src/styles/variable.scss";

    .box-date {
        .form-control {
            color: $default-color-primary !important;
        }

        .btn-outline-secondary {
            color: $default-color-primary !important;
            border: none !important;
            background-color: transparent;
        }

        .btn-outline-secondary:active {
            border-color: $default-color-primary !important;
            background-color: $default-color-secondary !important;
        }

        .btn-outline-secondary:hover {
            border-color: $default-color-primary !important;
            background-color: $default-color-secondary !important;
        }

        .btn-outline-secondary:focus {
            border-color: $default-color-primary !important;
        }

        .b-calendar-grid {
            width: 100%;

            button {
                color: white;
            }

            .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {
                background-color: $default-color-primary !important;
            }


            footer {
                visibility: hidden;
            }


            span {
                background-color: $default-color-secondary !important;
                color: white !important;
            }

            .btn-outline-secondary:hover {
                background-color: $default-color-primary !important;
            }

            .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
                background-color: $default-color-primary !important;
            }
        }

        .b-calendar-nav .disabled {
            opacity: 0;
        }

        .b-calendar-nav button:last-child {
            opacity: 0;
        }
    }

    @media (max-width: 767px) {

        .header {
            margin-left: 5rem;
            margin-right: 5rem;
            margin-bottom: 4rem;
        }
        .date-piker {
            justify-content: center;
            width: 100%;
        }
        .title-primary {
            color: $default-color-secondary;
            font-size: $default-font-size;
            text-decoration: underline;
        }
        .title-secundary {
            font-size: $default-font-size;
            color: $default-color-primary;
        }
    }

    @media (min-width: 767px) {

        .header {
            margin-top: 4rem;
            margin-bottom: 4rem;
            margin-left: 15rem;
            margin-right: 15rem;
        }

        .height-main-col {
            height: 27vw;
        }

        .date-piker {
            width: 100%
        }

        .title-primary {
            color: $default-color-secondary;
            font-size: $default-font-size * 1.15;
            text-decoration: underline;
        }

        .title-secundary {
            font-size: $default-font-size;
            color: $default-color-primary;
            font-family: Asap;
            font-style: normal;
            font-weight: normal;

        }

        .header.animate {
            height: 6rem;

            .box-date {
                transition: 0.5s;
                opacity: 0;
            }
        }

    }

    .content {
        display: grid;
        justify-content: center;

        span {
            font-size: 3rem;
        }
    }

    .containerClinic {
        display: flex;
    }

    .containerClinicNull {
        height: 35rem;
    }

    .header {
        transition: 1.5s;
        border-radius: 5rem;
        height: 35rem;

        .specialties {
            padding: 1rem;
            display: flex;
            justify-content: center;

            span {
                font-size: 3rem;
                font-weight: bold;
            }
        }

        .box-date {
            display: grid;
            justify-content: center;
            opacity: 1;
            transition-delay: 1s;
            transition: 5s;
        }
    }

    .card-carousel-wrapper {
        display: grid;
        width: 100%;
        grid-template-areas: "i ii iii";
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;
        margin-bottom: 60px;

        .arrow-carousel-left,
        .arrow-carousel-right {
            width: 3rem;
            height: 3rem;
            box-sizing: border-box;
            border-top: 0.8rem solid $default-color-primary;
            border-right: 0.8rem solid $default-color-primary;
            cursor: pointer;

            &[disabled] {
                opacity: 0.2;
                border-color: black;
            }
        }

        .arrow-carousel-left {
            grid-area: i;
            transform: rotate(-135deg);
            margin-left: 85%;

            &:active {
                transform: rotate(-135deg) scale(0.9);
            }
        }

        .arrow-carousel-right {
            grid-area: iii;
            margin-right: 80%;
            transform: rotate(45deg);

            &:active {
                transform: rotate(45deg) scale(0.9);
            }
        }

        .card-carousel {
            grid-area: ii;
            display: flex;
            justify-content: center;

            &--overflow-container {
                overflow: hidden;
            }


            .to-vanish {
                opacity: 0.1;
            }

            .to-appear {
                opacity: 1;
                transition-delay: 0.1s;
                transition: 0.2s;
                opacity: 1;
            }

            .card-clinics:first-child {
                margin-left: 1.5rem;
                margin-right: 1.5rem;
            }

            .card-clinics:last-child {
                margin-left: 1.5rem;
                margin-right: 1.5rem;
            }

        }
    }

</style>
<template>
    <div>
        <div class="header">

            <div class="specialties">
                <span v-if="this.searchSpeciltie.name" class="title-secundary d-flex span-primary">{{this.searchSpeciltie.name}}</span>
                <span v-else class="title-secundary d-flex">Especialidade não encontrada</span>
            </div>
            <b-col>
                <div class="box-date">
                <span v-if="this.searchSpeciltie.name"
                      class="d-flex title-primary">Escolha a data da consulta</span>
                    <b-calendar
                            width="80rem"
                            hide-header
                            locale="pt-BR"
                            @context="onFilter"
                            value-as-date
                            v-model="dateSelect"
                            :min="min"
                            :max="max">
                    </b-calendar>
                </div>
            </b-col>
        </div>
        <div :class="[clinics.length ? 'containerClinic': 'containerClinicNull']">
            <div class="card-carousel-wrapper" v-if="clinics.length > 0">
                <div class="arrow-carousel-left" @click="moveCarousel(-1)" :disabled="firstOfList"></div>
                <div class="card-carousel">
                    <card-clinic
                            style="box-shadow: 10px 10px 10px rgba(0, 20,100,0.15);"
                            class="border card-clinics"
                            v-if="clinics.length >0"
                            :dataSelected=" this.dateSelect"
                            :clinic="getCardClinic(0)"
                    />
                    <card-clinic
                            style="box-shadow: 10px 10px 10px rgba(0, 20,100,0.15);"
                            class="border card-clinics"
                            v-if="clinics.length >1"
                            :dataSelected=" this.dateSelect"
                            :clinic="getCardClinic(1)"
                    />
                    <card-clinic
                            style="box-shadow: 10px 10px 10px rgba(0, 20,100,0.15);"
                            class="border card-clinics"
                            v-if="clinics.length >2"
                            :dataSelected=" this.dateSelect"
                            :clinic="getCardClinic(2)"
                    />
                </div>
                <div class="arrow-carousel-right" @click="moveCarousel(1)" :disabled="lastOfList"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {listSpecialtiesName} from '../api/specialties'
    import {listClinics} from '../api/clinic'
    import CardClinic from "../components/CardClinic";

    function animeScroll() {
        const windowTop = window.pageYOffset;
        document.querySelectorAll('.header').forEach(function (element) {
            if (windowTop > 30) {
                element.classList.add('animate');
            } else {
                element.classList.remove('animate');
            }
        })
    }

    window.addEventListener('scroll', function () {
        animeScroll();
    })


    export default {
        components: {
            CardClinic
        },
        data() {
            const now = new Date()
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
            const minDate = new Date(today)
            const maxDate = new Date(today)
            maxDate.setMonth(maxDate.getMonth() + 12)
            return {
                mode: 'single',
                selectedDate: null,
                quantityCard: 3,
                pagination: 0,
                date: Object,
                clinics: [],
                dateSelect: now,
                min: minDate,
                max: maxDate,
                searchSpeciltie: {}
            };
        },
        mounted() {
            this.load();
            this.onFilter();
        },
        computed: {
            firstOfList() {
                if (this.pagination === 0) {
                    return true;
                } else {
                    return false;
                }
            },
            lastOfList() {
                if (this.pagination === this.clinics.length - this.quantityCard || this.pagination >= this.clinics.length) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        methods: {
            moveCarousel(direction) {
                if (((this.pagination != this.clinics.length - this.quantityCard || this.pagination >= this.clinics.length) && direction === 1) || (this.pagination != 0 && direction === -1)) {
                    if (this.pagination + this.quantityCard - 1 > this.clinics.length) {
                        this.pagination = 0;
                    } else {
                        this.pagination += direction;
                    }
                    var elements = document.getElementsByClassName('card-clinics');
                    var i;
                    for (i = 0; i < elements.length; i++) {
                        elements[i].classList.add("to-vanish");
                    }
                    setTimeout(
                        function () {
                            for (i = 0; i < elements.length; i++) {
                                elements[i].classList.add("to-appear");
                            }
                        }, 300);

                    setTimeout(
                        function () {
                            for (i = 0; i < elements.length; i++) {
                                elements[i].classList.remove("to-vanish");
                                elements[i].classList.remove("to-appear");
                            }
                        }, 900);
                }
            },
            getCardClinic(indice) {
                if (this.pagination + this.quantityCard > this.clinics.length) {
                    if (indice + this.pagination >= this.clinics.length) {
                        return this.clinics[indice + this.pagination - this.clinics.length];
                    } else {
                        return this.clinics[this.pagination + indice];
                    }
                } else {
                    return this.clinics[indice + this.pagination];
                }
            },
            async load() {
                const response = await listSpecialtiesName(this.$route.params.nameSpecialties);
                if (response.ok) {
                    this.searchSpeciltie = await response.json();
                    localStorage.setItem('searchSpecialtie', JSON.stringify(this.searchSpeciltie));
                } else {
                    localStorage.removeItem('searchSpecialtie')
                }
            },
            async loadClinics() {
                const response = await listClinics(this.searchSpeciltie.id, this.dateSelect.getTime());
                if (response.ok) {
                    this.clinics = await response.json()
                } else {
                    this.clinics = null
                }
            },
            onFilter() {
                this.$store.dateSelect = this.dateSelect;
                this.loadClinics();
            },
        },
    }
</script>

