<template>
  <div class="container">
    <img class="banner" src="../assets/header_banner.png" alt="Banner of flags">
    <GameContainer />
    <GameContainer />
    <GameContainer />
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

img {

}
</style>
