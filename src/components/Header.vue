<style scoped>
    .login {
        padding: 10px;
    }
    .localization > img {
        width: 30px;
        margin-right: 10px;
    }
    .localization {
        display: flex;
    }
    @media (min-width: 990px) {
        .nav-bar {
            height: 110px;
        }
        .logo img{
            cursor: pointer;
            flex-grow: 0;
            flex-shrink: 0;
            width: 250px;
            margin-left: 20px;
        }
        .login button {
            padding: 10px 15px;

        }
    }
    /*Mobile*/
    @media (max-width: 990px) {
        .nav-bar {
            height: 60px;
        }
        .logo img{
            cursor: pointer;
            flex-grow: 0;
            flex-shrink: 0;
            width: 130px;
        }
        .localization {
            align-items: center;
            margin-left: 10px;
        }
        .localization > img {
            visibility: hidden;
            order: 3;
        }
        .login button {
            font-size: 15px;
            margin-left:0 !important;
            width: 115px;
            white-space: nowrap;
            height: 33px;
        }
        .login {
            width: 300px;
            display: flex;
            flex-direction: column;
        }
    }
</style>
<template>
    <div>
        <Login/>
        <Localization :props-city="this.city"/>
        <Register/>
        <b-navbar class="nav-bar" toggleable="lg" >
            <b-navbar-brand class="logo" href="/">
                <img src="../images/logo1.svg" alt/>
            </b-navbar-brand>

            <!--botão mobile-->
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-collapse id="nav-text-collapse" is-nav>
                <b-navbar-nav class="mx-auto localization-order">
                    <div class="localization">
                        <img src="../images/localization.svg" alt/>
                        <a v-if="this.path === '/'" class="secondary-class" @click="openModalLocalization">{{this.citySelected.name}} - SC</a>
                    </div>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="login-order">
                    <template v-if="name">
                        <div class="login">
                            <div class="rounded-pill" style="min-width: 2.5vw; min-height: 2.5vw;">
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
                                class="rounded-pill bold tertiary-class"
                                @click="clearSession()"
                        >Sair
                        </b-button>
                    </template>
                    <template v-else>
                        <div class="login mr-5">
                            <b-button
                                    class="rounded-pill primary-class h2 "
                                    v-b-modal.modal-register>
                                Cadastrar-se {{userName}}
                            </b-button>
                            <b-button class="rounded-pill primary-class h2 ml-3" v-b-modal.modal-login>
                                Login
                            </b-button>
                        </div>
                    </template>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
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
            openModalLocalization(){
                this.$bvModal.show('modal-localization');
            },
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

