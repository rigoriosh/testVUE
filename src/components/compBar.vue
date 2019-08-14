<template>
    <div style="backgroud-color:red" id="mainPage">
        <!-- <v-container class="success"> -->
            <v-container class="#e0e0e0">        
            <v-layout wrap justify-space-around text-center>                          
                <v-flex xs3 align-self-center>            
                    <v-menu bottom origin="center center" transition="expand-transition">
                        <template v-slot:activator="{ on }">
                            <v-btn v-on="on" text small>
                                <v-icon>menu</v-icon>
                            </v-btn>
                        </template>

                        <v-list v-model="user">
                            <v-icon>person</v-icon> Hola,  {{user}}
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
import {mapMutations} from 'vuex';
import Vue from 'vue';
export default {
 
  data: () => ({
    items: [        
        { title: 'Formularios' },
        { title: 'Datos capturados' },        
        { title: '' },{ title: '' },{ title: '' },        
        { title: 'Salir' },
      ],
      user: "rigo"
  }),
  methods: {
        selecion(i){
            if (i.title == "Salir") {
                var db = new PouchDB("icbfCache");
                let userCache = globalThis.usuarioCache;
                db.remove(userCache);
                console.log(7878);
                globalThis.usuarioCache = null;
                this.$router.push('/');
            }else if ("Formularios") {
                this.$router.push('/formularios');
            }else if ("Datos Capturados") {
                this.$router.push('/catchData');
            }
        },
        updateUser(){
            console.log("updateUser");
        }
    },
};


</script>


