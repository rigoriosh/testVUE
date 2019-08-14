<template>
  <div>
    <compBar />
    <v-container text-center>
      <v-layout>
        <v-flex >
          <h2>Bienvenidos al sistema de captura offLine</h2>
        </v-flex>
      </v-layout>
    </v-container>
    
  </div>
</template>

<script>
import compBar from '../components/compBar.vue';

export default {
  data() {
    return {
      b: this.updateThis(this),
    }
  },
  methods:{
    updateThis(){
      console.log(999999999);
      //this = globalThis.myThis;
      this.$store.state.usuarioCache = globalThis.usuarioCache;
    },
  },
  components: {
    compBar,
  },
};
</script>

<style>

</style>
