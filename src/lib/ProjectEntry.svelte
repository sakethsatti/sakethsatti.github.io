<script>
    export let title;
    export let bgColor;
    export let collaborators;
    export let description;
</script>

<div class="grid bg-{bgColor} grid-cols-2">
    <div>
        <h1 class="font-dm-sans text-bold text-xl">{title}</h1>
    </div>
    <div>
        <h2>Collaborators: {collaborators}</h2>
    </div>
    <div class="col-span-2">
        {description}
    </div>
</div>