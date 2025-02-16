<script>
    import PageTitle from "../components/PageTitle.svelte";

    let currentCount = 0;

    function incrementCount()
    {
        currentCount++;
    }
</script>

<PageTitle>Counter</PageTitle>

<h1>Counter</h1>

<p role="status">Current count: {currentCount}</p>

<button class="btn btn-primary" on:click={incrementCount}>Click me</button>
