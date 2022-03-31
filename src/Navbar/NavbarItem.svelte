<script lang="ts">
    export let url: string;
    function navigate() {
        window.location.replace(url);
    }
</script>

<div 
    class="w-28 h-full flex items-center justify-center bg-white bg-opacity-0 hover:bg-opacity-75 duration-100 text-white"
    on:click={navigate}>
    <slot></slot>
</div>

<style>
</style>