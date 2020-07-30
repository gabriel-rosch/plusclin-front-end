<style scoped lang="scss">
    main {
        padding: 2rem;

        .social {
            .network {
                display: grid;
                grid-template-areas: "i ii";
                grid-template-columns: 1fr 3fr;
                margin: 1rem 0;
                height: 4rem;
                border: none;
                border-radius: 2rem;
                width: 100%;
                font-size: 1.2rem;
                background-color: #069999;
                align-items: center;
                text-align: center;

                img {
                    grid-area: i;
                    margin: auto auto auto auto;
                    width: 3rem;
                }

                span {
                    grid-area: ii;
                    margin: auto auto auto 0;
                }
            }
        }

        .register-form {

            .register-group {
                font-size: 1.3rem;
                margin: 1rem 0;
            }

            .register-input {
                height: 4rem;
                padding: 0 1.5rem;
                border: 1.2px solid #069999;
                border-radius: 2rem;
            }
        }

        .register-action {
            display: grid;
            grid-template-areas: "i ii";
            grid-template-columns: 3fr 1fr;

            .haveAccount {
                font-size: 1.1rem;
                color: #069999;
                font-weight: bolder;
                margin: auto 2rem auto auto;
            }

            .haveAccount:hover {
                cursor: pointer;
            }

            .action {
                font-size: 1.3rem;
                background-color: #E5695A;
                height: 3.5rem;
                border: none;
                border-radius: 2rem;
            }

        }
    }

    @media (max-width: 720px) {
        .social {
            .network {
                font-size: 2rem  !important;
            }
        }
    }

    @media (max-width: 640px) {
        .social {
            .network {
                font-size: 2rem  !important;
            }
        }
    }

    @media (max-width: 500px) {
        .social {
            .network {
                font-size: 2.4rem !important;
            }
        }
    }

    @media (max-width: 320px) {
        .social {
            .network {
                font-size: 2rem  !important;
            }
        }
    }
</style>

<template>
    <div>
        <b-modal id="modal-register" hide-footer>
            <b-alert
                    variant="danger"
                    :show="dismissCountDown"
                    @dismissed="dismissCountDown=0"
                    @dismiss-count-down="countDownChanged"
                    dismissible
            >
                {{erro}}!
            </b-alert>
            <template v-slot:modal-title>Cadastrar-se</template>
            <main>
                <div class="social">
                    <b-button class="network" @click="signInWithFacebook">
                        <img src="../images/facebook-orig.svg"/>
                        <span>Conectar com meu Facebook</span>
                    </b-button>
                    <b-button class="network" @click="signInWithGoogle">
                        <img src="../images/google-orig.svg"/>
                        <span>Conectar com minha conta Google</span>
                    </b-button>

                </div>
                <div class="register-form">
                    <b-form-group label="Nome" class="register-group">
                        <b-form-input
                                class="register-input"
                                id="name"
                                placeholder="Digite seu nome aqui"
                                type="text"
                                v-model="name"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group label="E-mail" class="register-group">
                        <b-form-input
                                class="register-input"
                                id="email"
                                placeholder="Digite seu email aqui"
                                type="text"
                                v-model="email"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group label="Senha" class="register-group">
                        <b-form-input
                                class="register-input"
                                placeholder="Digite sua senha aqui"
                                type="password"
                                v-model="password"
                                style=""
                        ></b-form-input>
                    </b-form-group>
                </div>
                <div class="register-action">
                    <a class="haveAccount"
                       @click="haveAccount"
                    >Já possuo uma conta</a>
                    <b-button
                            @click="cadastrar"
                            class="action"
                    >Cadastrar
                    </b-button>
                </div>
            </main>
        </b-modal>
    </div>
</template>


<script>

    import {register} from "../api/register";
    import {createLogin} from "../scripts/Login";

    export default {
        components: {},
        data() {
            return {
                password: "",
                email: "",
                name: "",
                dismissSecs: 7,
                dismissCountDown: 0
            };
        },
        methods: {
            clicked() {
                alert('button active.!')
            },
            async cadastrar() {
                const response = await register({
                    password: this.password,
                    name: this.name,
                    email: this.email
                });
                if (response.ok) {
                    const session = await response.json();
                    localStorage.setItem("userName", session.name);
                    this.$parent.fillSession();
                    this.$bvModal.hide("modal-register");
                } else {
                    const session = await response.json();
                    this.erro = session.error;
                    this.showErrorAlert();
                }
            },
            async haveAccount() {
                this.$bvModal.hide("modal-register");
                this.$bvModal.show("modal-login");
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown;
            },
            showErrorAlert() {
                this.dismissCountDown = this.dismissSecs;
            },
            async signInWithGoogle() {
                var LoginVUe = this;
                // eslint-disable-next-line no-undef
                var provider = new firebase.auth.GoogleAuthProvider();
                // eslint-disable-next-line no-undef
                firebase.auth().signInWithPopup(provider).then(function (result) {
                    var user = result.user;
                    createLogin(user.uid, user.displayName, user.email).then(function (login) {
                        if (login.status == "register") {
                            localStorage.setItem("userName", login.name);
                            localStorage.setItem("icon", login.user.photoURL);
                            LoginVUe.$parent.fillSession();
                            LoginVUe.$bvModal.hide("modal-register");
                        } else {
                            if (login.status == "login") {
                                localStorage.setItem("userName", login.user.name);
                                localStorage.setItem("provider", login.user.provider);
                                localStorage.setItem("token", login.token);
                                localStorage.setItem("icon", result.user.photoURL);
                                LoginVUe.$parent.fillSession();
                                LoginVUe.$bvModal.hide("modal-register");
                                if (login.user.provider) {
                                    window.location.href = "/MinhaAgenda";
                                }
                            } else {
                                LoginVUe.erro = login.error;
                                LoginVUe.showErrorAlert();
                            }
                        }
                    }).catch(function () {
                    });
                }).catch(function () {
                });
            },
            async signInWithFacebook() {
                var LoginVue = this;
                // eslint-disable-next-line no-undef
                var provider = new firebase.auth.FacebookAuthProvider();
                provider.addScope('user_birthday');
                // eslint-disable-next-line no-undef
                firebase.auth().signInWithPopup(provider).then(function (result) {
                    var user = result.user;
                    createLogin(user.uid, user.displayName, user.email).then(function (login) {
                        if (login.status == "register") {
                            localStorage.setItem("userName", login.name);
                            localStorage.setItem("icon", result.user.photoURL);
                            LoginVue.$parent.fillSession();
                            LoginVue.$bvModal.hide("modal-register");
                        } else {
                            if (login.status == "login") {
                                localStorage.setItem("userName", login.user.name);
                                localStorage.setItem("provider", login.user.provider);
                                localStorage.setItem("token", login.token);
                                localStorage.setItem("icon", result.user.photoURL);
                                LoginVue.$parent.fillSession();
                                LoginVue.$bvModal.hide("modal-register");
                                if (login.user.provider) {
                                    window.location.href = "/MinhaAgenda";
                                }
                            } else {
                                LoginVue.erro = login.error;
                                LoginVue.showErrorAlert();
                            }
                        }
                    }).catch(function () {
                        LoginVue.erro = "Você já fez login utilizando sua conta do Google, utilize-a.";
                        LoginVue.showErrorAlert();
                    });
                }).catch(function () {
                    LoginVue.erro = "Você já fez login utilizando sua conta do Google, utilize-a.";
                    LoginVue.showErrorAlert();
                });
            }
        }
    };
</script>

<style>
</style>