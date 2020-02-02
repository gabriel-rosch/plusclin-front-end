<template>
    <div class="component">
        <b-container>
            <b-row class="row">
                <b-col class="c1">
                    <img src="../images/logo.svg" alt="">
                </b-col>
                <b-col class="c2">2 of 3</b-col>
                <b-col class="c3">3 of 3</b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'main-header',
        components: {}
    };
</script>

<style scoped>
    .row {
        display: flex;
    }

    .row > * {
        display: flex;
    }

    .c1, .c2, .c3 {
        justify-content: center;
        align-items: center;
    }

    .c1 img {
        width: 90%;
        max-width: 250px;
    }
</style>

