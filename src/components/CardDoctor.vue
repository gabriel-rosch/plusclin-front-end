<template>
    <b-row class="bg-white">
        <b-col class="doctor col-3 p-5">
            <b-avatar src="https://placekitten.com/300/300" size="7vw"></b-avatar>
        </b-col>
        <b-col class="pt-5">
            <span class="d-flex title-secundary">{{user.name}}</span>
            <div class="d-flex">
                <span class="d-flex title-secundary-specialtie">{{stringSpecialties}}</span>
            </div>
        </b-col>
    </b-row>
</template>

<script>
    import {getAvailable} from "../api/available";
    import {listSpecialtiesByProvider} from "../api/specialties";

    export default {
        name: "card-doctor",
        props:{
            user: Object
        },
        data() {
            return {
                availables: [],
                stringSpecialties: ''
            }
        },
        mounted() {
            this.loadAvailable();
            this.loadUserSpecialties();
        },
        methods:{
            async loadUserSpecialties(){
                const {stringSpecialties} = await (await listSpecialtiesByProvider(this.user.id)).json();
                this.stringSpecialties = stringSpecialties;
            },
            async loadAvailable() {
                const response = await getAvailable(this.user.id, this.$store.dateSelect.getTime());
                if(response.ok) {
                    this.availables = await response.json();
                }
            }
        }
    }
</script>

<style scoped>
    .title-secundary{
        font-size: 1.8vw;
        color: #069999;
        font-weight: bold;
        text-decoration: underline;
    }
    .title-secundary-specialtie{
        font-size: 1.8vw;
        color: #e5695a;
    }
</style>