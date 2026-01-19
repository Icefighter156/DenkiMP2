<script>
	import { goto } from "$app/navigation";
    import { score } from '$lib/stores/store';
    import { email5 } from '$lib/stores/store';


    function handleClick(value){
        score.update(s => {
        if (value === "Real") {
            return {
                correct: s.correct +1,
                wrong: s.wrong
            };
        } else {
            return {
                correct: s.correct,
                wrong: s.wrong +1
            };
        }
    });


    email5.update(s => {
        if (value === "Real") {
            return {
                tipped: "Real",
                actually: "Real"
            };
        } else {
            return {
                tipped: "Fake",
                actually: "Real"
            };
        }
    });

        goto("/finish");
    }
</script>

<h1 class="h1Question">Fake or Real?</h1>

<div class="buttonDiv">
<button on:click={handleClick("Real")} class="RealButton">Real</button>
<button on:click={handleClick("Fake")} class="FakeButton">Fake</button>
</div>

<!-- img id="imgPage1" src="/images/email1.png" width="700" -->
<iframe src="/mail/real/Spotify.html" width="70%"  height="1000px"></iframe>

