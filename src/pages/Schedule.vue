<style lang="scss" scoped>
    @import "src/styles/variable.scss";
    .box-date {
        .form-control {
            color: $default-color-primary !important;
        }

        .btn-outline-secondary {
            color: $default-color-primary !important;
            border: none !important;
            background-color: transparent;
        }

        .btn-outline-secondary:active {
            border-color: $default-color-primary !important;
            background-color: $default-color-secondary !important;
        }

        .btn-outline-secondary:hover {
            border-color: $default-color-primary !important;
            background-color: $default-color-secondary !important;
        }

        .btn-outline-secondary:focus {
            border-color: $default-color-primary !important;
        }

        .b-calendar-grid {
            width: 100%;

            button {
                color: white;
            }

            .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {
                background-color: $default-color-primary !important;
            }


            footer {
                visibility: hidden;
            }


            span {
                background-color: $default-color-secondary !important;
                color: white !important;
            }

            .btn-outline-secondary:hover {
                background-color: $default-color-primary !important;
            }

            .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
                background-color: $default-color-primary !important;
            }
        }

        .b-calendar-nav .disabled {
            opacity: 0;
        }

        .b-calendar-nav button:last-child {
            opacity: 0;
        }
    }
</style>
<template>
    <div class="d-flex flex-column">
        <b-col cols="12" class="d-flex" style="margin-bottom: 2vw;margin-top: 5vw;">
            <b-calendar
                    class="d-flex p-0 m-0 box-date"
                    block
                    v-model="dataSelect"
                    @context="SearchScheduling"
                    hide-header
                    style="background-color: rgb(229, 105, 90); color: #00ff23;"
            ></b-calendar>
        </b-col>
        <b-row class="p-0" style="margin-left: 2.2vw;">
            <b-col cols="2" class="p-0" style="margin-left: 2.3vw; margin-bottom: 2vw;" :key="app.id"
                   v-for="(app) in appointments">
                <CardScheduler :dados="app"></CardScheduler>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import {listSchedulerForData} from "../api/scheduler";
    import CardScheduler from "../components/CardScheduler";

    export default {
        components: {
            CardScheduler
        },
        data() {
            return {
                dataSelect: new Date()
                , appointments: []
            };
        },
        methods: {
            async SearchScheduling() {
                this.scheduler = [];
                const response = await listSchedulerForData(this.dataSelect);
                var scheduler = await response.json();
                this.appointments = scheduler.appointments;
            }
        }
    };
</script>

