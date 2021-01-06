<style scoped lang="scss">
    @import "src/styles/variable.scss";

    .modal-title {
        color: $default-color-primary;
    }

    .register-group {
        color: $default-color-primary;
    }

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
                border-radius: $default-border-radius;
                width: 100%;
                font-size: $default-font-size * 0.62;
                background-color: $default-color-primary;
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
    }

    .register-form {

        .register-group {
            font-size: 1.3rem;
            margin: 1rem 0;
        }

        .register-input {
            height: 4rem;
            padding: 0 1.5rem;
            border: $default-border solid $default-color-primary;
            border-radius: $default-border-radius;
        }
    }

    .register-action {
        display: grid;
        grid-template-areas: "i ii";
        grid-template-columns: 3fr 1fr;

        .haveAccount {
            font-size: $default-font-size * 0.65;
            color: $default-color-primary;
            font-weight: bolder;
            margin: auto 2rem auto auto;
        }

        .haveAccount:hover {
            cursor: pointer;
        }

        .action {
            font-size: $default-font-size * 0.70;
            background-color: $default-color-secondary;
            height: 3.5rem;
            border: none;
            padding: $default-button-padding;
            border-radius: $default-border-radius;
        }

    }

    @media (max-width: 720px) {
        .social {
            .network {
                font-size: $default-font-size !important;
            }
        }
    }

    @media (max-width: 640px) {
        .social {
            .network {
                font-size: $default-font-size !important;
            }
        }
    }

    @media (max-width: 500px) {
        .social {
            .network {
                font-size: $default-font-size  * 1.25 !important;
            }
        }
    }

    @media (max-width: 320px) {
        .social {
            .network {
                font-size: $default-font-size !important;
            }
        }
    }
</style>

<template>
    <div>
        <b-modal class="modal-login" id="modal-login" hide-footer>
            <b-alert
                    variant="danger"
                    :show="dismissCountDown"
                    @dismissed="dismissCountDown=0"
                    @dismiss-count-down="countDownChanged"
                    dismissible
            >
                {{erro}}!
            </b-alert>
            <template v-slot:modal-title><span class="modal-title">Login</span></template>
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
                       @click="notAccount"
                    >Não possui uma conta</a>
                    <b-button
                            @click="login"
                            class="action"
                    >Login
                    </b-button>
                </div>
            </main>
        </b-modal>
    </div>
</template>

<script>
    import {create} from "../api/session";
    import facebookLogin from 'facebook-login-vuejs';
    import {createLogin} from "../scripts/Login";

    export default {
        components: {
            // eslint-disable-next-line vue/no-unused-components
            facebookLogin,
        },
        data() {
            return {
                password: "",
                email: "",
                erro: "",
                dismissSecs: 7,
                dismissCountDown: 0
            };
        },
        methods: {
            async login() {
                const response = await create({
                    password: this.password,
                    email: this.email
                });
                if (response.ok) {
                    const session = await response.json();
                    localStorage.setItem("userName", session.user.name);
                    localStorage.setItem("provider", session.user.provider);
                    localStorage.setItem("token", session.token);
                    this.$parent.fillSession();
                    this.$bvModal.hide("modal-login");
                    if (session.user.provider) {
                        window.location.href = "/MinhaAgenda";
                    }
                } else {
                    const session = await response.json();
                    this.erro = session.error;
                    this.showErrorAlert();
                }
            },
            async notAccount() {
                this.$bvModal.hide("modal-login");
                this.$bvModal.show("modal-register");
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown;
            },
            showErrorAlert() {
                this.dismissCountDown = this.dismissSecs;
            }, async signInWithGoogle() {
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
                            LoginVUe.$bvModal.hide("modal-login");
                        } else {
                            if (login.status == "login") {
                                localStorage.setItem("userName", login.user.name);
                                localStorage.setItem("provider", login.user.provider);
                                localStorage.setItem("token", login.token);
                                localStorage.setItem("icon", result.user.photoURL);
                                LoginVUe.$parent.fillSession();
                                LoginVUe.$bvModal.hide("modal-login");
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
            }, async signInWithFacebook() {
                var LoginVUe = this;
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
                            LoginVUe.$parent.fillSession();
                            LoginVUe.$bvModal.hide("modal-login");
                        } else {
                            if (login.status == "login") {
                                localStorage.setItem("userName", login.user.name);
                                localStorage.setItem("provider", login.user.provider);
                                localStorage.setItem("token", login.token);
                                localStorage.setItem("icon", result.user.photoURL);
                                LoginVUe.$parent.fillSession();
                                LoginVUe.$bvModal.hide("modal-login");
                                if (login.user.provider) {
                                    window.location.href = "/MinhaAgenda";
                                }
                            } else {
                                LoginVUe.erro = login.error;
                                LoginVUe.showErrorAlert();
                            }
                        }
                    }).catch(function () {
                        LoginVUe.erro = "Você já fez login utilizando sua conta do Google, utilize-a.";
                        LoginVUe.showErrorAlert();
                    });
                }).catch(function () {
                }).catch(function () {
                    LoginVUe.erro = "Você já fez login utilizando sua conta do Google, utilize-a.";
                    LoginVUe.showErrorAlert();
                });
            }
        }
    };
</script>
