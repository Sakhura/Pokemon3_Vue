import { createStore } from 'vuex';  // Correcto: importamos createStore desde vuex
import axios from 'axios';

// Crear el store de Vuex
const store = createStore({
  state: {
    pokemonesList: [],
    pokemon: undefined,
  },
  mutations: {
    GET_POKEMONES(state, pokemones) {
      state.pokemonesList = pokemones;
    },
    COLOCAR_NOMBRE(state, poke) {
      state.pokemon = poke;
    },
  },
  actions: {
    get_Pokemones({ commit }) {
      axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
        commit("GET_POKEMONES", response.data.results);
      });
    },

    obtenerPokemon({ commit }, id) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
        commit("COLOCAR_NOMBRE", response.data);
      });
    },
  },
  modules: {},
});

export default store;
