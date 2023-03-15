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




<!-- <script>
    let count = 0;

    function increment()
    {
        count++;
    }
</script>

<h2>Counter</h2>
<div>
    Current count: {count}
</div>
<div>
    <button class="btn btn-primary" on:click={increment}>Click me</button>
</div> -->
