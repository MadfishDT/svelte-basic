<script lang="ts">
	import { chaneNumber } from './store';
	
	export const onClickSetButton = () => {
		chaneNumber.set(10);
	}

	export const onClickUpdateButton = () => {
		chaneNumber.update( value => value + 8)
	}
	export let num;

	chaneNumber.subscribe(value => {
		num = value;
	});
</script>

<main>
	<h1>Hello Basic Store{chaneNumber}!</h1>
	<p>{num}</p>
	<button on:click={onClickSetButton}>Set Button</button>
	<button on:click={onClickUpdateButton}>Update Button</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>