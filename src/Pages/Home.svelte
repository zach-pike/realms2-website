<script lang="ts">
import BetterHr from "../misc/BetterHr.svelte";
import WhatsNew from "../PageComponets/WhatsNewList/WhatsNew.svelte";
import WhatsNewItem from "../PageComponets/WhatsNewList/WhatsNewItem.svelte";


</script>

<div class="">
    <p class="text-5xl font-bold headerFont ml-0 sm:ml-12">Whats new...</p>
    <WhatsNew>
        <WhatsNewItem>
            <p class="text-3xl bold">A cool news headline about the server</p>
            <BetterHr />
        </WhatsNewItem>
        <WhatsNewItem>
            <p class="text-3xl bold">A better news headline about the server</p>
            <BetterHr />
        </WhatsNewItem>
    </WhatsNew>
</div>

<style>
    .headerFont {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>