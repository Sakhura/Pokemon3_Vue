<template>
  <div>
    <div class="container">
      <h1>Buscador</h1>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Buscar personaje por ID"
          aria-label="Buscar personaje"
          aria-describedby="button-addon2"
          v-model="idPersonaje"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="inputGroup-sizing-lg"
          @click="buscar"
        >
          Buscar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idPersonaje: "", // El valor de búsqueda
    };
  },

  methods: {
    buscar() {
      if (this.idPersonaje.trim() === "") {
        alert("Por favor ingrese un ID válido"); // Puedes mostrar un mensaje si el campo está vacío
        return;
      }
      // Emitir el evento al componente padre con el ID del personaje
      this.$emit("search", this.idPersonaje);
      this.idPersonaje = ""; // Limpiar el campo después de la búsqueda
    },
  },
};
</script>

<style scoped>
/* Estilos opcionales si deseas personalizar el componente */
</style>
