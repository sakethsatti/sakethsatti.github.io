<script>
    import "../app.css";
    import Navbar from "../lib/Navbar.svelte";
    import { onMount } from 'svelte';
    import loading from '$lib/imgs/loading.gif';

    let loaded = false;

    onMount(() => {
        setTimeout(() => {
            loaded = true;
        }, 100);
    })
</script>
{#if loaded}
    <Navbar />
    <slot />
    
{:else}
    <div class="flex h-screen items-center justify-center">
        <img class="size-8" src={loading} alt={'loading screen'}/>
    </div>
{/if}