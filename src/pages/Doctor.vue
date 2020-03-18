<template>
    <b-container fluid>
        <span>{{specialtie.name}}</span>
        <span>{{clinic}}</span>
    </b-container>
</template>

<script>

    import {listSpecialtiesName} from "../api/specialties";

    export default {
        components: {
        },
        data() {
            return {
                specialties: [],
                clinic: []
            };
        },
        async mounted() {
            await this.load();
        },
        methods:{
            async load(){
                const response = await listSpecialtiesName(this.$route.params.nameSpecialties);
                if (response.ok) {
                    this.specialties = await response.json()
                } else {
                    this.specialties = null
                }
                this.clinic = [{'clinc': this.$route.params.nameClinic}]
            },
        },
    }
</script>

<style scoped>



</style>

