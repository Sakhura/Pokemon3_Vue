<template>
  <div class="home">
    <form>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Ingrese Id o Nombre Pokemón"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          v-model="pokemon_name"
        />
        <button
          class="btn btn btn-success"
          type="button"
          id="button-addon2"
          @click="search"
        >
          Buscar
        </button>
      </div>
    </form>
    <!-- <ul>
      <li v-for="p in filter" :key="p.id">{{ p.name }}</li>
    </ul> -->

    <Pokemon></Pokemon>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Pokemon from "./PokemonPer.vue";
export default {
  data() {
    return {
      pokemon_name: "",
    };
  },
  components: { Pokemon },
  computed: {
    ...mapState(["pokemonesList", "nombrePokemon"]),
  },
  methods: {
    ...mapActions(["get_Pokemones", "obtenerPokemon"]),

    search() {
      if (this.pokemon_name != "") {
        this.obtenerPokemon(`${this.pokemon_name}`);
      } else {
        alert("Debe ingresar el nombre o id del pokemon");
      }
    },
  },

  created() {
    this.get_Pokemones();
  },
};
</script>
<style>
form {
  padding: 50px;
  width: 60%;
  margin: 0 auto;
}
</style>
