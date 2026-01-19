<script>
    function handleClick(value){
        if(value === "Real"){
            alert("Correct! This email is real.");
        } else {
            alert("Incorrect. This email is real.");
        }
    }
</script>

<h1 class="h1Question">Fake or Real?</h1>

<div class="buttonDiv">
<button on:click={handleClick("Real")} class="RealButton">Real</button>
<button on:click={handleClick("Fake")} class="FakeButton">Fake</button>
</div>

<!-- img id="imgPage1" src="/images/email1.png" width="700" -->
<iframe src="/mail/fake/OPENAI.html" width="70%"  height="1000px"></iframe>

