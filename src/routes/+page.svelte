<script>
    import Navbar from "$lib/Navbar.svelte";
    import logo from '$lib/imgs/pfp.webp';
    import ArrowDown from 'virtual:icons/mdi/arrow-down';
    import About from 'virtual:icons/mdi/about';
    import GearOutline from 'virtual:icons/mdi/gear-outline';
    import NewPage from 'virtual:icons/mdi/arrow-top-right-bold-box-outline';
    import Blog from 'virtual:icons/mdi/chat-bubble-outline';

    $: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0
</script>

<title>Figsups</title>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<div class="relative">
    <Navbar />
    <div class="py-40 flex flex-col items-center bg-slate-200 h-screen">
        <div class="w-2/3 mb-8">
            <h1 class="font-dm-sans text-8xl mb-6">Welcome, I'm <strong class="text-sky-800">Figsups</strong></h1>
            <h1 class="font-dm-sans text-4xl text-slate-700">AI Researcher. Software Developer. Problem Solver.</h1>
        </div>
        {#if outerWidth > 850}
            <div class="flex w-2/3">
                <a href="#Introduction">
                <div class="flex flex-col shadow-xl items-center justify-center bg-violet-300 rounded-lg p-4 mr-10 hover:shadow-2xl">
                    <About class="text-9xl mb-2"/>
                    <h1 class="flex font-dm-sans items-center text-2xl">Introduction<ArrowDown /></h1>
                </div>
                </a>
                <div class="flex flex-col shadow-xl items-center justify-center bg-violet-400 rounded-lg p-4 mr-10 hover:shadow-2xl">
                    <GearOutline class="text-9xl mb-2"/>
                    <h1 class="flex font-dm-sans items-center text-2xl">Projects<NewPage /></h1>
                </div>
                <div class="flex flex-col shadow-xl items-center justify-center bg-violet-500 rounded-lg p-4 mr-10 hover:shadow-2xl">
                    <Blog class="text-9xl mb-2"/>
                    <h1 class="flex font-dm-sans items-center text-2xl">Posts<NewPage /></h1>
                </div>
            </div>
        {:else}
            <div class="flex flex-col w-2/3">
                <a href="#Introduction">
                <div class="flex flex-col shadow-xl items-center justify-center bg-violet-300 rounded-lg p-4 mb-10 hover:shadow-2xl">
                    <About class="text-9xl mb-2"/>
                    <h1 class="flex font-dm-sans items-center text-2xl">Introduction<ArrowDown /></h1>
                </div>
                </a>
                <div class="flex flex-col shadow-xl items-center justify-center bg-violet-400 rounded-lg p-4 mb-10 hover:shadow-2xl">
                    <GearOutline class="text-9xl mb-2"/>
                    <h1 class="flex font-dm-sans items-center text-2xl">Projects<NewPage /></h1>
                </div>
                <div class="flex flex-col shadow-xl items-center justify-center bg-violet-500 rounded-lg p-4 mb-10 hover:shadow-2xl">
                    <Blog class="text-9xl mb-2"/>
                    <h1 class="flex font-dm-sans items-center text-2xl">Posts<NewPage /></h1>
                </div>
            </div>
        {/if}    
    </div>

    
    <div class="flex h-screen flex-col justify-center items-center bg-slate-100">
        <a id="Introduction"> </a>
        <div class="w-2/3">
            <h1 class="font-bold text-slate-700 mb-2">INTRODUCTION</h1>
            <div class="flex items-center mb-6">
                <img class="shadow-2xl mr-4 rounded-full border-2 border-sky-500 h-20 w-20" src={logo} alt="The Portrait by Magritte"/>
                <h1 class="text-6xl font-bold text-sky-700 font-dm-sans">Figsups</h1>
            </div>
            <p class="text-xl text-black font-dm-sans mb-6">
                Hello! I'm <strong>Saketh (Figsups)</strong>, a Junior in High School interested in all facets of computer science.
                I mainly work in Python (AI/ML), but I also have experience in Web/App Development, and C/C++.
            </p>
            <p class="text-xl text-black font-dm-sans mb-6">
                Explore this website to see my projects, posts, and contact info!
            </p>

        </div>
    </div>
</div>