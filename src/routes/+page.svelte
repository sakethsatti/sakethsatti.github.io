<script>
    import Navbar from "$lib/Navbar.svelte";
    import logo from '$lib/imgs/pfp.webp';
    $: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0
</script>

<title>Figsups</title>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<Navbar />
<div class="flex h-dvh w-dvh justify-center items-center bg-gradient-to-r from-purple-700 to-indigo-700">
    <img class="border-8 border-yellow-200 object-cover rounded-full h-96 w-96" alt="Profile: The Portrait by Magritte" src={logo} />
    <div class="ml-10">
        <h1 class="text-8xl font-bold text-sky-300 mb-10 font-dm-sans">Figsups</h1>
        <p class="text-2xl text-white font-dm-sans">Hello! I'm <strong class="text-yellow-400">Saketh</strong>, a Junior at High Technology High School.
                    <br>I mainly work in Python (AI/ML), but I also have experience in 
                    <br>Web/App Development, and C/C++. Explore this website to see
                    <br>my projects, blogs, and contact information!</p>
    </div>
</div>