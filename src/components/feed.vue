<template>
<body id="feed_body">

    <div class="partition"></div>

    <div class="descriptions">
      <router-link to="/Profile">
        <img src="../assets/logo.png" class="personal_picture"/>
      </router-link>
      <p class="presentationText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur alias earum. Impedit, iure optio quod id placeat illum labore quo facilis minima beatae rem eos cupiditate error repellat temporibus.
      </p>
    </div>

    <div class="partition"></div>

</body>

</template>

<script>
export default {
  // name: 'Feed',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#feed_body {
  /* width: 100vw; */
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #262626;
  color: whitesmoke;
  /* background-image: url("https://i.picsum.photos/id/10/2500/1667.jpg?blur=2");
  background-size: cover; */
}
.presentationText{
  width: 300px;
}
.descriptions {
  padding: 20px;
}
.partition {
  height: 80%;
  width: 2px;
  background-color: #670000;
}
.personal_picture{
  width: 56px;
  height: 56px;
}
</style>
