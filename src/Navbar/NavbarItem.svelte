<script lang="ts">
    export let url: string;
    export let css: string = "";
</script>

<a href={url}>
    <div 
        class="w-16 sm:w-28 h-full flex items-center justify-center bg-white bg-opacity-0 hover:bg-opacity-75 duration-100 text-white cursor-pointer font-bold mx-1 {css}">
        <slot></slot>
    </div>
</a>

<style>
</style>