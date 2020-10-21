<style lang="scss" scoped>
    @import "src/styles/variable.scss";
    .b-calendar-inner {
        background-color: pink;
    }

    .b-calendar-nav {
        background-color: white !important;
    }

    button {
        background-color: pink;
        color: pink;
    }
</style>
<template>
    <div class="d-flex flex-column">
        <b-col cols="12" class="d-flex" style="margin-bottom: 2vw;margin-top: 5vw;">
            <b-calendar
                    class="d-flex p-0 m-0"
                    block
                    v-model="dataSelect"
                    @context="SearchScheduling"
                    hide-header
                    style="background-color: rgb(229, 105, 90); color: #00ff23; border-radius: 1vw;"
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

