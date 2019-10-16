<template>
  <div class="body">
    <div class="banner">
    </div>
    <div class="games_container">
      <GameContainer class="game_container" />
      <GameContainer class="game_container" />
      <GameContainer class="game_container" />
    </div>
  </div>
</template>

<script>
import GameContainer from '../components/GameContainer'
export default {
  components: {
    GameContainer
  }
}
</script>

<style>
.banner {
  background: url("../assets/header_banner.png") no-repeat border-box;
  background-position: left 15%;
  background-size: 100%;
  width: 100vw;
  height: 8vh;
  padding-bottom: 8.5rem;
  margin: 1rem;
}
/* 
.games_container {
 background-color: white;
 border: 1px solid black;
 margin-top: 0.5rem;
 width: 100vw;
} */

/* .game_container {
  margin: 1rem;
  padding: 0.8rem;
  border: 1px solid lightgrey;
  display: inline-block; 
} */
</style>
