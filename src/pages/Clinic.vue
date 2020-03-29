<template>
    <div>
        <b-container  >
            <b-row class="height-main-col" align-v="center">
                <b-col>
                    <span v-if="this.$store.searchSpeciltie.name" class="title-primary d-flex span-primary">{{this.$store.searchSpeciltie.name}}</span>
                    <span v-else class="title-primary d-flex span-primary">ESPECIALIDADE NÃO ENCONTRADA</span>
                    <span v-if="this.$store.searchSpeciltie" class="d-flex title-secundary">Escolha a data da consulta</span>
                    <b-datepicker v-model="dateSelect" value-as-date selected-variant="secondary"  style="box-shadow: 3px 3px 6px rgba(0, 20,100,0.15);" class="date-piker" :max="max" :min="min" size="lg"/>
                    <span v-if="!clinics.length" style="color: rgb(229, 105, 90);" class="no-wrap d-flex title-secundary mt-5">Desculpe, as consultas para esta data já foram preenchidas :(</span>
                    <b-button @click="onFilter"  class="rounded-pill primary-class mt-3 filter">Filtrar</b-button>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid>
            <b-row v-if="clinics.length" :class="[clinics.length ? 'containerClinic': 'containerClinicNull']">
                <b-col class="align-content-center justify-content-center px-5" :key="item.id" v-for="item in clinics" cols="4">
                    <b-card-group>
                        <card-clinic
                                style="box-shadow: 10px 10px 10px rgba(0, 20,100,0.15);"
                                class="border"
                                :id="item.id"
                                :name="item.name"
                                :image="item.avatar.url"
                                :countUsers="item.Users.length"
                                :address="item.addresses"
                        />
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import {listSpecialtiesName} from '../api/specialties'
    import {listClinics} from '../api/clinic'
    import CardClinic from "../components/CardClinic";
    export default {
        components: {
            CardClinic
        },
        data() {
            const now = new Date()
            const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate() )
            const minDate = new Date(today)
            const maxDate = new Date(today)
            maxDate.setMonth(maxDate.getMonth() + 12)
            return {
                mode: 'single',
                selectedDate: null,
                date: Object,
                clinics: [],
                dateSelect: tomorrow,
                min: minDate,
                max: maxDate
            };
        },

        mounted() {
            this.load();
            this.loadClinics();
        },

        methods:{
            async load(){
                 const response = await listSpecialtiesName(this.$route.params.nameSpecialties);
                if (response.ok) {
                    this.$store.searchSpeciltie = await response.json()
                } else {
                    this.$store.searchSpeciltie = null
                }
            },
            async loadClinics(){
                const response = await listClinics(this.$store.searchSpeciltie.id, this.dateSelect.getTime());
                if (response.ok) {
                    this.clinics = await response.json()
                } else {
                    this.clinics = null
                }
            },
            onFilter(){
                this.loadClinics();
            }
        },
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
    .btn.filter {
        height: 4vw;
        min-width: 10vw;
        max-width: 10vw;
        font-size: 1.3vw;
    }
    .btn.filter:hover{
        background-color: white;
    }

    .containerClinic{
        margin-bottom: 13vw;
    }
</style>

