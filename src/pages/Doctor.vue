<style lang="scss" scoped="true">
    @import "src/styles/variable.scss";

    /*sm*/
    @media (max-width: 767px) {
        .title-specialties {
            color: #069999 !important;
            font-size: $default-font-size * 1.35;
        }

        .title-date {
            color: #e5695a;
            font-size: $default-font-size * 1.35;
            font-weight: normal;
        }

        .height-main-col {
            margin-top: 1vw;
        }
    }

    @media (min-width: 767px) {
        .title-specialties {
            color: #069999 !important;
            font-size: $default-font-size * 1.35;
        }

        .title-date {
            color: #e5695a;
            font-size: $default-font-size * 1.35;
            font-weight: normal;
        }

        .height-main-col {
            margin-top: 1vw;
        }

    }

    .btn.filter {
        height: 4vw;
        min-width: 10vw;
        max-width: 10vw;
        font-size: 1.3vw;
    }

    .btn.filter:hover {
        background-color: white;
    }

    .card-doctor {
        border-radius: $default-border;
    }

    .container-doctors {
        margin: auto auto;
        width: 60%;
    }


    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 15vw;
    }
</style>
<template>
    <div>
        <Confirmation/>
        <div class="title">
            <span class="title-specialties"> Especialistas em {{initCap(this.specialtieName)}} disponíveis em&nbsp; </span>
            <strong class="title-date">{{this.$route.params.dataSelected.replaceAll("-","/")}}</strong>
        </div>
        <div class="container-doctors">

            <card-doctor :key="user.id" @selectedtime="selectTime" v-for="user in this.users " :user="user"
                         :specialtieName="specialtieName"
                         class="mb-5 card-doctor"/>
            <b-modal id="modalPagamento" hide-footer>
                <b-button class="mt-3" block @click="cloneModal">Fechar</b-button>
                <b-button class="mt-3" block @click="saveAppointment">Confirmar</b-button>
            </b-modal>
        </div>
    </div>
</template>

<script>
    import {listClinics} from '../api/clinic';
    import CardDoctor from "../components/CardDoctor";
    import {postAppointments} from "../api/appointments";

    export default {
        components: {CardDoctor},
        comments: {
            CardDoctor
        },
        data() {
            return {
                doctors: [],
                hourAppointment: {},
                users: []
            }
        }
        , computed: {
            specialtieName() {
                return JSON.parse(localStorage.getItem('searchSpecialtie')).name;
            }
        },
        mounted() {
            if (this.$store.users != null && this.$store.users != '') {
                this.users = this.$store.users;
            } else {
                var arrayDS = this.$route.params.dataSelected.split('-');
                var stringDataFormated = arrayDS[1] + '-' + arrayDS[0] + '-' + arrayDS[2];
                var dataSelected = new Date(stringDataFormated);
                this.users = listClinics(115, dataSelected.getTime());
            }
        },
        methods: {
            async saveAppointment() {
                const response = await postAppointments(this.hourAppointment);
                if (response.ok) {
                    this.$bvModal.hide("modalPagamento");
                    await this.$router.push('/');
                    this.$bvToast.toast(`Agendamento salvo com sucesso!`, {
                        title: 'Aviso',
                        autoHideDelay: 5000
                    })
                } else {
                    this.$bvToast.toast(`Erro ao salvar consulta, verifique sua conexão`, {
                        title: 'Aviso',
                        autoHideDelay: 5000
                    })
                }
            },
            initCap(string) {
                return string.toLowerCase().replace(/(?:^|\b)[a-z]/g, function (m) {
                    return m.toUpperCase();
                });
            },
            getFormattedDate(isoDate) {
                const todayTime = new Date(isoDate);
                const month = todayTime.getMonth() + 1;
                const day = todayTime.getDate();
                const year = todayTime.getFullYear();
                return day + "/" + month + "/" + year;
            },
            async cloneModal() {
                this.hourAppointment = {};
                this.$bvModal.hide("modalPagamento");
            },
            async selectTime(payload) {
                const userId = localStorage.getItem("token");
                if (!userId) {
                    this.$bvToast.toast(`Faça o login para continuar`, {
                        title: 'Aviso',
                        autoHideDelay: 5000
                    })
                    return;
                }

                this.$bvModal.show("modalPagamento");

                this.hourAppointment = {
                    provider_id: payload.doctorId,
                    date: payload.value,
                }
            }
        }
    }
</script>
