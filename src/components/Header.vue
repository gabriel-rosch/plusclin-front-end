<style lang="scss" scoped>
    main {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        height: 90px;
        width: 100%;
        .logo {
            padding: 0 10px;
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
        }
        .localization {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                margin-right: 7px;
            }
            a {
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
    @media (max-width: 770px) {
        main {
            height: 60px;
            .logo {
                img {
                    display: flex;
                    width: 130px;
                }
            }
            .localization {
                img {
                    width: 20px;
                    margin-right: 3px;
                }
            }
        }
    }
</style>
<template>
    <header>
        <Login/>
        <Localization :props-city="this.city"/>
        <Register/>
        <main>
            <div class="logo">
                <img src="../images/logo1.svg" alt/>
            </div>
            <div class="localization">
                <img src="../images/localization.svg" alt/>
                <a class="secondary" v-if="this.path === '/'" @click="openModalLocalization">{{this.citySelected.name}} - SC</a>
            </div>
            <div class="login">
                <template v-if="name">
                    <div>
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
                        <span class="primary-class">Oi, {{this.userName}}!</span>
                    </div>
                    <b-button
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
            </div>
        </main>

    </header>
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

