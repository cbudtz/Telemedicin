import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

export async function POST({ request, cookies }) {
	const body = await request.json();
	const prisma = new PrismaClient();
	const hash = await bcrypt.hashSync(body.pass);
	try {
		const res = await prisma.user.create({
			data: {
				email: body.email,
				name: body.name,
				hashPass: hash
			}
		});
		console.log(res);
	} catch (e) {
		if (e.code === 'P2002') return new Response('Duplicate entry', { status: 409 });
		else return new Response('Unknown Error see logs', { status: 500 });
	}

	return new Response('Created', { status: 201 });
}

export async function GET({ request, cookies }) {
	console.log(request.user);
	const prisma = new PrismaClient({ log: ['query'] });
	const res = await prisma.user.findMany();
	return new Response(JSON.stringify(res), { status: 200 });
}

export async function DELETE({ request, cookies }) {
	const body = await request.json();
	const prisma = new PrismaClient();
	const res = await prisma.user.delete({ where: { email: body.email } });
	return new Response('Deleted', { status: 200 });
}
