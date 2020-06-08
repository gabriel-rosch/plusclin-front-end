<template>
    <b-container fluid class="m-0 p-0">
        <Login/>
        <Register/>
        <Localization :props-city="this.city"/>
        <div class="d-flex c">
            <div class="d-flex c1">
                <img @click="paginaInicial" class="image-logo" src="../images/logo.svg" alt/>
            </div>
            <div class="d-flex c2">
                <img class="localization-image" src="../images/localization.svg" alt/>
                <div class="localization">
                    <span class="secondary-class">{{this.citySelected.name}} - SC</span>
                    <span v-if="this.path == '/'" v-b-modal.modal-localization class="tertiary-class">Essa não é minha localização</span>
                </div>
            </div>
            <div class="d-flex c3">
                <template v-if="!name">
                    <b-button
                            class="rounded-pill primary-class cadastrar"
                            v-b-modal.modal-register
                    >Cadastrar-se {{userName}}
                    </b-button>
                    <b-button v-b-modal.modal-login class="rounded-pill primary-class login">Login</b-button>
                </template>
                <template v-else>
                    <div class="userLogin">
                        <div class="rounded-pill p-0 m-0" style="min-width: 2.5vw; min-height: 2.5vw;">
                            <div v-if="this.img.length <= 9">
                                <b-icon-person-fill
                                        style="color: #e5695a; width: 2.5vw; height: 2.5vw;"></b-icon-person-fill>
                            </div>
                            <div v-else class="rounded-pill p-0 m-0" style="min-width: 2.5vw; min-height: 2.5vw;">
                                <img class="rounded-pill" style="width: 2.5vw; height: 2.5vw;"
                                     :src="this.img">
                            </div>
                        </div>
                        <span style="font-size: 1.2vw; " class="primary-class">Oi, {{this.userName}}!</span>
                    </div>
                    <b-button
                            style="height: 3vw;  margin-right: 2vw"
                            class="rounded-pill bold tertiary-class cadastrar"
                            @click="clearSession()"
                    >Sair
                    </b-button>
                </template>
            </div>
        </div>
    </b-container>
</template>

<script>
    import Login from "../components/Login";
    import Register from "../components/Register";
    import Localization from "../components/Localization";

    export default {
        components: {
            Login,
            Register,
            Localization
        },
        data() {
            return {
                name: ""
                , img: ""
                , city: {}
                , path: ""
            };
        },
        name: "main-header",
        methods: {
            fillSession() {
                this.name = localStorage.getItem("userName");
                var imagem = localStorage.getItem("icon");
                if (imagem != null) {
                    if (imagem.length > 20) {
                        this.img = imagem;
                    }
                }
                if (localStorage.getItem("city") != null) {
                    this.city = JSON.parse(localStorage.getItem("city"));
                } else if (this.city.name == null) {
                    this.city = {name: "Florianópolis", id: "1"}
                }
            },
            clearSession() {
                localStorage.removeItem("userName");
                localStorage.removeItem("icon")
                this.name = "";
                this.img = "";
                this.fillSession();
                window.location.href = "../";
            },
            paginaInicial() {
                window.location.href = "/#";
            }
        },
        mounted() {
            var imagem = localStorage.getItem("icon");
            if (imagem != null) {
                if (imagem.length > 20) {
                    this.img = imagem;
                }
            }
            var pathname = window.location.pathname;
            this.path = pathname;
        },
        computed: {
            userName() {
                return this.name;
            }, citySelected() {
                this.fillSession();
                return this.city;
            }
        }
    };
</script>

<style scoped>
    .c1,
    .c2,
    .c3 {
        display: flex;
        align-items: center;
    }

    .c1 {
        width: 27vw;
        padding-left: 3vw;
    }

    .c2 {
        width: 16vw;
        padding-left: 9vw;
    }

    .c3 {
        justify-content: flex-end;
        width: 35vw;
    }

    .userLogin {
        display: flex;
        padding-right: 5%;
        align-items: center;
        justify-content: flex-end;
    }

    .c1 img {
        min-width: 27vw;
        max-width: 27vw;
    }

    .c2 img {
        margin-right: 1vw;
        min-width: 2vw;
        max-width: 2vw;
    }

    .image-logo:hover {
        cursor: pointer;
    }

    .localization {
        display: grid;
    }

    .localization-image {
        width: 90%;
    }

    .btn.cadastrar {
        height: 4vw;
        min-width: 10vw;
        max-width: 10vw;
        font-size: 1.3vw;
        padding: 0;
    }

    .btn.login {
        height: 4vw;
        min-width: 10vw;
        max-width: 10vw;
        font-size: 1.3vw;
        padding: 0;
        margin-left: 1vw;
        margin-right: 2vw;
    }

    .btn-login:hover {
        background: rgba(205, 205, 205, 0.2);
        color: rgb(255, 255, 255) !important;
        background-color: rgba(229, 105, 90, 1) !important;
        border-color: rgba(215, 92, 90, 0.1);
    }

    .btn.sair {
        height: 4vw;
        width: 10vw;
        font-size: 1.3vw;
        padding: 0;
        margin-right: 5vw;
        margin-left: 1vw;
    }
</style>

