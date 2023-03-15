<script>
    import NavLink from "./NavLink.svelte";
    let collapseNavMenu = true;
    $: navMenuCssClass = collapseNavMenu ? "collapse" : "";

    function toggleNavMenu()
    {
        collapseNavMenu = !collapseNavMenu;
    }
</script>

<div class="top-row ps-3 navbar navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Svelte App</a>
        <button title="Navigation menu" class="navbar-toggler" on:click={toggleNavMenu}>
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</div>

<div class="{navMenuCssClass} nav-scrollable"><!--on:click={toggleNavMenu}-->
    <nav class="flex-column">
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="/">
                <span class="oi oi-home" aria-hidden="true"></span> Home
            </NavLink>
        </div>
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="/counter">
                <span class="oi oi-plus" aria-hidden="true"></span> Counter
            </NavLink>
        </div>
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="/fetchdata">
                <span class="oi oi-list-rich" aria-hidden="true"></span> Fetch data
            </NavLink>
        </div>
    </nav>
</div>

<style>
    .navbar-toggler {
        background-color: rgba(255, 255, 255, 0.1);
    }

    .top-row {
        height: 3.5rem;
        background-color: rgba(0,0,0,0.4);
    }

    .navbar-brand {
        font-size: 1.1rem;
    }

    .oi {
        width: 2rem;
        font-size: 1.1rem;
        vertical-align: text-top;
        top: -2px;
    }

    .nav-item {
        font-size: 0.9rem;
        padding-bottom: 0.5rem;
    }

        .nav-item:first-of-type {
            padding-top: 1rem;
        }

        .nav-item:last-of-type {
            padding-bottom: 1rem;
        }

        .nav-item :global(.nav-link) {
            color: #d7d7d7;
            border-radius: 4px;
            height: 3rem;
            display: flex;
            align-items: center;
            line-height: 3rem;
        }

    .nav-item :global(.nav-link.active) {
        background-color: rgba(255,255,255,0.25);
        color: white;
    }

    .nav-item :global(.nav-link):hover {
        background-color: rgba(255,255,255,0.1);
        color: white;
    }

    @media (min-width: 641px) {
        .navbar-toggler {
            display: none;
        }

        .collapse {
            /* Never collapse the sidebar for wide screens */
            display: block;
        }
        
        .nav-scrollable {
            /* Allow sidebar to scroll for tall menus */
            height: calc(100vh - 3.5rem);
            overflow-y: auto;
        }
    }
</style>
