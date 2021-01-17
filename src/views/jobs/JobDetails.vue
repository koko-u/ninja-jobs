<template>
  <h1>Job Details Page</h1>
  <p>The job is is {{ id }}</p>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Job Details Page",
  props: {
    id: {
      type: Number as PropType<number>,
      required: true
    }
  },
  setup(props, context) {
    return {};
  }
});
</script>

<style lang="scss" scoped>

</style>
