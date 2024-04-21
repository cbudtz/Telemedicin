<script>
	import { Container, Row, Col, Input, Button } from '@sveltestrap/sveltestrap';

	const md = { size: 4, offset: 4 };
	const sm = { size: 6, offset: 3 };

	let username = '';
	let password = '';

	const login = async () => {
		const response = await fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});
		const result = await response.text();
		if (response.status === 200) {
			window.location = '/dairy';
		} else {
			alert('Forkert brugernavn eller password');
		}
	};
</script>

<Container>
	<Row>
		<h1>Login</h1>
	</Row>
	<Row>
		<Col {sm} {md}>
			<Input bind:value={username} type="text" placeholder="Indtast Brugernavn" />
		</Col>
	</Row>
	<Row>
		<Col {sm} {md}>
			<Input bind:value={password} type="password" placeholder="Indtast Password" />
		</Col>
	</Row>
	<Row>
		<Col {sm} {md}>
			<Button color="primary" on:click={login}>Login</Button>
		</Col>
	</Row>
	<Row>
		<Col {sm} {md}>
			<p>
				<a href="/admin">Gå til admin</a>
			</p>
		</Col>
	</Row>
</Container>
