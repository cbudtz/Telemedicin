<script>
	import { Container, Row, Col, Input, Button } from '@sveltestrap/sveltestrap';

	const md = { size: 4, offset: 4 };
	const sm = { size: 6, offset: 3 };

	let username = '';
	let password = '';

	const login = async () => {
		if (username === 'admin' && password === 'admin') {
			window.location = '/admin';
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
</Container>
