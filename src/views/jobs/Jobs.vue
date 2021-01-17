<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <RouterLink :to="{ name: 'JobDetails', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Job } from "../../models/Job";

export default defineComponent({
  name: "JobsPage",
  props: {},
  setup(props, context) {
    const jobs = ref<Job[]>([
      { id: 1, title: "Ninja UX Designer", details: "Accentors ire, tanquam rusticus castor.Nunquam imperium pars."},
      { id: 2, title: "Ninja Web Developer", details: "Noster olla cito acquireres messor est.Zirbuss persuadere in tectum!Sunt assimilatioes acquirere camerarius, audax onuses."},
      { id: 3, title: "Ninja Vue Developer", details: "Hercle, detrius mirabilis!, clemens compater!Idoleums sunt demissios de alter byssus."}
    ]);

    return {
      jobs
    };
  }
});
</script>

<style lang="scss" scoped>
.job {
  h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;

    &:hover {
      background: #ddd;
    }
  }

  a {
    text-decoration: none;
  }
}
</style>
