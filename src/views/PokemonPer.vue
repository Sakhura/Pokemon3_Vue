<template>
  <div class="container" v-if="pokemon">
    <div class="centrar">
      <div class="card border-danger border-3 mb-4">
        <div class="card-header bg-transparent border-warning border-3">
          Pokémon {{ pokemon.id }}
        </div>
        <div class="card-body text-primary">
          <img style="width: 250px" :src="pokemon.sprites.front_default" />
          <h5 class="card-title">Nombre: {{ pokemon.name }}</h5>

          <h5 class="card-title">Habilidades:</h5>
          <div v-for="habilidad in pokemon.abilities" :key="habilidad.id">
            <h5 class="card-text">{{ habilidad.ability.name }}.</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["pokemonesList", "pokemon"]),

    // filterList(){
    //     return this.pokemonesList((poke) =>{
    //         return poke.id = this.$route.params.id
    //     })
    // }
  },
  methods: {
    ...mapActions(["get_Pokemones", " obtenerPokemon"]),
  },
  created() {
    this.get_Pokemones();
  },
};
</script>
<style scoped>
.centrar {
  /*IMPORTANTE*/
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
