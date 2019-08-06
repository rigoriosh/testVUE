<template>
      <v-container  class="success">
        <br>
        <v-layout wrap>
          <v-flex xs4></v-flex>
          <v-flex xs4>
            <v-card>
                <v-img src="https://www.icbf.gov.co/sites/default/files/icbf-logo_36.png" aspect-ratio="0.9" class="grey lighten-2"
                  max-width="100%"></v-img>
            </v-card>
          </v-flex>
          <v-flex xs4></v-flex>
        </v-layout>            
            <br><br>
        <v-layout align-center justify-center>
          <v-flex align-self-center>            
              <v-card class="mb-1">
                <v-card-text style="background-color='red'">                
                  <v-form>
                    <v-flex xs12 sm12 md12 xl12>
                      <v-text-field v-model="usuario" autocomplete="" label="Usuario" prepend-icon="person"></v-text-field>
                    </v-flex>

                    <v-text-field v-model="password" autocomplete="" id="password" label="Contraseña" name="password" prepend-icon="lock" type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-sheet class="text-center" height="50px">
                  <v-spacer></v-spacer>
                  <v-btn block @click="login">
                    <v-icon class="mr-2">done_outline</v-icon> Ingresar</v-btn>
                </v-sheet>
              </v-card>
            
            <div id="errores" v-show="verError">
              <v-textarea v-model="error" solo name="input-7-4" label="Errors">
                <h2>Error: </h2>
                {{error}}
              </v-textarea>
            </div>          
          </v-flex>
        </v-layout>
      </v-container>
   

</template>
<script>
import {mapMutations} from 'vuex';
import Vue from 'vue';
import firebase from 'firebase';
export default {
  
  data(){
    return{
      usuario: '',
      password:'',
      error:'',
      verError:false
    }
  },
  methods:{
    login(){     
      firebase.auth().signInWithEmailAndPassword(this.usuario, this.password)
      .then((user) => {
        console.log("Token");
        console.log(user.user.refreshToken);
        this.ingresar();
      }, (error) => {
        console.log(error);
        this.verError = true;
        this.error = "Error: " + error.message;
      })
      .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    }); 
    },
    ingresar(){
      this.$router.push('/mainPage');
    }
  }
}

</script>