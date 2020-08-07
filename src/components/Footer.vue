<style scoped lang="scss">

    main {
        background-color: #e5695a;
        height: 42rem;
        padding-left: 5rem;
        padding-top: 2.2em;

        .logo {
            height: 6.5rem;
        }

        .become-clinic {
            border: 0.2rem solid white;
            font-size: 1.5rem;
            width: 24rem;
            margin: 3rem 0;
        }

        .box-links {
            display: grid;
            grid-template-areas: "i ii";
            grid-template-columns: 1fr 3fr;

            font-size: 1.9rem;
            text-decoration-line: underline;
            color: #ffffff;

            .links-direito {
                grid-area: ii;
            }

            .links-esquerdo {
                grid-area: i;
            }


            li{
                height: 4rem;
            }

            li:hover {
                cursor: pointer;
            }

        }

        .redes-sociais {
            margin-top: 2rem;

            .discounts {
                font-style: normal;
                font-weight: normal;
                font-size: 2rem;
                color: #fed1cb;;
            }

            img {
                height: 4rem;
                margin-left: 2rem;
            }
        }

    }

    @media (max-width: 720px) {
        main {
            .box-links {
                grid-template-columns: 1fr 2fr;
            }
        }

    }
</style>

<template>
    <main>
        <img class="logo d-flex justift-start" src="../images/pluscin.svg" alt/>
        <b-button class="become-clinic button-primary  rounded-pill">Torne-se uma clínica PlusClin</b-button>
        <div class="box-links">
            <div class="links-esquerdo">
                <li>Sobre nós</li>
                <li>Central de Ajuda</li>
                <li>Fale Conosco</li>
                <li>Cartão Plusclin</li>
            </div>
            <div class="links-direito">
                <li>Especialistas</li>
                <li>Especialidades</li>
                <li>Motivo da sua consulta</li>
            </div>
        </div>
        <div class="redes-sociais">
            <span style class="discounts">Descontos e Novidades na nossa Rede Social</span>
            <img src="../images/instagram.svg" alt/>
            <img src="../images/facebook.svg" alt/>
        </div>
    </main>
</template>

<script>
    export default {
        name: "main-footer",
        components: {}
    };
</script>
