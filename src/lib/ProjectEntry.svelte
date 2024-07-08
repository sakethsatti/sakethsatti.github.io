<script lang="ts">
    import GithubLogo from 'virtual:icons/mdi/github';

    export let title;
    export let description;
    export let githubLink;
    export let status;
    export let collaborators;
    
</script>

<div class="font-dm-sans rounded-lg bg-slate-200 py-5 px-5 shadow-xl w-96">
    <div class="flex justify-between">
        <div>
            <p>Title</p>    
            <h1 class="font-semibold text-3xl mb-5">{title}</h1>
        </div>
        {#if githubLink}
            <h1 class="font-semibold text-3xl mt-2 mb-5 ml-5"><a href="{githubLink}" target="_blank"><GithubLogo /></a></h1>
        {:else}
            <h1 class="font-semibold text-gray-500 text-3xl mt-2 `mb-5 ml-5"><GithubLogo /></h1>
        {/if}
    </div>
    <div class="flex justify-between">
        <div>
            <p>Status</p>
            {#if status == "Shelved"}
                <h2 class="text-2xl text-orange-500 mb-5">{status}</h2>
            {:else if status == "In Progress"}
                <h2 class="text-2xl text-sky-500 mb-5">{status}</h2>
            {:else}
                <h2 class="text-2xl text-green-500 mb-5">{status}</h2>
            {/if}
        </div>
        <div class="text-end">
            <p>Collaborators</p>
            <h2 class="ml-5 font-bold">{collaborators}</h2>
        </div>
    </div>
    <div>
        <p>Description</p>
        <p class="font-semibold">{description}</p>
    </div>
</div>