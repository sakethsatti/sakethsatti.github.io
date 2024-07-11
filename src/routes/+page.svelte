<script>
    import logo from '$lib/imgs/pfp.webp';
    import ArrowDown from 'virtual:icons/mdi/arrow-down';
    import About from 'virtual:icons/mdi/about-circle-outline';
    import GearOutline from 'virtual:icons/mdi/gear-outline';
    import NewPage from 'virtual:icons/mdi/open-in-new';
    import Blog from 'virtual:icons/mdi/chat-bubble-outline';
    import cLogo from '$lib/imgs/C.png';
    import cppLogo from '$lib/imgs/C++.png';
    import jLogo from '$lib/imgs/Java.svg';
    import pyLogo from '$lib/imgs/python.png';
    import torchLogo from '$lib/imgs/Pytorch.png';
    import reactLogo from '$lib/imgs/react.png';
    import svelteLogo from '$lib/imgs/svelte.png';
    import Icon from '@iconify/svelte';

    $: outerWidth = 0;
	$: innerWidth = 0;
	$: outerHeight = 0;
	$: innerHeight = 0;

</script>

<title>Saketh Satti</title>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<div class="min-h-screen py-24 flex flex-col justify-center items-center bg-slate-200 dark:bg-black">
    <div class="w-2/3 mb-8">
        <h1 class="font-dm-sans text-6xl mb-6 dark:text-white">Welcome, I'm <strong class="text-sky-800 dark:text-sky-500">Saketh</strong></h1>
        <h1 class="font-dm-sans text-4xl text-slate-700 dark:text-slate-400">AI Researcher. Software Developer. Problem Solver.</h1>
    </div>
    
    <div class="flex flex-col w-2/3 dark:text-white">
        <a href="#Introduction">
        <div class="flex flex-row w-2/3 shadow-xl dark:shadow-white/10 items-center justify-center bg-violet-300 dark:bg-violet-500 rounded-lg p-4 mb-4 hover:shadow-2xl">
            <About class="mr-3 text-2xl"/>
            <h1 class="flex font-dm-sans items-center text-2xl">About<ArrowDown /></h1>
        </div>
        </a>
        <a href="/projects">
        <div class="flex flex-row w-2/3 shadow-xl dark:shadow-white/10 items-center justify-center bg-violet-400 dark:bg-violet-600 rounded-lg p-4 mb-4 hover:shadow-2xl ">
            <GearOutline class="mr-3 text-2xl"/>
            <h1 class="flex font-dm-sans items-center text-2xl">Projects<NewPage /></h1>
        </div>
        </a>
        <div class="flex flex-row w-2/3 shadow-xl dark:shadow-white/10 items-center justify-center bg-violet-500 dark:bg-violet-700 rounded-lg p-4 hover:shadow-2xl">
            <Blog class="mr-3 text-2xl"/>
            <h1 class="flex font-dm-sans items-center text-2xl">Posts<NewPage /></h1>
        </div>
    </div>
</div>

<div id="Introduction" class="h-0"></div>

<div class="min-h-screen py-24 flex flex-col justify-center items-center bg-slate-100 dark:bg-slate-950 dark:text-white">
    <div class="w-2/3 mb-5">
        <h1 class="font-bold text-slate-700 dark:text-slate-400 mb-2">INTRODUCTION</h1>
        <div class="flex items-center mb-6">
            <img class="shadow-2xl mr-4 rounded-full border-2 border-sky-500 h-20 w-20" src={logo} alt="The Portrait by Magritte"/>
            <h1 class="text-6xl font-bold text-sky-700 font-dm-sans">Saketh Satti</h1>
        </div>
        <p class="text-xl font-dm-sans mb-6">
            Hello! I'm <strong>Saketh</strong>, a Junior in High School interested in all facets of computer science.
            I mainly work in Python (AI/ML), but I also have experience in Web/App Development, and C/C++.
        </p>
        <p class="text-xl font-dm-sans mb-6">
            Explore this website to see my projects, posts, and contact info!
        </p>
    </div>
    
    <div class="w-2/3">
        <h1 class="font-bold text-slate-700 text-slate-400">TECHNOLOGIES</h1>
        <div class="flex flex-wrap gap-10 m-2 items-center z-0">
            <img src={cLogo} class="h-18 w-16 drop-shadow-2xl" alt="C Logo"/>
            <img src={cppLogo} class="h-18 w-16 drop-shadow-2xl" alt="C++ Logo"/>
            <img src={jLogo} class="h-18 w-16 drop-shadow-2xl" alt="Java Logo"/>
            <img src={pyLogo} class="h-18 w-16 drop-shadow-2xl" alt="Python Logo"/>
            <img src={torchLogo} class="h-18 w-16 drop-shadow-2xl" alt="PyTorch Logo"/>
            <img src={reactLogo} class="h-18 w-16 drop-shadow-2xl" alt="React Logo"/>
            <img src={svelteLogo} class="h-18 w-16 drop-shadow-2xl" alt="React Logo"/>
            <h1 class="flex text-2xl text-center drop-shadow-2xl">+<br>More</h1>
        </div>    
    </div>
</div>

<div id="Contact" class="h-0"></div>

<div class="h-fit py-32 flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-900 dark:text-white font-dm-sans">
    <div class="w-2/3 bg-white/10 p-10 rounded-2xl">    
        <h3 class="font-semibold text-slate-700 mb-2 dark:text-slate-400">CONTACT</h3>
        <div class="text-5xl flex items-center mb-4">
            <Icon class="text-4xl mr-3" icon="logos:google-gmail" />
            <h1>saksatti AT gmail DOT com</h1>
        </div>
        <div class="text-5xl flex items-center mb-4">
            <Icon class="text-4xl mr-3" icon="logos:discord-icon" />
            <h1>figsups</h1>
        </div>
        <a href="https://github.com/sakethsatti" target = "_blank" class="text-5xl flex items-center hover:text-sky-500">
            <Icon class="text-5xl mr-3" icon="logos:github-icon" />
            <h1>sakethsatti</h1>
            <NewPage class=" ml-2 text-3xl"/>
        </a>
    </div>        
</div>
<div class="flex justify-center items-center font-dm-sans dark:text-white">© 2024 Saketh Satti - <a class="underline ml-1" href="https://sakethsatti.github.io">sakethsatti.github.io</a></div>