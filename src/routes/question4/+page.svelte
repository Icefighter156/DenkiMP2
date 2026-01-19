<script>
	import { goto } from "$app/navigation";
    import { score } from '$lib/stores/store';
    import { email4 } from '$lib/stores/store';


    function handleClick(value){
        score.update(s => {
        if (value === "Real") {
            return {
                correct: s.correct,
                wrong: s.wrong +1
            };
        } else {
            return {
                correct: s.correct +1,
                wrong: s.wrong 
            };
        }
    });


    email4.update(s => {
        if (value === "Real") {
            return {
                tipped: "Real",
                actually: "Fake"
            };
        } else {
            return {
                tipped: "Fake",
                actually: "Fake"
            };
        }
    });

        goto("/question5");
    }
</script>

<h1 class="h1Question">Fake or Real?</h1>

<div class="buttonDiv">
<button on:click={handleClick("Real")} class="RealButton">Real</button>
<button on:click={handleClick("Fake")} class="FakeButton">Fake</button>
</div>

<!-- img id="imgPage1" src="/images/email1.png" width="700" -->
<iframe src="/mail/fake/DB.html" width="70%"  height="1000px"></iframe>

