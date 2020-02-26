<template>
    <b-container fluid>
        <b-container  class="w-100">
            <b-row style="height: 30rem" align-v="center">
                <b-col>
                    <span v-if="specialties" class="d-flex span-primary name-specialties">{{specialties.name}}</span>
                    <span v-else class="d-flex span-primary name-specialties">ESPECIALIDADE NÃO ENCONTRADA</span>
                    <span v-if="specialties" class="d-flex span-primary select-clinic">Escolha uma clínica</span>
                </b-col>
                <b-col>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid >
            <b-row style="height: 150rem">
                <b-col>

                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
    import {listSpecialtiesName} from '../api/specialties'
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
                array: [{id: 1}, {id: 2}, {id: 3}, {id: 4}],
                date: Object
            };
        },
        async mounted() {
            const response = await listSpecialtiesName(this.$route.params.nameSpecialties);
            if (response.ok) {
                this.specialties = await response.json()
            } else {
                this.specialties = null
            }

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

