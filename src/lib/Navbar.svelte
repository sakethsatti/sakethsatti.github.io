<script>
    import logo from '$lib/imgs/pfp.webp';
    $: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<nav class="px-10 py-4 font-dm-sans shadow-xl width:{innerWidth} bg-black/10 fixed top-0 left-0 right-0 backdrop-blur-md">
    <ul class="flex flex-1 flex-row items-center justify-between text-white">
        <ul class="flex flex-row items-center justify-between">
            <li><img class = "border-2 border-red-200 object-cover h-10 w-10 rounded-full mr-2" alt="Profile: The Portrait by Magritte" src={logo}/></li>
            <li class="text-2xl">Figsups</li>
        </ul>
        <ul class="flex flex-row items-center justify-between">
            <li class="text-xl mr-6">About</li>
            <li class="text-xl mr-6">Projects</li>
            <li class="text-xl">Blogs</li>
        </ul>
        <ul class="flex flex-row items-center justify-between">
            <li class="text-xl mr-4">Site Info</li>
            <li class="text-3xl mr-4">|</li>
            <li class="text-xl">Contact</li>
        </ul>
    </ul>
</nav>