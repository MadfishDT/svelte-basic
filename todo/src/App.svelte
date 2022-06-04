<script lang="ts">
    import { onMount } from "svelte";
    import Router from "svelte-spa-router";
    import routes from "./router";
    import { SmapleData } from "./interface";

    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
    import IconButton from "@smui/icon-button";

    import { datas } from "./store";

    export let prominent = false;
    export let dense = false;
    export let secondaryColor = false;

    const loadData = () => {
        datas.set(SmapleData);
    };
    onMount(() => {
        loadData();
    });
</script>

<svelte:head>
    <!-- Fonts -->
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
    />

    <!-- Material Typography -->
    <link
        rel="stylesheet"
        href="https://unpkg.com/@material/typography@13.0.0/dist/mdc.typography.css"
    />

    <!-- SMUI -->
    <link
        rel="stylesheet"
        href="https://unpkg.com/svelte-material-ui/bare.css"
    />
</svelte:head>

<main>
    <div class="top-app-bar-container flexor">
        <TopAppBar
            variant="static"
            {prominent}
            {dense}
            color={secondaryColor ? "secondary" : "primary"}
        >
            <Row>
                <Section>
                    <Title>Mad Todos</Title>
                </Section>
                <Section align="end" toolbar>
                    <IconButton class="material-icons" aria-label="add_todo"
                        >add</IconButton
                    >
                    <IconButton
                        class="material-icons"
                        aria-label="Bookmark this page">delete</IconButton
                    >
                </Section>
            </Row>
        </TopAppBar>
        <div class="content-container">
            <Router {routes} />
        </div>
    </div>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 480px;
        height: 100%;
        margin: 0 auto;
    }
    .top-app-bar-container {
        max-width: 480px;
        width: 100%;
        height: 80%;
        border: 1px solid
            var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
        background-color: var(--mdc-theme-background, #fff);
        overflow-y: hidden;
        overflow-x: hidden;
        display: inline-block;
    }
    .content-container {
        max-width: 480px;
        width: 100%;
        height:100%;
        border: 1px solid
            var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
        background-color: var(--mdc-theme-background, #fff);
        overflow-y: auto;
        overflow-x: hidden;
        display: inline-block;
    }
    .top-app-buttons {
        margin-bottom: 0px;
    }
    .flexy {
        display: flex;
        flex-wrap: wrap;
    }
    .flexor {
        display: inline-flex;
        flex-direction: column;
    }
    .flexor-content {
        flex-basis: 0;
        height: 0;
        flex-grow: 1;
    }
    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 480px) {
        main {
            max-width: none;
        }
    }
</style>
