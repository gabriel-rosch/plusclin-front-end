<style>
    .popover {
        font-size: 24px;
    }
    .btn-save-medical-record {
        margin-left: auto;
    }
    .modal-mediacl-records {
        width: 900px;
    }
</style>

<template>
    <div>
        <div class="d-flex flex-column"
             style="border: solid rgb(229, 105, 90) 0.1vw;border-radius: 0.5vw;background-color: white; padding: 1vw; width: 16vw;">
            <div class="d-flex" style="padding-bottom: 1vw;">
                <span class="secondary-class d-flex justify-content-start bold">{{formatDate(this.dados.date)}}</span>
                <span class="secondary-class d-flex justify-content-end bold">{{formatHour(this.dados.date)}}</span>
            </div>
            <div style="height: 3vw;">
                <span class="secondary-class d-flex justify-content-start">Pediatria</span>
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
                class="popover"
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
                <div class="d-flex">
                    <div class="h-100 d-flex">
                        <b-button @click="cancelar" variant="danger" class="font-weight-bolder mr-1">Cancelar</b-button>
                        <b-button @click="openMedicalRecord" variant="success" class="font-weight-bolder mx-1">Prontuário</b-button>
                    </div>
                    <b-button @click="onClose" variant="primary" class="ml-3 font-weight-bolder">Ok</b-button>

                </div>
            </div>
        </b-popover>
        <div>
            <b-modal :id="`modal-medical-record-${this.dados.id}`" size="lg" hide-footer title="Prontuário">
                <b-form-textarea
                        v-model="modelText"
                        placeholder="Prontuário da consulta..."
                        rows="10"
                        max-rows="200"
                ></b-form-textarea>
                <b-button @click="saveMedicalRecord" class="d-flex primary-class mt-3 w-25 btn-save-medical-record">
                    Salvar
                </b-button>
            </b-modal>
        </div>
        <b-toast id="success-toast" title="Aviso!" static no-auto-hide>
            Prontuário salvo com sucesso!
        </b-toast>
    </div>
</template>

<script>
    import {removeScheduler} from "../api/scheduler";
    import {getMedicalRecord, postMedicalRecord} from "../api/medicalRecord";

    export default {
        props: {
            dados: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                popoverShow: false,
                modelText: ""
            };
        },
        methods: {
            onClose() {
                this.popoverShow = false;
            },
            async openMedicalRecord() {
                this.$root.$emit('bv::hide::popover');
                const response = await getMedicalRecord(this.dados.id);
                if(response.ok) {
                    const {text} = await response.json();
                    this.modelText = text;
                }
                this.$bvModal.show(`modal-medical-record-${this.dados.id}`);
            },
            async saveMedicalRecord() {
                await postMedicalRecord({
                    appointment_id: this.dados.id,
                    text: this.modelText
                });
                this.$bvModal.hide(`modal-medical-record-${this.dados.id}`);
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
            },
            async cancelar() {
                await removeScheduler(this.dados.id);
                this.onClose();
                await this.$parent.SearchScheduling();
            }
        }
    };
</script>

