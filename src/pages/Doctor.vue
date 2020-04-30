<template>
    <div>
        <b-container  >
            <b-row class="height-main-col" align-v="center">
                <b-col>
                    <span class="title-primary d-flex span-primary">SELECIONE SEU HORÁRIO</span>
                    <span v-if="this.$store.searchSpeciltie" class="d-flex title-secundary">E tenha um ótioma consulta!</span>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid>
            <b-row class="container-doctors">
                <b-col :key="user.id" v-for="user in this.$store.users">
                    <card-doctor :user="user"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import CardDoctor from "../components/CardDoctor";
    export default {
        components: {CardDoctor},
        comments:{
            CardDoctor
        },
        data() {
            return{
                doctors: []
            }
        },
        mounted() {
            this.load()
        },

        methods:{
            async load(){
                if(this.$store.searchSpeciltie && this.$route.params.clinicId) {
                    // eslint-disable-next-line
                    console.log(this.$store.users)
                }
            },

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

    .container-doctors{
        margin-bottom: 13vw;
    }
</style>

