<template>
    <div>
        <b-container  >
            <b-row class="height-main-col" align-v="center">
                <b-col>
                    <span class="title-primary d-flex span-primary no-wrap">SELECIONE O HORÁRIO DA SUA CONSULTA!</span>
                    <span class="d-flex title-secundary">- Data da consulta:
                        <strong class="strong">{{getFormattedDate(this.$store.dateSelect)}}</strong>
                    </span>
                    <span class="d-flex title-secundary">- Especialidade:
                        <strong class="strong">{{this.specialtieName}}</strong>
                    </span>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid class="container-doctors">
            <card-doctor :key="user.id" @selectedtime="selectTime" v-for="user in this.$store.users" :user="user"
                         class="mb-5 card-doctor"/>
            <b-modal id="modalPagamento" hide-footer>
                <b-button class="mt-3" block @click="cloneModal">Fechar</b-button>
                <b-button class="mt-3" block @click="saveAppointment">Confirmar</b-button>
            </b-modal>
        </b-container>
    </div>
</template>

<script>
    import CardDoctor from "../components/CardDoctor";
    import {postAppointments} from "../api/appointments";
    export default {
        components: {CardDoctor},
        comments:{
            CardDoctor
        },
        data() {
            return{
                doctors: [],
                hourAppointment: {},
                specialtieName: ''
            }
        },
        mounted() {
            this.specialtieName = JSON.parse(localStorage.getItem('searchSpecialtie')).name;
        },
        methods:{
            async saveAppointment() {
                const response = await postAppointments(this.hourAppointment);
                if(response.ok){
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
            getFormattedDate(isoDate) {
                const todayTime = new Date(isoDate);
                const month = todayTime.getMonth() + 1;
                const day = todayTime.getDate();
                const year = todayTime.getFullYear();
                return  day + "/" + month + "/" + year;
            },
            async cloneModal() {
                        this.hourAppointment = {};
                        this.$bvModal.hide("modalPagamento");
            },
            async selectTime(payload) {
                const userId = localStorage.getItem("token");
                if(!userId){
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

<style scoped>
    /*sm*/
    @media (max-width: 767px)
    {
        .date-piker{
            width: 83%;
        }
        .height-main-col{
            height: 47vw;
        }
        .title-primary{
            color: rgb(229, 105, 90);
            font-size: 5vw;
            text-decoration: underline;
        }
        .title-secundary{
            font-size: 4vw;
            color: #069999;
        }
    }
    @media (min-width: 767px) {
        .date-piker{
            width: 90%;
        }
        .height-main-col{
            height: 27vw;
        }
        .date-piker{
            width: 55%
        }
        .title-primary{
            color: rgb(229, 105, 90);
            font-size: 2.8vw;
            text-decoration: underline;
        }
        .title-secundary{
            font-size: 2.3vw;
            color: #069999;
        }
    }
    .strong {
        color: #e5695a;
        font-weight: normal;
    }
    .btn.filter {
        height: 4vw;
        min-width: 10vw;
        max-width: 10vw;
        font-size: 1.3vw;
    }
    .btn.filter:hover{
        background-color: white;
    }
    .card-doctor {
        border-radius: 10px;
    }
    .container-doctors{
        margin-bottom: 13vw;
        padding-left: 10vw;
        padding-right: 10vw;
    }
</style>

