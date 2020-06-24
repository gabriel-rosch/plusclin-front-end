<template>
    <div>
        <b-container  >
            <b-row class="height-main-col" align-v="center">
                <b-col>
                    <span v-if="this.searchSpeciltie.name" class="title-primary d-flex span-primary">{{this.searchSpeciltie.name}}</span>
                    <span v-else class="title-primary d-flex span-primary">ESPECIALIDADE NÃO ENCONTRADA</span>
                    <span v-if="this.searchSpeciltie.name" class="d-flex title-secundary">Escolha a data da consulta</span>
                    <b-datepicker v-model="dateSelect" @hidden="onFilter" value-as-date selected-variant="secondary"  style="box-shadow: 3px 3px 6px rgba(0, 20,100,0.15);" class="date-piker" :max="max" :min="min" size="lg"/>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid>
            <b-row v-if="clinics.length" :class="[clinics.length ? 'containerClinic': 'containerClinicNull']">
                <b-col class="align-content-center justify-content-center px-5" :key="clinic.id" v-for="clinic in clinics" cols="4">
                    <b-card-group>
                        <card-clinic
                                style="box-shadow: 10px 10px 10px rgba(0, 20,100,0.15);"
                                class="border"
                                :clinic="clinic"
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
                max: maxDate,
                searchSpeciltie: {}
            };
        },

        mounted() {
            this.load();
            this.onFilter()
        },

        methods:{
            async load(){
                const response = await listSpecialtiesName(this.$route.params.nameSpecialties);
                if (response.ok) {
                    this.searchSpeciltie = await response.json();
                    localStorage.setItem('searchSpecialtie',JSON.stringify(this.searchSpeciltie));
                } else {
                    localStorage.removeItem('searchSpecialtie')
                }
            },
            async loadClinics(){
                const response = await listCklinics(this.searchSpeciltie.id, this.dateSelect.getTime());
                if (response.ok) {
                    this.clinics = await response.json()
                } else {
                    this.clinics = null
                }
            },
            onFilter(){
                this.$store.dateSelect = this.dateSelect;
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

