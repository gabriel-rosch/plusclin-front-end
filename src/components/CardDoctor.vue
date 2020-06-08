<template>
    <b-row class="bg-white avatar-shadow">
        <b-col class="doctor col-3 p-5">
            <b-avatar src="https://placekitten.com/300/300" class="avatar-shadow" size="11vw"></b-avatar>
        </b-col>
        <b-col class="pt-5">
            <span class="d-flex title-secundary">{{user.name}}</span>
            <div class="d-flex mb-3 title-primary">
                <span class="d-flex">{{stringSpecialties}}</span>
            </div>
            <b-row class="w-100 mb-5">
                <b-col cols="2" :key="item.index" class="mb-3" v-for="item in this.availables">
                    <b-button @click="openModal(item)" :class="['btn-hour', item.available ? 'btn-enabled': 'btn-disabled',item.available ? 'shadow' : '']">
                        {{item.time}}
                    </b-button>
                </b-col>
            </b-row>
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
            openModal(payload) {
                this.$emit('selectedtime', {
                    value: payload.value,
                    doctorId: this.user.id
                })
            },
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
    .avatar-shadow{
        box-shadow: rgba(0, 20, 100, 0.15) 10px 10px 10px;
    }
    .title-secundary{
        font-size: 1.8vw;
        color: #069999;
        font-weight: bold;
        text-decoration: underline;
    }
    .title-primary {
        font-size: 1.8vw;
        color: #e5695a;
    }
    .btn-disabled {
        color: slategray;
        border-color: slategray
    }
    .btn-enabled {
        color: #e5695a;
        border: #e5695a solid .15rem;
    }
    .btn-hour {
        font-size: 1.8vw;
        background-color: white;
    }
</style>