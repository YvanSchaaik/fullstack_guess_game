<template>
  <div class="body">
    <div class="banner">
    </div>
    <div class="games_container">
      <GameContainer  player="Player 1" />
      <GameContainer  player="Player 2" />
      <GameContainer  player="Player 3" />
    </div>
  </div>
</template>

<script>
import GameContainer from '../components/GameContainer'
import axios from 'axios'

export default {
  name: "app",
  components: {
    GameContainer
  }, 
  //store the data
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.body {
  width: 100%;
}

.banner {
  /* background: url("../assets/header_banner.png") no-repeat;
  height: 25vh; */
  background: url("../assets/header_banner.png") no-repeat;
  height: 25vh;
  width: 100vw;
  background-size: 258%;
}

@media(min-width: 40rem) {
  .banner {
    background: url("../assets/header_banner.png") no-repeat;
    height: 25vh;
    width: 100%;
    background-size: 100%;
  }
}

.games_container {
  display: inline-block;
  width: 100%;
  margin-left: 2rem;
}
</style>
