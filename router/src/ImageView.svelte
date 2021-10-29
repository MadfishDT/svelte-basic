<script script="ts">
    import { push } from 'svelte-spa-router'
	export let title = 'Image View'
</script>
  
<main>
	<h1>Hello {title}!</h1>
    <div>
        <button text on:click={ () => push("/")}>Move List view</button>
    </div>
	<image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="image"/>
</main>