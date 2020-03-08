<template>
    <b-card class="text-center card"
            body-class="body">
        <b-card-header>
            <img :src="image" alt="imagem da clinica" class="rounded-circle" style="opacity:1;border: .07rem solid #e5695a; height: 15rem; width: 20rem">
        </b-card-header>
        <b-card-footer>
            <b-card-title class="p-3" style="font-size: 1.8vw">
                <strong>{{name}}</strong>
            </b-card-title>
            <b-card-text class="py-3" style="font-size: 1.4vw">
                <tamplate  v-if="countUsers > 1">
                    {{countUsers}} especialistas disponíveis
                </tamplate>
                <tamplate v-else>
                    {{countUsers}} especialista disponível
                </tamplate>
                <br>
                {{address.city}} - {{address.street}}
                <br>
                numero: {{address.number}}
            </b-card-text>
        </b-card-footer>

    </b-card>
</template>

<script>
    export default {
        name: "CardClinic",
        props:{
            name: {type: String, required: true},
            image: String,
            countUsers: Number,
            address: Object

        },
        methods: {
        }
    }
</script>

<style scoped>
     .card-header{
         background-color: #fff;
     }
     .card-footer{
         background-color: #fff;
     }

     .body{

     }
     .card{
        font-family: 'Asap Condensed', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 1vw;
        cursor: pointer;
        color: #069999;
         opacity: 0.95;
    }
    strong{
        color: #E5695A;
        font-weight: normal;
        text-decoration-line: underline;
    }
</style>