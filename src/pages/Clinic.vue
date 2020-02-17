<template>
    <b-container class="h-75">
        <b-row class="h-75" align-v="center">
            <b-col>
                <span class="d-flex span-primary name-specialties">{{specialties}}</span>
                <span class="d-flex span-primary select-clinic">Escolha uma clínica</span>
            </b-col>
            <b-col>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        components:{
        },
        data() {
            return {
                specialties: null,
                mode: 'single',
                selectedDate: null,
            };
        },
        mounted() {
            this.specialties = this.$route.params.nameSpecialties;
        }
    }
</script>

<style>
    .name-specialties {
        font-size: 3vw;
        font-weight: normal;
        font-family: 'Asap Condensed', sans-serif;
        text-decoration-line: underline;
    }

    .select-clinic {
        font-family: 'Asap Condensed', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 3vw;

        color: #069999;
    }

</style>

