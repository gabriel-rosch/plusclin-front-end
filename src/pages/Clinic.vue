<template>
    <b-container fluid>
        <b-container  class="w-100">
            <b-row style="height: 30rem" align-v="center">
                <b-col>
                    <span v-if="specialties" class="d-flex span-primary title-clinic-doctor">{{specialties.name}}</span>
                    <span v-else class="d-flex span-primary name-specialties">ESPECIALIDADE NÃO ENCONTRADA</span>
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
        
    <div class="box-information">
      <div class="wallpaper">
        <div class="espacamento" />
        <div class="box1">
          <div class="header-box">
            <span class="fourth-class title-box">Consultas particulares no preço que você pode pagar</span>
            <div class="d-flex box px-5">
              <img class="px-5 w-25 icon" src="../images/card.svg" alt />
              <span
                class="secondary-class"
                style="font-size: 1.4vw;"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id luctus massa. Curabitur luctus orci ac quam fermentum mattis. Nullam in tortor placerat, gravida massa vel, lacinia arcu.</span>
            </div>
          </div>
        </div>
    <div class="box2">
        <div class="header-box">
            <span class="fourth-class title-box">Consultas particulares no preço que você pode pagar</span>
            <div class="d-flex box px-5">
              <img class="px-5 w-50 icon" src="../images/card.svg" alt />
              <span style="font-size: 1.4vw;" class="secondary-class">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id luctus massa. Curabitur luctus orci ac quam fermentum mattis. Nullam in tortor placerat, gravida massa vel, lacinia arcu.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="final-box">
      <div class="carrousel">
        <div class="botao-esquerdo">
          <img class="button-icon" src="../images/botao-esquerdo.svg" alt />
        </div>
        <div class="center-box">
          <div class="center-img">
            <img class="w-100" src="../images/velho.svg" alt />
          </div>
          <div class="center-text">
            <span class="secondary-class">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id luctus massa. Curabitur luctus orci ac quam fermentum mattis. Nullam in tortor placerat, gravida massa vel, lacinia arcu.</span>
          </div>
        </div>
        <div class="botao-direito">
          <img class="button-icon" src="../images/botao-direito.svg" alt />
        </div>
      </div>
      <div class="shared-box">
        <span class="primary-class shared-text">Compartilhe a sua experiência com a gente</span>
      </div>
    </div>
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

