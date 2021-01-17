import { RouteRecordRaw } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Jobs from "@/views/jobs/Jobs.vue";
import JobDetails from "@/views/jobs/JobDetails.vue";
import NotFound from "@/views/NotFound.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true
  },
  {
    path: "/all-jobs",
    redirect: "/jobs"
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
];
