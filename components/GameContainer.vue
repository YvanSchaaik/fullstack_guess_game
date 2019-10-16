<template>
    <div class="game_form">
        <p>Enter a number between 0 and 100</p>
        <form class="form" action="">
            <input type="number" placeholder="Enter a number here">
        </form>
            <button class="button" type="submit">Submit</button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.game_form {
    text-align: center;
    border: 1px solid lightgrey;
    margin: 2px;
    display: inline-block;
    width: 30%;
    height: 30%;
}

.game_form input {
    width: 9rem;
    height: 1.5rem;
}

.button{
    background-color: orange;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    width: 30%;
    height: 2rem;
    margin-top: 0.5rem;
}
</style>