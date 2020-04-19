import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import EventCreate from "../views/EventCreate.vue";
// import EventCard from "../components/EventCard.vue";
// import FileNotFound from "../views/FileNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList
  },
  // {
  //   path: "/event",
  //   name: "event-show",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () =>
  //   // import(/* webpackChunkName: "about" */ "../views/EventShow.vue")
  //   component: EventShow
  // },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true
  }
  // {
  //   path: "/user/:username",
  //   name: "user",
  //   component: User,
  //   props: true
  // },
  // {
  //   path: "*",
  //   component: FileNotFound
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
