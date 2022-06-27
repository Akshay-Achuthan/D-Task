<template>
  <login-page></login-page>
</template>

<script>
import LoginPage from "./components/LoginPage.vue";

export default {
  components: {
    LoginPage,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  background-image: url("./Assets/background.jpg");
  background-size: cover;
}
</style>
