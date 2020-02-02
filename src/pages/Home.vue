<template>
    <b-container>
        <main-header></main-header>
    </b-container>
</template>

<script>
    import Header from "../components/Header";

    export default {
        name: 'home',
        components: {
            Header
        }
    };
</script>

<style>
    .main-page {
        background-color: aqua;
    }
</style>

