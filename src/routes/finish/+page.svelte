<script>
        import { score } from '$lib/stores/store';
        import { email1 } from '$lib/stores/store';
        import { email2 } from '$lib/stores/store';
        import { email3 } from '$lib/stores/store';
        import { email4 } from '$lib/stores/store';
        import { email5 } from '$lib/stores/store';

</script>


<h1 class="h1Finish">Your score {$score.correct}/5</h1>

<h1 class="h1FinishQuestion">1. Email </h1>

<p> Du hast getippt, dass diese E-Mail {$email1.tipped} ist! 

    {#if $email1.actually === $email1.tipped}
        <br> Damit hattest du recht!
        
    {:else}
        <br> Leider lagst du falsch. Diese E-Mail ist tatsächlich {$email1.actually}!
    {/if}
    <br> Das lässt sich vor allem an der Source E-Mail erkennen! 
    <br> Auch der Hyperlink führt auf eine verdächtige Seite!
</p>
<iframe src="/mail/fake/OPENAI.html" width="70%"  height="1000px"></iframe>



<h1 class="h1FinishQuestion">2. Email </h1>

<p> Du hast getippt, dass diese E-Mail {$email2.tipped} ist! 

    {#if $email2.actually === $email2.tipped}
        <br> Damit hattest du recht!
        
    {:else}
        <br> Leider lagst du falsch. Diese E-Mail ist tatsächlich {$email2.actually}!
    {/if}
    <br> Das lässt sich vor allem an der Source E-Mail erkennen!
</p>
<iframe src="/mail/fake/Microsoft.html" width="70%"  height="1000px"></iframe>



<h1 class="h1FinishQuestion">3. Email </h1>

<p> Du hast getippt, dass diese E-Mail {$email3.tipped} ist! 

    {#if $email3.actually === $email3.tipped}
        <br> Damit hattest du recht!
        
    {:else}
        <br> Leider lagst du falsch. Diese E-Mail ist tatsächlich {$email3.actually}!
    {/if}
    <br> Das lässt sich vor allem an der Source E-Mail erkennen!
</p>
<iframe src="/mail/real/google.html" width="70%"  height="1000px"></iframe>


<h1 class="h1FinishQuestion">4. Email </h1>

<p> Du hast getippt, dass diese E-Mail {$email4.tipped} ist! 

    {#if $email4.actually === $email4.tipped}
        <br> Damit hattest du recht!
        
    {:else}
        <br> Leider lagst du falsch. Diese E-Mail ist tatsächlich {$email4.actually}!
    {/if}
    <br> Das lässt sich vor allem an der Source E-Mail erkennen!
</p>
<iframe src="/mail/fake/DB.html" width="70%"  height="1000px"></iframe>



<h1 class="h1FinishQuestion">5. Email </h1>

<p> Du hast getippt, dass diese E-Mail {$email5.tipped} ist! 

    {#if $email4.actually === $email5.tipped}
        <br> Damit hattest du recht!
        
    {:else}
        <br> Leider lagst du falsch. Diese E-Mail ist tatsächlich {$email5.actually}!
    {/if}
    <br> Das lässt sich vor allem an der Source E-Mail erkennen!
</p>
<iframe src="/mail/fake/DB.html" width="70%"  height="1000px"></iframe>