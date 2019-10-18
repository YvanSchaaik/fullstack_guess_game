<template>
    <div class="game">
        <h2>{{this.player}}</h2>
        <p>Enter a number between 0 and 100</p>
        <form  @submit="submitGuess" class="form">
            <input class="input" type="number" v-model="guess">
            <button class="btn" type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {

    name: "GameContainer",
    props: {
        //Pass the props down from index.vue
        player: String
    },
    //Store the data
    data() {
        return {
            guess: Number,
        }
    },
    methods: {
        submitGuess(e) {
            e.preventDefault()
            axios.get('http://localhost:5000/guess')
                .then(res => {
                    if (this.guess < res.data.guess) {
                        return console.log(`${this.player} said ${this.guess}: Higher`)
                    } else if (this.guess > res.data.guess) {
                        return console.log(`${this.player} said ${this.guess}: Lower`)
                    } else {
                        this.winningNumber = false
                        return console.log(`${this.player} said ${this.guess}: BINGO!`)
                    }
                })
                .catch(err => console.log(err))
        },
    }
}
</script>

<style scoped>
.game {
    text-align: center;
    display: block;
    border: 1px solid lightgrey;
    margin-top: 1rem;
    width: 100%;
    height: 30vh;
    color: grey;
}


h2 {
    margin: 1rem;
}

.game form {
    margin: 1rem;
}

.input {
    width: 6rem;
    height: 2.5rem;
    margin-bottom: 0.5rem;
}

.btn {
    background: orange;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    width: 5rem;
    height: 2.5rem;
    margin: 0 auto;
    display: block;
}

@media(min-width: 40rem) {
    .game {
    text-align: center;
    display: inline-block;
    border: 1px solid lightgrey;
    margin-top: 1rem;
    width: 30%;
    height: 30vh;
    }

.game form {
    margin: 1rem;
}

.input {
    width: 6rem;
    height: 2.5rem;
    margin-bottom: 0.5rem;
}

.btn {
    background: orange;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    width: 5rem;
    height: 2.5rem;
    margin: 0 auto;
    display: block;
}
}
</style>