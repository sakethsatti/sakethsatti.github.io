<script lang="ts">
    import ProjectEntry from '$lib/ProjectEntry.svelte';
    import Project from "$lib/projects";

    let projects_entries: Project[] = [
        new Project(
            "Visual Trasformer Captioning",
            "Completed",
            `This project was aimed at creating a AI system that captions images in order to help blind and 
             visually impaired people visualize their surroundings. The intention was to use a technology called
             Visual Transformers for feature extraction in conjunction with normal text transformers to produce
             captions.`,
            "https://github.com/sakethsatti/VisualTransformerCaptioning",
            "N/A"
        ),
        new Project(
            "NewVision",
            "Completed",
            `This was my submission for the 2023 Congressional App Challenge. New Vision is an IOS application made with React
             Native that creates captions for images and reads them aloud for the user.`,
            "https://github.com/sakethsatti/NewVision",
            "N/A"
        ),
        new Project(
            "Mind Haven",
            "Completed",
            `Mind Haven is a mobile application for student mental health. It has a variety of features including a
             meditation timer, journal, mood surveys, and a AI Therapist Chatbot powered by GPT-4. This was made for
             NJ TSA Software Development 2024.`,
            "https://github.com/rtenacity/mind-haven",
            "Rohan Arni, Aditya Choudhary, Niyel Hassan"
        ),
        new Project (
            "Inquire",
            "Shelved",
            `Inquire is a discord bot that provides trivia questions. It was originally made with discord.py, but I moved to PyCord after
            discord.py was made read-only`,
            "https://github.com/sakethsatti/inquire-discord-bot/",
            "N/A"
        ),
        new Project (
            "Credit Card Fraud Detections",
            "Completed",
            `This was a machine learning project where I used models to detect fraudulent credit card transactions. In the second
            part of the project, I created model to determine if credit card borrowers would pay back their loans based on a variety
            of parameters (to replace credit score).`,
            "",
            "N/A"
        ),
        new Project (
            "LinChess",
            "In Progress",
            `LinChess is a Chess Engine made in C++. The project is still in progress, but it is supposed to be a
            Stockfish style efficently updateable neural network (NNUE).`,
            "https://github.com/sakethsatti/LinChess",
            "N/A"
        ),
        new Project (
            "sakethsatti.github. io",
            "In Progress",
            `This website.`,
            "https://github.com/sakethsatti/sakethsatti.github.io/",
            "N/A"
        ),
    ];
</script>

<title>Saketh Satti | Projects</title>

<div class="py-32 px-20 font-dm-sans">
    <h1 class="text-4xl mb-4">Projects</h1>
    <p class="text-2xl">These are some of the projects I have completed/am still working on.</p>
    <div class="flex flex-wrap gap-10 my-10">
        {#each projects_entries as proj}
            <ProjectEntry
                title={proj.title}
                status={proj.proj_status}
                description={proj.desc}
                githubLink={proj.link}
                collaborators={proj.colab}
            />
        {/each}
    </div>
</div>