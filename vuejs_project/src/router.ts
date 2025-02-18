import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import Login from "@/pages/Login.vue";
import NotFound from "@/pages/NotFound.vue";
import Register from "@/pages/Register.vue";
import ChefList from "@/pages/ChefList.vue";
import ChefDetail from "@/pages/ChefDetail.vue";
import Cart from "@/pages/Cart.vue";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/ChefList',
            component: ChefList
        },
        {
            path: '/chef/:id',
            name: 'ChefDetail',
            component: ChefDetail
        },
        {   path: '/cart', 
            name: 'Cart', 
            component: Cart 
        }, 
        { 
            path: '/:pathMatch(.*)*', 
            name: 'NotFound', 
            component: NotFound 
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log("Navigation vers :", to.path);
    next();
  });
  

export default router