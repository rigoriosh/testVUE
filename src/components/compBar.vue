<template>
<div style="backgroud-color:red" id="mainPage">
    <v-container class="success">
        <v-layout wrap justify-space-around text-center>                          
            <v-flex xs3 align-self-center>            
                <v-menu bottom origin="center center" transition="expand-transition">
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" text small>
                            <v-icon>menu</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-icon>person</v-icon> Hola "Usuario"
                        <br>
                            <hr>                        
                        <v-list-item
                            v-for="(item, i) in items" :key="i" @click="selecion(item)">                    
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                        <!-- <br><br><br><br><br><br><br><br><br>
                        Salir -->
                    </v-list>
                </v-menu>
            </v-flex>  
            <v-flex xs2>
                <v-img src="https://www.icbf.gov.co/sites/default/files/icbf-logo_36.png" aspect-ratio="0.9" class="grey lighten-2"
                        max-width="70px"></v-img>
            </v-flex>
            <v-flex xs7 align-self-center>Menú Principal</v-flex>    
        </v-layout>
    </v-container>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'App',
  data: () => ({
    items: [        
        { title: 'Formularios' },
        { title: 'Datos capturados' },        
        { title: '' },{ title: '' },{ title: '' },        
        { title: 'Salir' },
      ],
  }),
  methods: {
        selecion(i){
            if (i.title == "Salir") {
                this.$router.push('/');
            }else if ("Formularios") {
                this.$router.push('/formularios');
            }else if ("Datos Capturados") {
                this.$router.push('/catchData');
            }
        }
    },
};


</script>


