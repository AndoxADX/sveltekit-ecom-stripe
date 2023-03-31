<script lang="ts">
	export let product: Product = { id: "", name: "", price: 0 };
    
    console.log('Product',product)
</script>

<div class="card">
	<header class="card-header"><h2>{product.name}</h2></header>
	<div class="card-body px-4">
		Quantity: <strong>4</strong>
	</div>
	<div class="card-body px-4">Price: ${product.price}</div>
	<footer class="card-footer">
		<button class="btn p-2 rounded variant-glass-primary">Add</button>
		<button class="btn p-2 rounded variant-glass-error">Remove</button>
	</footer>
</div>
