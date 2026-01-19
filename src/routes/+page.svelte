<script>
	import { goto } from "$app/navigation";
	import { score } from '$lib/stores/store';

	score.update(s => {
    
            return {
                correct: 0,
                wrong: 0
        }});

</script>


<h1 id="h1Start">Welcome to Miniprojekt 2</h1>

<button id="buttonStart" on:click={goto("/question1")}>Click to start</button>

