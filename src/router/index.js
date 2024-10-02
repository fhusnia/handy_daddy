import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import WhyUs from "@/views/WhyUs.vue";
import LLottery from "@/views/LLottery.vue";
import Refrigerator from "@/views/Refrigerator.vue";
import ContactC from "@/views/ContactC.vue";
import Join from "@/views/Join.vue";
import Privacy from "@/views/Privacy.vue";
import Faq from "@/views/Faq.vue";
import RefRepair from "@/views/RefRepair.vue";
import Blog from "@/views/Blog.vue";
import BlogDetail from "@/views/BlogDetail.vue";
import Service1 from "@/views/Service1.vue";
import Service2 from "@/views/Service2.vue";
import HomeAppliance from "@/views/HomeAppliance.vue";
import Error from "@/views/Error.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/whyus",
      name: "WhyUs",
      component: WhyUs,
    },
    {
      path: "/lottery",
      name: "LLottery",
      component: LLottery,
    },
    {
      path: "/appliance/:id",
      name: "Appliance",
      component: Refrigerator,
    },
    {
      path: "/contact",
      name: "Contact",
      component: ContactC,
    },
    {
      path: "/join",
      name: Join,
      component: Join,
    },
    {
      path: "/privacy",
      name: Privacy,
      component: Privacy,
    },
    {
      path: "/faq",
      name: Faq,
      component: Faq,
    },
    {
      path: "/refrepair",
      name: RefRepair,
      component: RefRepair,
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog,
    },
    {
      path: "/blog/:id",
      name: "BlogDetail",
      component: BlogDetail,
    },
    {
      path: "/service1",
      name: Service1,
      component: Service1,
    },
    {
      path: "/service2",
      name: Service2,
      component: Service2,
    },
    {
      path: "/homeappliances",
      name: HomeAppliance,
      component: HomeAppliance,
    },
    {
      path: "/Error",
      name: Error,
      component: Error,
    },
  ],
});

// const routes = [
//   {
//     path: '/',
//     component: DefaultLayout,
//     children: [
//       {
//         path: '',
//         component: Home,
//       },
//     ],
//   },
// ]

// const router = new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// });

// export default router;
