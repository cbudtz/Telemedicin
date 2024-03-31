<script>
	let input = '';
	let result = null;

	const search = async () => {
		const response = await fetch(`https://dawa.aws.dk/adresser?q=${input}`);
		result = await response.json();
	};
</script>

<h1>Telemedicin</h1>
<input bind:value={input} type="text" placeholder="Indtast adresse" />
<button on:click={search}> Søg </button>
<h2>Fundne Adresser</h2>
{#if result && result.length > 0}
	<ul>
		{#each result as address}
			<li>{address.adressebetegnelse}</li>
		{/each}
	</ul>
{:else if result}
	<p>Ingen adresser fundet</p>
{/if}
