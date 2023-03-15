<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    let activeClass = "";
    let stopListening : Function;

    onMount(() =>
    {
        updateState();
        stopListening = startListening();
    });

    onDestroy(() =>
    {
        if (stopListening)
            stopListening();
    })

    function startListening()
    {
        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;
        history.pushState = function () {
            originalPushState.apply(this, arguments);
            updateState();
        };
        history.replaceState = function () {
            originalReplaceState.apply(this, arguments);
            updateState();
        };
        window.addEventListener('popstate', updateState);
        window.addEventListener('hashchange', updateState);

        return function()
        {
            history.pushState = originalPushState;
            history.replaceState = originalReplaceState;
            window.removeEventListener('popstate', updateState);
            window.removeEventListener('hashchange', updateState);
        };
    }

    function updateState()
    {
        let currentHref = $$props.href;
        var url = new URL(window.location.href);
        
        if (currentHref == url.href ||
            currentHref == url.pathname)
        {
            activeClass = "active";
        }
        else
        {
            activeClass = "";
        }
    }
</script>

<a class="{$$props.class} {activeClass}" href={$$props.href}>
    <slot/>
</a>
