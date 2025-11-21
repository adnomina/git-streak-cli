import fs from "node:fs/promises";
import { createOAuthDeviceAuth } from "@octokit/auth-oauth-device";

export default async function login() {
	const auth = createOAuthDeviceAuth({
		clientId: "Ov23li4rxHZ0fAdDEyh7",
		scopes: ["read:user"],
		async onVerification(verification) {
			console.log("Open %s", verification.verification_uri);
			console.log("Enter code: %s", verification.user_code);
		},
	});

	const { token } = await auth({
		type: "oauth",
	});

	await fs.writeFile("token.txt", token);
}
