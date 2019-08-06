import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import vuetify from "@/plugins/vuetify";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
            dark: true
        },
        themes: {
            light: {
                primary: "#ee44aa",
                secondary: "#424242",
                accent: "#82B1FF",
                error: "#FF5252",
                info: "#2196F3",
                success: "#72bf44",
                warning: "#FFC107"
            }
        }
    },
    icons: {
        iconfont: "mdi"
    }
});