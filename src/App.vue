<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <RouterLink :to="{ name: 'Jobs' }">Jobs</RouterLink>
  </div>
  <router-view />

  <button @click="redirect">Redirect</button>
  <button @click="back">Got back</button>
  <button @click="forward">Go forward</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "App",
  setup() {
    const router = useRouter();

    const redirect = () => {
      router.push({ name: "About" });
    };
    const back = () => {
      router.go(-1);
    };
    const forward = () => {
      router.go(1);
    };

    return {
      redirect,
      back,
      forward
    };
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;

    &.router-link-exact-active {
      color: white;
      background: crimson;
    }
  }
}
</style>

<style lang="scss" scoped>
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
