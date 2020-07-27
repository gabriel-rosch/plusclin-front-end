<template>
    <div class="root">
        <Header/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
    import Footer from "./components/Footer";
    import Header from "./components/Header";

    export default {
        components: {
            Footer,
            Header
        },
        created() {
        }
    };
</script>
<style>
    @import "styles/global.css";

    * {
        font-family: 'Asap', sans-serif;
        font-style: normal;
        font-weight: normal;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        min-width: 320px;
    }

    input, button {
        outline: 0;
    }

    .root {
        background-image: url(images/wallpaper.png);
        background-repeat: no-repeat;
        background-size: 100%;
    }

    @media (max-width: 1220px) {
        html {
            font-size: 70%;
        }
    }

    @media (max-width: 1000px) {
        html {
            font-size: 55%;
        }
    }

    @media (max-width: 800px) {
        html {
            font-size: 50%;
        }
    }

    @media (max-width: 600px) {
        html {
            font-size: 45%;
        }
    }

    @media (max-width: 550px) {
        html {
            font-size: 40%;
        }
    }

    @media (max-width: 400px) {
        html {
            font-size: 35%;
        }
    }

    @media (max-width: 350px) {
        html {
            font-size: 33%;
        }
    }

</style>
