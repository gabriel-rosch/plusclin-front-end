<style lang="scss"  scoped>
    .card-doctor {
        height: 15vw;
    }

    .avatar-shadow {
        align-items: center;
        box-shadow: rgba(0, 20, 100, 0.15) 10px 10px 10px;
    }

    .medic-name {
        font-size: 1.6vw;
        color: #069999;
        font-weight: bold;
        text-decoration: underline;
        width: 100%;
        height: 100%;
    }

    .medic-crm {
        margin-left: 1vw;
        color: slategray;
        border-color: slategray;
    }

    .grid-avatar {
        display: flex;
        width: 15%;
        margin-left: 1vw;
        margin-right: 1vw;
        align-items: center;
        justify-content: center;
    }

    .avatar{
        border: .1vw solid #069999;
    }
    .grid-date {
        width: 85%;
    }

    .hours {
        height: auto;
        display: flex;
        flex-wrap: wrap;
        height: auto;
    }


    .hour {
        display: flex;
        height: 2.5vw;
        margin-right: .5vw;
        margin-top: 0.5vw;
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
        font-size: 1vw;
        background-color: white;
    }

</style>
<template>
    <div class="d-flex card-doctor bg-white avatar-shadow">
        <div class="grid-avatar ">
            <b-avatar variant="info" class="avatar" :src="this.img" size="6.6vw"></b-avatar>
        </div>
        <div class="grid-date">
            <div class="medic-idetification">
                <span class="medic-name">{{user.name}}</span>
                <span class="medic-crm">CRM {{user.crm}}</span>
            </div>
            <div class="hours">
                <div class="hour" :key="item.index" v-for="item in this.availables">
                    <b-button @click="openModal(item)"
                              :class="['btn-hour', item.available ? 'btn-enabled': 'btn-disabled',item.available ? 'shadow' : '']">
                        {{item.time}}
                    </b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getAvailable} from "../api/available";
    import {listSpecialtiesByProvider} from "../api/specialties";
    import {getFile} from "../api/file";

    export default {
        name: "card-doctor",
        props: {
            user: Object
        },
        data() {
            return {
                availables: [],
                stringSpecialties: '',
                avatarUrl: '',
                img: 'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/10/medico-duvidas2.jpg?quality=70&strip=all'
            }
        },
        mounted() {
            this.loadAvailable();
            this.loadUserSpecialties();
            this.loadAvatar();
        },
        methods: {
            openModal(payload) {
                this.$emit('selectedtime', {
                    value: payload.value,
                    doctorId: this.user.id
                })
            },
            async loadUserSpecialties() {
                const {stringSpecialties} = await (await listSpecialtiesByProvider(this.user.id)).json();
                this.stringSpecialties = stringSpecialties;
            },
            async loadAvailable() {
                const response = await getAvailable(this.user.id, this.$store.dateSelect.getTime());
                if (response.ok) {
                    this.availables = await response.json();
                }
            },
            async loadAvatar() {
                const responseJson = await (await getFile(this.user.avatar_id)).json();
                this.avatarUrl = responseJson.url;
            }
        },

    }
</script>
