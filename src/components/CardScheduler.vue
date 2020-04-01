<template>
    <div>
        <div class="d-flex flex-column"
             style="border: solid rgb(229, 105, 90) 0.1vw;border-radius: 0.5vw;background-color: white; padding: 1vw; width: 16vw;">
            <div class="d-flex" style="padding-bottom: 1vw;">
                <span class="secondary-class d-flex justify-content-start bold">{{formatDate(this.dados.date)}}</span>
                <span class="secondary-class d-flex justify-content-end bold">{{formatHour(this.dados.date)}}</span>
            </div>
            <div style="height: 3vw;">
                <span class="secondary-class d-flex justify-content-start">Doença Respiratória</span>
            </div>
            <div class="d-flex justify-content-end">
                <b-button v-bind:id="dados.date" class="d-flex primary-class p-0 m-0"
                          style="height: 2.5vw;font-size: 1.3vw;"
                          ref="button">Dados Completo
                </b-button>
            </div>
        </div>
        <b-popover
                :target="dados.date"
                triggers="click"
                :show.sync="popoverShow"
                placement="auto"
                ref="popover"
        >
            <div>
                <b-alert show class="small">
                    <strong>Dados Completos:</strong>
                    <br/>
                    <br/>Paciente:
                    <strong>{{this.dados.user.name}}</strong>
                    <br/>Data:
                    <strong>{{formatDate(this.dados.date)}}</strong>
                    <br/>Horário:
                    <strong> {{formatHour(this.dados.date)}}</strong>
                </b-alert>

                <b-button @click="cancelar(dados.id)" size="sm" variant="danger" class="mx-1">Cancelar</b-button>
                <b-button @click="onClose" size="sm" variant="success" class="mx-1">Confirmar</b-button>
                <b-button @click="onClose" size="sm" variant="primary" style="margin-left: 72px;">Ok</b-button>
            </div>
        </b-popover>
    </div>
</template>

<script>
    import {removeScheduler} from "../api/scheduler";

    export default {
        props: {
            dados: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                popoverShow: false
            };
        },
        methods: {
            onClose() {
                this.popoverShow = false;
            },
            formatDate(date) {
                date = new Date(date);
                var day = date.getDate();
                var mounth = date.getMonth() + 1;
                if (mounth <= 9) {
                    mounth = ("0" + mounth);
                }
                var year = date.getFullYear();
                var data = day + '/' + (mounth) + '/' + year;
                return data;
            },
            formatHour(date) {
                date = new Date(date);
                var hour = date.getHours();
                if (hour.toString().length == 1) {
                    hour = ("0" + hour);
                }
                var minutes = date.getMinutes();
                if (minutes.toString().length == 1) {
                    minutes = ("0" + minutes);
                }
                var timetable = hour + ":" + minutes;
                return timetable;
            }
            , async cancelar(id) {
                await removeScheduler(id);
                this.onClose();
                await this.$parent.SearchScheduling();
            }
        }
    };
</script>

