<script script="ts">
    import {push } from 'svelte-spa-router'
	export let title = 'ListViews'
</script>
  
<main>
	<h1>Hello {title}!</h1>
    <div>
        <button text on:click={ () => push("/img")}>Move image view</button>
    </div>
	<p>this is list View</p>
</main>