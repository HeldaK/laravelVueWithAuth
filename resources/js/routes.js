import VueRouter from "vue-router";
import Directory from "./components/Directory";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import axios from "axios";



const routes = [
    { 
        path: "/", 
        component: Directory,
        name: "directory"
    },

    { 
        path: "/register", 
        component: Register,
        name: "register"
    },

    {
        path: "/login", 
        component: Login,
        name: "login"
    },

    {
        path: "/dashboard", 
        component: Dashboard,
        name: "dashboard",
        beforeEnter: (to, from, next) => {
            axios.get(`api/authenticated`).then(()=>{
                next()
            }).catch(()=>{
                return next({name: 'login'})
            })
        }
    }

];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default  router;
  