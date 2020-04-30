<template>
    <div>
        {{availables}}
    </div>
</template>

<script>
    import {getAvailable} from "../api/available";

    export default {
        name: "card-doctor",
        props:{
            user: Object
        },
        data() {
            return {
                availables: []
            }
        },
        mounted() {
            this.loadAvailable();
        },
        methods:{
            async loadAvailable() {
                const response = await getAvailable(this.user.id);
                if(response.ok) {
                    this.availables = await response.json();
                }
            }
        }
    }
</script>

<style scoped>

</style>