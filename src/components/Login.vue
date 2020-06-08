<template>
    <b-container class="d-flex" fluid>
        <b-modal class="d-flex" id="modal-login" hide-footer title="BootstrapVue">
            <b-alert
                    variant="danger"
                    :show="dismissCountDown"
                    @dismissed="dismissCountDown=0"
                    @dismiss-count-down="countDownChanged"
                    dismissible
            >
                <center>{{erro}}!</center>
            </b-alert>
            <template v-slot:modal-title>Login</template>
            <b-container class="d-flex px-3 flex-column">
                <b-row>
                </b-row>
                <b-row id="facebook" @click="signInWithFacebook" class="d-flex flex-column h-100 w-100 box-social m-0">
                    <b-button class="d-flex rounded-pill w-100 mb-3 tertiary-class" style="height: 4rem;">
                        <b-col cols="2">
                            <img src="../images/facebook-orig.svg"/>
                        </b-col>
                        <b-col cols="10" class="d-flex pl-0 align-self-center">
                            <span style="font-size: 1.1rem;">Conectar com meu Facebook</span>
                        </b-col>
                    </b-button>
                </b-row>
                <b-row @click="signInWithGoogle" id="google" class="d-flex flex-column h-100 w-100 box-social m-0">
                    <b-button class="d-flex rounded-pill w-100 mb-3 tertiary-class" style="height: 4rem;">
                        <b-col cols="2">
                            <img src="../images/google-orig.svg"/>
                        </b-col>
                        <b-col cols="10" class="d-flex pl-0 align-self-center">
                            <span style="font-size: 1.1rem;">Conectar com minha conta Google</span>
                        </b-col>
                    </b-button>
                </b-row>
                <b-form-group
                        class="tertiary-class"
                        label-cols-lg="12"
                        label-class="pl-4"
                        style=" font-size: 1.3rem;"
                        label="E-mail"
                >
                    <b-form-input
                            class="rounded-pill px-4"
                            id="email"
                            placeholder="Digite seu email aqui"
                            type="text"
                            v-model="email"
                            style="height: 4rem; border: 1.2px solid #069999"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                        class="tertiary-class"
                        label-cols-lg="12"
                        label-class="pl-4"
                        style=" font-size: 1.3rem;"
                        label="Senha"
                >
                    <b-form-input
                            class="rounded-pill px-4"
                            placeholder="Digite sua senha aqui"
                            type="password"
                            v-model="password"
                            style="height: 4rem; border: 1.2px solid #069999"
                    ></b-form-input>
                </b-form-group>
                <b-row class="m-0">
                    <b-col cols="8" class="align-self-center">
                        <a
                                @click="notAccount"
                                style="font-size: 1.1rem; color: #069999"
                                class="font-weight-bold float-right notAccount"
                        >Não possui uma conta</a>
                    </b-col>
                    <b-col class="px-8" cols="4">
                        <b-button
                                @click="login"
                                class="w-100 rounded-pill tertiary-class"
                                style="font-size: 1.3rem;"
                        >Login
                        </b-button>
                    </b-col>
                </b-row>
            </b-container>
        </b-modal>
    </b-container>
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

<style>
    .notAccount:hover {
        cursor: pointer;
    }
</style>