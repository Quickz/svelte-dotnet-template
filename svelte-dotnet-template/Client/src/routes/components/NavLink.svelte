<script lang="ts">
    import { page } from '$app/stores';
    
    $: activeClass = $$props.href == $page.url.pathname ? "active" : "";
</script>

<a class="{$$props.class} {activeClass}" href={$$props.href}>
    <slot/>
</a>
