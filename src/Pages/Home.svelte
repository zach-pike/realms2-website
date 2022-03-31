<script lang="ts">
import BetterHr from "../misc/BetterHr.svelte";
import WhatsNew from "../PageComponets/WhatsNewList/WhatsNew.svelte";
import WhatsNewItem from "../PageComponets/WhatsNewList/WhatsNewItem.svelte";


</script>

<div class="">
    <p class="text-5xl font-bold headerFont ml-0 sm:ml-12">Whats new...</p>
    <WhatsNew>
        <WhatsNewItem>
            <p class="text-3xl bold">Website and server are in development!</p>
            <BetterHr />
            <p>Our development team is working very hard to build the plugins for Realms to make it the best experience for the moderators and users, while that is happening, I am developing this website and plugins for the server.</p>
        </WhatsNewItem>
    </WhatsNew>
</div>

<style>
    .headerFont {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>