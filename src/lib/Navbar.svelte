<script>
    import { slide } from 'svelte/transition';
    import { clickOutside } from './clickOutside'; // We'll create this custom action
    import logo from '$lib/imgs/pfp.webp';
    import DropdownIcon from 'virtual:icons/mdi/menu';
    import CloseIcon from 'virtual:icons/mdi/close';
    import Icon from '@iconify/svelte';

    let outerWidth = 0;
    let innerWidth = 0;
    let outerHeight = 0;
    let innerHeight = 0;

    let dropdownOpen = false;

    const menuItems = [
        { title: "About", href: "/#Introduction" },
        { title: "Projects", href: "/projects" },
        { title: "Posts", href: "/posts" },
        { title:"Contact", href: "/#Contact"}
    ];

    function toggleDropdown() {
        dropdownOpen = !dropdownOpen;
    }

    function closeDropdown() {
        dropdownOpen = false;
    }
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<nav class="px-4 sm:px-6 lg:px-8 py-4 font-dm-sans shadow-xl dark:shadow-white/5 w-full bg-white/30 dark:bg-black/30 z-50 sticky top-0 left-0 right-0 backdrop-blur-lg">
    <div class="justify-between">
        <ul class="flex flex-1 flex-row items-center justify-between text-black dark:text-white">
            <a href="/" class="flex items-center hover:text-sky-500">
                <img class="border-2 border-sky-500 object-cover h-10 w-10 rounded-full mr-2" alt="Profile: The Portrait by Magritte" src={logo}/>
                <span class="text-2xl font-semibold">Saketh</span>
            </a>
            
            {#if innerWidth > 700}
                <ul class="flex items-center space-x-6">
                    {#each menuItems as item}
                        {#if item.title != "Contact"}
                            <li>
                                <a href={item.href} class="text-lg hover:text-sky-500 transition-colors duration-200">{item.title}</a>
                            </li>
                        {/if}
                    {/each}
                </ul>
                <li class="flex space-x-2 justify-center items-center">
                    <a href={"/#Contact"} class="text-lg hover:text-sky-500 transition-colors duration-200">Contact</a>
                    <p class="text-2xl">|</p>
                    <button class="text-2xl hover:text-sky-500 transition-colors duration-200"><Icon icon="mdi:theme-light-dark" /></button>
                </li>
            {:else}
                <div class="relative" use:clickOutside on:click_outside={closeDropdown}>
                    <button on:click={toggleDropdown} class="p-2 text-black dark:text-white hover:text-sky-500 transition-colors duration-200">
                        {#if dropdownOpen}
                            <CloseIcon class="w-6 h-6" />
                        {:else}
                            <DropdownIcon class="w-6 h-6" />
                        {/if}
                    </button>
                    
                    {#if dropdownOpen}
                        <div 
                            transition:slide={{ duration: 300 }}
                            class="absolute right-0 mt-2 w-48 bg-white dark:bg-black rounded-md shadow-lg py-1 z-10"
                        >
                            {#each menuItems as item}
                                <a 
                                    href={item.href}
                                    class="block px-4 py-2 text-sm text-gray-200 hover:bg-sky-500 hover:text-white transition-colors duration-200"
                                    on:click={closeDropdown}
                                >
                                    {item.title}
                                </a>
                            {/each}
                        </div>
                    {/if}
                    <button class="text-2xl hover:text-sky-500 transition-colors duration-200"><Icon icon="mdi:theme-light-dark" /></button>
                </div>
            {/if}
            
        </ul>
    </div>
</nav>