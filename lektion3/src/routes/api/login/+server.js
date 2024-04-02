export async function POST({ request, cookies }) {
	const body = await request.json();
	const { username, password } = body;
	if (username === 'admin' && password === 'admin') {
		cookies.set('session', 'admin', { httpOnly: true, path: '/' }); // cookies
		return new Response('Logged in', { status: 200 });
	} else {
		return new Response('Unauthorized', { status: 401 });
	}
}
