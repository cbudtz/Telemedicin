<script>
	import { Button, Container, Row, Col, Input } from '@sveltestrap/sveltestrap';
	let inputValue = '';
	let adresses = Promise.resolve([{ tekst: '' }]);
	const handleClick = async () => {
		const response = await fetch(
			`https://api.dataforsyningen.dk/adresser/autocomplete?q=${inputValue}`
		);
		adresses = await response.json();
	};
</script>

{inputValue}
<Container>
	<Row>
		<Col md="6">
			<Button on:click={handleClick}>Text</Button>
		</Col>
		<Col md="6">
			<Input bind:value={inputValue}></Input>
		</Col>
	</Row>
	<Row cols={{ lg: 3, md: 2, xs: 1 }}>
		<Col>
			{#await adresses}
				<p>Loading...</p>
			{:then adresses}
				{#each adresses as adresse}
					<p>{adresse.tekst}</p>
				{/each}
			{:catch error}
				<p>{error.message}</p>
			{/await}
		</Col>
	</Row>
</Container>
Adresser
