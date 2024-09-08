import { createRouter,createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Intro from "@/pages/Intro.vue";
import News from "@/pages/News.vue";
import Member from "@/pages/Member.vue";
import Resource from "@/pages/Resource.vue";
import Contactus from "@/pages/ContactUs.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/home",
            component:Home
        },
        {
            path:"/intro",
            component:Intro
        },
        {
            path:"/news",
            component:News
        },
        {
            path:"/member",
            component:Member
        },
        {
            path:"/resource",
            component:Resource
        },
        {
            path:"/contactus",
            component:Contactus
        },
        {
            path:"/",
            redirect:"/home"
        },
        
    ]
})

export default router
