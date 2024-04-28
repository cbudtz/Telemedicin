<script>
	import { onMount } from 'svelte';
	let user = { Dairy: [] };
	let title = '';
	let content = '';
	onMount(async () => {
		const res = await fetch('api/dairy/self');
		user = await res.json();
	});
	const saveDiary = async () => {
		await fetch('api/dairy', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: title,
				content: content
			})
		});
		const res = await fetch('api/dairy/self');
		user = await res.json();
	};
</script>

<input bind:value={title} type="text" placeholder="Titel" />
<input bind:value={content} type="text" placeholder="Skriv noget i din dagbog" />
<button on:click={saveDiary}>Send</button>

{#each user.Dairy as item}
	<div>
		<h6>{item.title} - {new Date(item.createdAt).toLocaleString()}</h6>
		<p>{item.content}</p>
	</div>
{/each}
<a href="/file">Upload en fil</a>
<img src={user.image} alt="avatar" width="300" />
<!-- Added this line -->
