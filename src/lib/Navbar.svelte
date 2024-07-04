<script>
    import logo from '$lib/imgs/pfp.webp';
    import DropdownIcon from 'virtual:icons/mdi/arrow-down-drop-circle-outline';
    $: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0

    /* @type */
    let dropdownOpen = false;
    const menuItems = ["About", "Projects", "Posts", "Contact"];
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

{#if innerWidth > 700}
    <nav class="px-10 py-4 font-dm-sans shadow-xl width:{innerWidth} bg-white/30 fixed top-0 left-0 right-0 backdrop-blur-lg">
        <ul class="flex flex-1 flex-row items-center justify-between text-black">
            <a href="/">
                <ul class="flex flex-row items-center justify-between">
                    <li><img class = "border-2 border-sky-500 object-cover h-10 w-10 rounded-full mr-2" alt="Profile: The Portrait by Magritte" src={logo}/></li>
                    <li class="text-2xl">Figsups</li>
                </ul>
            </a>
            <ul class="flex flex-row items-center justify-between">
                <li class="text-xl mr-6">About</li>
                <li class="text-xl mr-6"><a href="projects/">Projects</a></li>
                <li class="text-xl">Posts</li>
            </ul>
            <li class="text-xl">Contact</li>
        </ul>
    </nav>
{:else}
    <nav class="px-10 py-4 font-dm-sans shadow-xl width:{innerWidth} bg-white/10 fixed top-0 left-0 right-0 backdrop-blur-md">
        <ul class="flex flex-1 flex-row items-center justify-between text-black">
            <ul class="flex flex-row items-center justify-between">
                <li><img class = "border-2 border-sky-500 object-cover h-10 w-10 rounded-full mr-2" alt="Profile: The Portrait by Magritte" src={logo}/></li>
                <li class="text-2xl">Figsups</li>
            </ul>
            <div class="flex flex-col">
                <button on:click={() => dropdownOpen = !dropdownOpen}>
                    <DropdownIcon class="text-4xl"/>
                </button>
                {#if dropdownOpen}
                    {#each menuItems as item}
                        <div class="text-xl mr-6">{item}</div>
                    {/each}
                {/if}
            </div>
        </ul>
    </nav>
{/if}