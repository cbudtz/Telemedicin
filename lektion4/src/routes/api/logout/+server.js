export async function GET({ cookies }) {
	cookies.delete('session', { path: '/' });
	return new Response('Logged out', { status: 200 });
}
