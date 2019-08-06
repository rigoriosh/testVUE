<template>
  <v-container>
    <h1>Container</h1>
    <v-layout wrap text-center>
      <v-flex xs6 class="primary">
        <h1>colum1</h1>
      </v-flex>
      <v-flex class="secondary">
        <h1>colum2</h1>
      </v-flex>
    </v-layout>
    <v-layout class="mt-5 secondary" align-center justify-center fill-height style="height:300px">
      <v-flex xs3 class="info">
        <h4>centrado</h4>
      </v-flex>      
      <v-flex xs3 class="success">A</v-flex>      
    </v-layout>
    <v-layout class="mt-5 warning">
      <v-flex>
      <h1 class="text-right secondary mb-2">Lorem, ipsum dolor111.</h1>
      <h1 class="text-center primary">Lorem, ipsum dolor.</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>