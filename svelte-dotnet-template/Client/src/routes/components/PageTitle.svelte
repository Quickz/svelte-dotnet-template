<script lang="ts">
    let slotContent : string;
</script>

<span contenteditable="true" bind:textContent={slotContent} hidden><slot/></span>

<svelte:head>
    <title>{slotContent}</title>
</svelte:head>
