<template>
    <b-container fluid class="bg-dark">
        <b-row class="h-25 w-75" style="background-color: #99cdcd"/>
        <b-row class="h-75 bg-secondary">
            <b-carousel
                    id="carousel-1"
                    class="h-100 w-100"
                    background="#ababab"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
            >
                <b-carousel-slide
                        caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/480/?image=52"
                ></b-carousel-slide>

            </b-carousel>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "ClinicCarousel",
        props:{
            cards: Array
        },
        data(){
            return {
            }
        }

    }
</script>

<style scoped>

</style>