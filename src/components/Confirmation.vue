<style lang="scss" scoped>
    @import "src/styles/variable.scss";

    .modal-base {
        position: fixed;
        background: rgba($default-color-primary, 0.25);
        transition: opacity 340ms;
        visibility: hidden;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
    }

    .modal-base:target {
        opacity: 1;
        visibility: visible;
    }

    .confirmation {
        display: flex;
        flex-direction: column;
        margin: 70px auto;
        padding: 1.5rem 2.5rem 2.5rem 2.5rem;
        width: 30%;
        background: #fff;
        border-radius: 5px;
        position: relative;
        transition: all 5s ease-in-out;
    }

    .confirmation .content-header {
        display: flex;
        margin-bottom: 30px;
    }

    .confirmation .content-footer {
        display: flex;
        flex-direction: column;
    }

    .header-left {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    .header-right {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
    }

    .confirmation .title {
        display: flex;
        align-items: center;
        color: $default-color-primary;
        text-decoration: none;
    }

    .confirmation .close {
        display: flex;
        align-items: center;
        color: $default-color-primary;
        transition: all 200ms;
        font-size: 35px;
    }

    .confirmation .close:hover {
        color: $default-color-secondary;
    }

    .data-doctor {
        display: flex;
        flex-direction: row;
    }

    .data-schedule {
        display: flex;
        flex-direction: column;
        margin-left: 35%;
    }

    .data-patient {
        display: flex;
        flex-direction: column;
    }

    .info-doctor {
        display: flex;
        flex-direction: column;
        width: 65%;
    }

    .grid-avatar {
        width: 35%;
    }

    .info-name-doctor {
        width: 100%;
        color: $default-color-primary;
        font-size: $default-font-size;
        font-weight: bold;
    }

    .info-specialty-doctor {
        color: $default-color-secondary;
        font-size: $default-font-size;
    }

    .info-day-week {
        font-weight: bold;
        color: $default-color-secondary;
        font-size: $default-font-size;
    }

    .info-day-completed {
        color: $default-color-primary;
        font-size: $default-font-size;
    }

    .info-hour {
        color: $default-color-primary;
        font-size: $default-font-size;
    }

    .info-patient {
        font-weight: bold;
        color: $default-color-secondary;
        font-size: $default-font-size;
    }

    .info-name-patient {
        color: $default-color-primary;
        font-size: $default-font-size;
    }

    .info-identification-patient {
        color: $default-color-primary;
        font-size: $default-font-size;
    }

    .actions {
        display: flex;
        margin-top: 2rem;
        flex-direction: row-reverse;

        .back {
            font-size: $default-font-size * 0.70;
            background-color: $default-color-primary;
            height: 3.5rem;
            border: none;
            padding: $default-button-padding;
            border-radius: $default-border-radius;
        }

        .confirmation-schedule {
            margin-left: 1rem;
            font-size: $default-font-size * 0.70;
            background-color: $default-color-secondary;
            height: 3.5rem;
            border: none;
            padding: $default-button-padding;
            border-radius: $default-border-radius;
        }
    }

    @media screen and (max-width: 700px) {
        .confirmation {
            width: 70%;
        }
    }

    .avatar {
        border: $default-border solid $default-color-primary;
    }
</style>
<template>
    <div>
        <div id="confirmation" class="modal-base">
            <div class="confirmation">
                <div class="content-header">
                    <div class="header-right">
                        <a class="close" href="#">&times;</a>
                    </div>
                </div>
                <div class="content-footer">
                    <div class="data-doctor">
                        <div class="grid-avatar">
                            <b-avatar variant="info" class="avatar" :src="this.img" size="5.6vw"></b-avatar>
                        </div>
                        <div class="info-doctor">
                            <span class="info-name-doctor">{{(user.sexy === 'F'? "Dra." : "Dr.")}} {{user.name}}</span>
                            <span class="info-specialty-doctor">{{initCap(this.specialtieName)}}</span>
                        </div>
                    </div>
                    <div class="data-schedule">
                        <span class="info-day-week">Segunda-feira</span>
                        <span class="info-day-completed">7 de outubro (07/10)</span>
                        <span class="info-hour">08:00 (manhã)</span>
                    </div>
                    <div class="data-patient">
                        <span class="info-patient">Paciente</span>
                        <span class="info-name-patient">Ana Carolina de Souza</span>
                        <span class="info-identification-patient">CPF: 100.999.000-00</span>
                    </div>
                    <div class="actions" >
                        <b-button class="confirmation-schedule"> Pode agendar</b-button>
                        <b-button href="#" class="back">Voltar</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Confirmation",
        props: {
            user: Object
            , specialtieName: String
        }
        , data() {
            return {
                img: 'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/10/medico-duvidas2.jpg?quality=70&strip=all'
            }
        }
    }
</script>
