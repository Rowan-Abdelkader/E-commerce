
import { cookies } from 'next/headers';
import { decode } from 'next-auth/jwt';

export async function getToken() {
const x = (await cookies()) .get("next-auth.session-token")?.value;

const token = await decode({
	token:x,
	secret:process.env.NEXTAUTH_SECRET
})

console.log("token",token.token);;

}

