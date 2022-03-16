import { createStore, createLogger } from "vuex";
const debug = process.env.NODE_ENV !== "production"
import app from "./app"

export default createStore({
    modules: {
        app
    },
    strict: debug, 
    plugins: debug ? [createLogger()] : []
})