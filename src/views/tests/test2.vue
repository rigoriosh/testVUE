<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-btn>btn</v-btn>
                <v-btn  class="ma-2" rounded color="primary" dark>Rounded Button</v-btn>
                <v-btn class="ma-2" outlined color="indigo">Outline Button</v-btn>
                <v-btn>
                    <v-icon class="mr-2">forum</v-icon>
                    myText
                </v-btn>
                <v-btn class="ma-2">
                    <v-icon left>forum</v-icon>
                    myText
                </v-btn>
                <v-btn fab dark small color="purple">
                    <v-icon color="red">accessibility</v-icon>
                </v-btn>
                
                <v-btn class="ma-2" fab dark color="purple">
                    <v-icon color="red">accessibility</v-icon>
                </v-btn>                
                <v-btn fab dark large color="purple">
                    <v-icon color="red">accessibility</v-icon>
                </v-btn>
                
                <v-btn text>
                    "https://material.io/resources/icons/?style=baseline"
                    <v-icon color="red">comment</v-icon>
                </v-btn>
                <v-btn depressed color="black" dark>btn2</v-btn>
                <v-btn class="ma-2" color="primary"  text small>btn3</v-btn>
                <v-btn color="blue" dark>btn</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="blue" large>btn</v-btn>
                <v-btn class="ma-2" color="yellow" small>btn</v-btn>
                <v-btn color="green" disabled>btn</v-btn>
                <v-spacer></v-spacer>
                <v-btn class="ma-2" color="white" :disabled="true">btn</v-btn>
            </v-flex>

        </v-layout>
    </v-container>
</template>


<script>
export default {
    
}
</script>