<style lang="scss" scoped>
    main {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: 'c-one c-two c-three';
        grid-template-rows: 90px;
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
                font-size: 1.3rem;
                text-decoration: underline;
                cursor: pointer;
            }
        }

        .login {
            display: flex;
            justify-content: center;
            align-items: center;

            :first-child {
                margin-right: 10px;
            }
        }

        .menu-toggle {
            display: none;
        }

        .icon {
            display: none;
        }
    }
    @media (max-width: 770px) {
        main {
            grid-template-rows: 60px;

            .logo {
                img {
                    display: flex;
                    width: 130px;
                }
            }

            .localization {
                display: none;
            }

            .login {
                display: none;
            }

            .icon {
                color: #E5695A;
                font-size: 30px;
                justify-self: center;
                align-self: center;
                grid-area: c-three;
                display: block;
                margin-left: 30px;
            }

            .menu-toggle.on body {
                overflow: hidden;
            }

            .menu-toggle.on {
                display: flex;
                justify-content: center;
                align-content: center;
                flex-direction: column;

                position: absolute;
                top: 60px;
                left: 0;
                background-color: #069999;
                opacity: 98%;

                width: 100vw;
                height: 100vh;

                button {
                    text-align: center;
                    display: block;
                    color: #fff;
                    font-size: 2rem;
                    margin: 30px;
                }

                .localization-toggle {
                    display: flex;
                    justify-content: center;
                    align-content: center;
                }

            }
        }
    }


</style>
<template>
    <header>
        <button class="shadow rounded-pill no-wrap button-primary" v-b-modal.modal-register>
            Cadastrar-se {{userName}}
        </button>
        <Login/>
        <Localization :props-city="this.city"/>
        <Register/>
        <main>
            <div class="logo">
                <img src="../images/logo1.svg" alt/>
            </div>
            <div class="localization">
                <img src="../images/localization.svg" alt/>
                <a class="secondary no-wrap" v-if="this.path === '/'" @click="openModalLocalization">{{this.citySelected.name}}
                    - SC</a>
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
                    <div class="login">
                        <button class="shadow rounded-pill no-wrap button-primary" v-b-modal.modal-register>
                            Cadastrar-se {{userName}}
                        </button>
                        <button class="shadow rounded-pill no-wrap button-primary" v-b-modal.modal-login>
                            Login
                        </button>
                    </div>
                </template>
            </div>
            <div :class="[{'on': showToggle},'menu-toggle']">
                <div class="localization-toggle">
                    <button class="no-wrap" v-if="this.path === '/'" @click="openModalLocalization">
                        {{this.citySelected.name}} - SC
                    </button>
                </div>
                <template v-if="!name">
                    <button @click="showToggle = false" v-b-modal.modal-register>Login</button>
                    <button @click="showToggle = false" v-b-modal.modal-login>Cadastrar-se</button>
                </template>
            </div>

            <b-icon @click="onToggle()" class="icon" icon="justify"/>
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
                name: "",
                img: "",
                city: {},
                path: "",
                showToggle: false
            };
        },
        name: "main-header",
        methods: {
            onToggle() {
                this.showToggle = !this.showToggle;
            },
            openModalLocalization() {
                this.$bvModal.show('modal-localization');
                this.showToggle = false;
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

