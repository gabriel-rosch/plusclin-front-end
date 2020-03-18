<template>
    <b-container fluid>
        <b-container  class="w-100">
            <b-row style="height: 30rem" align-v="center">
                <b-col>
                    <span v-if="specialties" class="d-flex span-primary title-clinic-doctor">{{specialties.name}}</span>
                    <span v-else class="d-flex span-primary name-specialties title-clinic-doctor">ESPECIALIDADE NÃO ENCONTRADA</span>
                    <span v-if="specialties" class="d-flex span-primary select-clinic">Escolha uma clínica</span>
                </b-col>
                <b-col>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid >
            <b-row >
                <b-col class="align-content-center justify-content-center p-5" :key="item.id" v-for="item in clinics" sm="12" md="4" mg="4">
                    <card-clinic
                            style="border: .2rem solid; border-radius: 10px !important;"
                            :name="item.name"
                            :image="item.avatar.url"
                            :countUsers="item.Users.length"
                            :address="item.addresses"
                    />
                </b-col>
            </b-row>
        </b-container>
    </b-container>
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
            return {
                specialties: null,
                mode: 'single',
                selectedDate: null,
                date: Object,
                clinics: []
            };
        },
        async mounted() {
             await this.load();
             await this.loadClinics();
        },
        methods:{
            async load(){
                const response = await listSpecialtiesName(this.$route.params.nameSpecialties);
                if (response.ok) {
                    this.specialties = await response.json()
                } else {
                    this.specialties = null
                }
            },
            async loadClinics(){
                const response = await listClinics(this.specialties.id);
                if (response.ok) {
                    this.clinics = await response.json()
                } else {
                    this.clinics = null
                }
            }
        },
    }
</script>

<style scoped>

    .select-clinic {
        font-family: 'Asap Condensed', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 3vw;

        color: #069999;
    }


</style>

