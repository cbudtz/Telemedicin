<script>
	const addUser = async () => {
		fetch('api/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: 'Bruger',
				email: 'test',
				pass: 'test'
			})
		});
	};
</script>

<h1>Den hemmelige administrator side!</h1>
<button on:click={addUser}>Opret bruger 1</button>
