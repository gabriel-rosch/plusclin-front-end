<template>
    <b-container class="d-flex" fluid>
        <b-modal class="d-flex" id="modal-register" hide-footer title="BootstrapVue">
            <b-alert
                    variant="danger"
                    :show="dismissCountDown"
                    @dismissed="dismissCountDown=0"
                    @dismiss-count-down="countDownChanged"
                    dismissible
            >
                <center>{{erro}}</center>
            </b-alert>
            <template v-slot:modal-title>Cadastrar</template>
            <b-container class="d-flex px-5 flex-column">
                <b-row @click="signInWithFacebook" id="facebook" class="d-flex flex-column h-100 w-100 box-social m-0">
                    <b-button class="d-flex rounded-pill w-100 mb-3 tertiary-class" style="height: 4rem;">
                        <b-col cols="2">
                            <img src="../images/facebook-orig.svg"/>
                        </b-col>
                        <b-col cols="10" class="d-flex pl-0 align-self-center " style="font-size: 1.3rem;">
                            <span>Conectar com meu Facebook</span>
                        </b-col>
                    </b-button>
                </b-row>
                <b-row @click="signInWithGoogle" id="google" class="d-flex flex-column h-100 w-100 box-social m-0">
                    <b-button class="d-flex rounded-pill w-100 mb-3 tertiary-class" style="height: 4rem;">
                        <b-col cols="2">
                            <img src="../images/google-orig.svg"/>
                        </b-col>
                        <b-col cols="10" class="d-flex pl-0 align-self-center" style="font-size: 1.3rem;">
                            <span>Conectar com minha conta Google</span>
                        </b-col>
                    </b-button>
                </b-row>
                <b-form-group
                        class="span-secondary"
                        label-cols-lg="12"
                        label-class="pl-4"
                        style=" font-size: 1.3rem;"
                        label="Nome"
                >
                    <b-form-input
                            class="rounded-pill px-4"
                            id="name"
                            placeholder="Digite seu nome aqui"
                            type="text"
                            v-model="name"
                            style="height: 4rem; border: 1.2px solid #069999"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                        class="span-secondary"
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
                        class="span-secondary"
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
                <div class="form d-flex  align-self-center">
                    <div class="row">
                        <my-captcha :callSuccess="captchaOk" color="#e5695a" mode="math" resolve="text"></my-captcha>
                    </div>
                </div>
                <b-row class="m-0">
                    <b-col>
                        <b-button
                                @click="cadastrar"
                                class="float-right rounded-pill px-3 tertiary-class"
                                style="font-size: 1.3rem;"
                        >Cadastrar
                        </b-button>
                    </b-col>
                </b-row>
            </b-container>
        </b-modal>
    </b-container>
</template>

<script>

    import myCaptcha from 'vue-captcha';
    import {register} from "../api/register";
    import {createLogin} from "../scripts/Login";

    export default {
        components: {
            'my-captcha': myCaptcha
        },
        data() {
            return {
                btndis: true,
                captcha: false,
                password: "",
                email: "",
                name: "",
                erro: "",
                dismissSecs: 7,
                dismissCountDown: 0
            };
        },
        methods: {
            captchaOk() {
                this.captcha = true;
            },
            captchaBtn() {
                this.btndis = false
            },
            clicked() {
                alert('button active.!')
            },
            async cadastrar() {
                if (this.captcha) {
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
                }else{
                    formthis.erro = "Por favor, confirme o Captcha!";
                    this.showErrorAlert();
                }
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
            }, async signInWithFacebook() {
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