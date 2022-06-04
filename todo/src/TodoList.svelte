<script lang="ts">
    import TodoCard from "./TodoCard.svelte";
    import { datas } from "./store";
    import type { Todos } from "./interface";

    let todos: Todos = [];

    datas.subscribe((value) => {
        todos = value;
    });
</script>

<main>
    {#each todos as item}
        <TodoCard info={item} />
    {/each}
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 100%;
    }
</style>
