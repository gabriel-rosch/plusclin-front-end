<style lang="scss" scoped>
    @import "src/styles/variable.scss";

    .card-doctor {
        height: 15vw;
    }

    .avatar-shadow {
        align-items: center;
        box-shadow: rgba(0, 20, 100, 0.15) 10px 10px 10px;
    }


    .medic-name {
        font-size: $default-font-size;
        color: $default-color-primary;
        font-weight: bold;
        text-decoration: underline;
        width: 100%;
        height: 100%;
    }

    .medic-crm {
        font-size: $default-font-size * 0.60;
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

    .avatar {
        border: $default-border solid $default-color-primary;
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
        border: slategray solid $default-border;
    }

    .btn-enabled {
        color: $default-color-secondary;
        border: $default-color-secondary solid $default-border;
    }

    .btn-hour {
        font-size: 1vw;
        background-color: white;
    }

</style>
<template>
    <div class="d-flex card-doctor bg-white avatar-shadow">
        <Confirmation :user="userSelected" :item="timeSelected" :specialtieName="this.specialtieName"/>
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
                    <b-button
                            @click="openConfirmation(user, item)"
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
    import Confirmation from "../components/Confirmation";

    export default {
        components: {
            Confirmation
        },
        name: "card-doctor",
        props: {
            user: Object
            , specialtieName: String
        },
        data() {
            return {
                availables: [],
                userSelected: null,
                timeSelected: null,
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
            openConfirmation(user, item) {
                this.userSelected = user;
                this.timeSelected = item;
                window.location.href = "#confirmation";
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
