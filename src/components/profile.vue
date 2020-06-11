<template>
<body>
  <header>
    <router-link to="/">
      <img src="../assets/logo.png" class="personal_picture" />
    </router-link>
    <h1>Breno gay</h1>
  </header>
  <ul class="centralize-list">
    <li class="list-photos-itens" v-for="photo in photos" :key="photo.lang">
      <img :src="photo.url"/>
    </li>
  </ul>
</body>
</template>

<script lang="ts">
export default {
  name: "Profile",
  data() {
    console.log("teste")
    return {
      photos: [{
        name: "teste",
        url: "https://www.designerd.com.br/wp-content/uploads/2019/05/perspectiva-e-angulo-para-fotos-como-fugir-do-lugar-comum-capa.jpg",
        description: "Bla bla bla bla bla. pi riririr piriri"
      }]
    };
  },
  }
</script>

<style scoped>
header {
  margin-top: 56px;
  margin-bottom: 40px;
  text-align: center;
}
.personal_picture {
  width: 56px;
  height: 56px;
}

.body {
  background-color: #1d1d1d;
  width: 96%;
  margin: 0 auto;
  color: aliceblue;
}
.centralize-list {
  list-style: none;
  width: auto;
}
.centralize-list .list-photos-itens {
  display: inline-block;
  padding: 10px;
}
</style>