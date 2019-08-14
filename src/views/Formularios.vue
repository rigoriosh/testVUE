<template>
<div>
    <compBar />        
        <v-layout mr5 align-center justify-center fill-height style="height:300px" class="ml-2">
            <v-flex >
                <v-card  class="mt-5" max-width="300" tile>
                    <v-list dense>
                    <v-subheader>FORMULARIOS</v-subheader>
                    <v-list-item-group v-model="item" color="primary">
                        <v-list-item
                        v-for="(item, i) in items" :key="i" @click="selecion(item)">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>        
        </div>
</template>
<script>
import compBar from '../components/compBar.vue';
  export default {
    data: () => ({
      item: 0,
      items: [
        { text: 'Formulario 1', icon: 'description' },
        { text: 'Formulario 2', icon: 'description' },
        { text: 'Regresar', icon: 'backspace' },
      ],      
    }),
    methods: {
        selecion(i){
            console.log(i);
            if (i.text == "Regresar") {
                this.$router.push('/mainPage');
            }else if (i.text == "Formulario 1") {
                this.$router.push('/form1');
            }else if (i.text == "Formulario 2") {
                this.$router.push('/formulario2');
            }
        }
    },
     components: {
    compBar,
    },
  }
</script>