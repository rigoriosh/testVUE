<template>
      <v-container  class="#e0e0e0">
        <br>
        <v-layout align-center justify-center>
          
          <v-flex xs6 sm4 md3 xl2>
            <v-card>              
                <v-img src="../assets/logoICBF.png" aspect-ratio="0.9" class="grey lighten-2"
                  max-width="100%"></v-img>
            </v-card>
          </v-flex>
          
        </v-layout>            
            <br><br>
        <v-layout align-center justify-center>
          <v-flex align-self-center xs12 sm9 md5 lg4 xl3>            
              <v-card class="mb-1" color="#e0e0e0">
                <v-card-text>                
                  <v-form>                    
                      <v-text-field v-model="usuario" autocomplete="" label="Usuario" prepend-icon="person"></v-text-field>                  
                    <v-text-field v-model="password" autocomplete="" id="password" label="Contraseña" name="password" prepend-icon="lock" type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-sheet class="text-center" height="50px" color="#e0e0e0">
                  <v-spacer></v-spacer>
                  <v-btn @click="login" color="#e0e0e0">
                    <v-icon class="mr-2">done_outline</v-icon> Ingresar</v-btn>
                </v-sheet>
              </v-card>
            
            <div id="errores" v-show="verError">
              <v-textarea v-model="error" solo name="input-7-4" label="Errors" background-color="#e0e0e0"
              rows=2>
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
import { Promise } from 'q';
export default {  
  
  data(){
    return{
      usuario: '',
      password:'',
      error:'',
      verError:false,
      //a: this.$store.commit('showTodos')
      a: this.showTodos()
    }
  },
  methods:{
    login(){
      if (this.$store.state.logIn) {                           
          firebase.auth().signInWithEmailAndPassword(this.usuario, this.password)
          .then((user) => {
            console.log("Token");
            console.log(user.user.refreshToken);
            this.ingresar(user);            
          }, (error) => {
            console.log(error);
            if(error.message == "The email address is badly formatted."){
              error.message = "Formato de usuario invalido";
            }else if (error.message == "The password is invalid or the user does not have a password.") {
              error.message = "contraseña invalida o el usuario no tiene una";
            }
            this.verError = true;
            this.error = "Error: " + error.message;
          })
          .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        }); 
      }else{        
        this.$router.push('/mainPage');
      }
    },
    ingresar(user){
      this.$store.state.user = user.user.email;
      var db = new PouchDB("icbfCache");
      var todo = {
                _id: new Date().toISOString(),
                token: user.user.refreshToken,
                completed: false
            };           
            db.put(todo, function callback(err, result) {
                if (!err) {
                    console.log("Successfully posted a icbfCache!");                    
                }
            });
            console.log(7878);
            this.$store.state.db = db;
            this.showTodos();
            this.$router.push('/mainPage');
      /*this.$store.commit('createDB');
      this.$store.state.logIn = false;
      this.$store.commit('addpassw', token);
      this.$router.push('/mainPage');*/
    },
    showTodos(){      
      var db = this.$store.state.db;
      console.log(111111);
      console.log(this);
      globalThis.myThis = this;
      db = new PouchDB("icbfCache");            

      let consultaCache = new Promise(function (resolve, reject) {
          db.allDocs({ include_docs: true, descending: true }, function(err, doc) {
                console.log(doc);
                //redrawTodosUI(doc.rows);
                resolve(doc);
            }).then(function (doc) {
              console.log(doc);
              if (doc.rows.length > 0) {                
              if (doc.rows[0].doc.token) {
                globalThis.usuarioCache = doc.rows[0].doc                  
                    console.log(6969);
                    globalThis.myThis.$router.push("/mainPage");
                }
            }
            });
      });            
    }
  },
  
}

</script>