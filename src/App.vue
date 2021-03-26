<template>
  <div id="app">
    <router-view></router-view>
    <navBar />
  </div>
</template>

<script>
import navBar from "./components/navBar.vue";

export default {
  name: "app",
  components: {
    navBar,
  },
  created() {
    if (localStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(localStorage.getItem("store"))
        )
      );
    }
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
};
</script>

<style>
html {
  font-size: 62.5%;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: scroll;
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

body {
  margin: 0;
}
</style>
