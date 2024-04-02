<script>
	export let list = null;
	export let title = '';
</script>

<h2>{title}</h2>
{#if list && list.length > 0}
	<ul>
		{#each list as address}
			<li>{address.adressebetegnelse}</li>
		{/each}
	</ul>
{:else if list}
	<p>Ingen adresser fundet</p>
{/if}
