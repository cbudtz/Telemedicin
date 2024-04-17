<script>
	import { Container, Row, Col, Input, Button } from '@sveltestrap/sveltestrap';

	import AddressList from '../AddressList.svelte';

	let input = '';
	let result = null;

	const search = async () => {
		const response = await fetch(`https://dawa.aws.dk/adresser?q=${input}`);
		console.log(response);
		result = await response.json();
	};

	const md = { size: 4, offset: 4 };
	const sm = { size: 6, offset: 3 };
</script>

<Container>
	<Row>
		<h1>Telemedicin</h1>
	</Row>
	<Row>
		<Col {sm} {md}>
			<Input bind:value={input} type="text" placeholder="Indtast adresse" />
		</Col>
	</Row>
	<Row>
		<Col {sm} {md}>
			<Button on:click={search} color="primary">Søg</Button>
		</Col>
	</Row>
	<Row>
		<Col {sm} {md}>
			<AddressList list={result} title="Adresser" />
		</Col>
	</Row>
</Container>
