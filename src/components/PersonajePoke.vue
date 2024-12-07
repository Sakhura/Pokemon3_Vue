<template>
    <div>
        <h1>Personaje</h1>

        <div class="container">


            <div class="card mb-3" style="max-width: 540px;" v-for="personaje in lista_personajes" :key="personaje.id">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img :src="personaje.image" class="img-fluid rounded-start">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Nombre: {{ personaje.name }} </h5>
                            <p class="card-text"> Id: {{ personaje.id }} </p>
                            <p class="card-text"> Especie: {{ personaje.species }} </p>
                            <p class="card-text"><small class="text-muted">Estado: {{ personaje.status }}</small></p>
                        </div>
                    </div>
                </div>


                <h5 class="card-title" style="text-align:start;">Episodios: </h5>
                <div id="global">
                    <div id="mensajes">
                        <div class="card-body text-dark">
                            <p class="card-text" v-for="(epi) in personaje.episode" :key="epi"> Episodio: {{epi.split("/")[5]}} </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>

</template>
<script>


export default {

    props: {
        lista_personajes: Array
    },
    data: function () {
        return {
          


        }
    },
    computed: {

    },
    methods: {



    },


}
</script>

<style scoped>
#global {
    height: 200px;
    width: 400px;
    border: 1px solid #ddd;
    background: white;
    overflow-y: scroll;
}

#mensajes {
    height: auto;
    text-align: start;
}
</style>