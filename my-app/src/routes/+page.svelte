<script lang="ts">
	import ProductCard from "$lib/productCard.svelte";
	import { each } from "svelte/internal";
	const products : Product[] = [
		{
			id: "1",
			name: "Coffee",
			price: "5.00",
		},
		{
			id: "2",
			name: "Sunglasses",
			price: "10.00",
		},
		{
			id: "3",
			name: "Mattress",
			price: "15",
		}
	]
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-3">
			<h1>Sveltekit</h1>
		</div>
		{#each products as product}
			<ProductCard product={product}/>
		{/each}
		<div class="col-span-3">
			<button class="btn variant-filled-primary">Checkout with StripeAPI</button>
		</div>
	</div>
</div>
