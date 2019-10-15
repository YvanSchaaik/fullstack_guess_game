<template>
  <div class="main">
    <img class="banner" src="../assets/header_banner.png" alt="Banner of flags">
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
* {
  box-sizing: border-box;
}

</style>
