<template>
  <b-card bg-variant="dark" text-variant="white" class="text-center card">
    <div class="scroll">
      <div class="grid-container">
        <b-link
          v-for="item in data_items"
          :key="item.index"
          :href="item.link"
          class="link-container"
          target="_blank"
        >
          <img v-if="item.image" class="image" :src="item.image" alt="" />
          <h2 v-else>{{ item.id }}</h2>
          <h2>{{ item.name || item.defaultName || item.id }}</h2>
        </b-link>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  props: ["data_items"],
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Anek+Latin:wght@300&display=swap");

/* SCROLL-BAR  */
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
}

/* Handle */
::-webkit-scrollbar-thumb {
  height: 10px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.7);
}

html {
  font-size: 62.5%;
}

h2 {
  font-family: "Anek Latin", sans-serif;
  text-align: center;
}

.grid-container a {
  text-decoration: none;
  color: #fff;
}

.image {
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border-radius: 50%;
}

.card {
  width: 40rem;
  height: 50rem;
  margin: 0 auto;
  /* border-radius: 4rem; */
  box-shadow: 2px 2px 10px #000;
  /* background-color: #000; */
  overflow-y: scroll;
}

.grid-container {
  display: grid;
  row-gap: 1rem;
  grid-template-rows: repeat(4, 130px);
  grid-template-columns: repeat(3, 120px);
  justify-content: center;
  padding: 2rem;
}

.link-container {
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
}

.link-container:hover {
  transition: transform 3s;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 5px 3px 5px rgba(0, 0, 0, 0.5);
}

.link-container a {
  font-size: 2rem;
  text-decoration: none;
}
</style>
