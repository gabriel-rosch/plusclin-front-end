<template>
    <b-card img-alt="Image" img-top>
        <b-card-img alt="imagem clinic"  class="place justify-content-center mb-4" :src="clinic.avatar.url"/>
        <b-card-title style="color: rgb(229, 105, 90);" >{{clinic.name}}</b-card-title>
        <b-card-text>
            <b-card-text  class="font-size-card">
                Cidade: {{clinic.addresses.city}}
                <br>
                Rua:    {{clinic.addresses.street}}
                <br>
                Numero: {{clinic.addresses.number}}
            </b-card-text>
            <b-button @click="onSelect()"  class="rounded-pill primary-class filter">Selecionar</b-button>
        </b-card-text>
        <template v-slot:footer>
            <small v-if="clinic.Users.length == 1" class="text-muted">{{clinic.Users.length}} especialista disponível</small>
            <small v-else class="text-muted">{{clinic.Users.length}} especialistas disponíveis</small>
        </template>
    </b-card>
</template>

<script>
    export default {
        name: "card-clinic",
        props:{
            id: Number,
            clinic:Object
        },
        methods: {
            onSelect(){
                this.$store.users = this.clinic.Users;
                this.$router.push({path:`/especialidade/${this.$store.searchSpeciltie.key}/${this.clinic.id}`})
            }
        }
    }
</script>

<style scoped>
    /*sm*/
    @media (max-width: 767px) {
        .font-size-card-main{
            font-size: 5vw;
        }
        .font-size-card{
            font-size: 4vw;
        }
    }



    @media (min-width: 767px) {
        .font-size-card-main{
            font-size: 1.8vw;
        }
        .font-size-card{
        }

    }
    .btn.filter {
        height: 4vw;
        min-width: 10vw;
        max-width: 10vw;
        font-size: 1.3vw;
    }
    .place{
        width: 100%;
        height: 10vw;

        background-position: center;
        background-size: cover;
    }
     .card-header{
         background-color: #fff;
     }
     .card-footer{
         background-color: #fff;
     }

     .card{
        font-size: 1vw;
        cursor: pointer;
        color: #069999;
    }
    strong{
        color: #E5695A;
        font-weight: normal;
        text-decoration-line: underline;
    }
</style>