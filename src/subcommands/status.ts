import fs from "node:fs/promises";
import { Octokit } from "@octokit/core";

export default async function status() {
	const token = await fs.readFile("token.txt", "utf8");

	const octokit = new Octokit({
		auth: token,
	});

	await octokit
		.request("GET /users/{username}/events", {
			username: "adnomina",
		})
		.then((response) => {
			const events = response.data;
			console.log(events);

			let commits = 0;

			events.forEach((event) => {
				console.log(event);
				/*
                if (!(
                    event.created_at?.startsWith(new Date().toISOString().split('T')[0])
                    && event.type === "PushEvent"
                )) {
                    return;
                }
                */

				commits += 1;
			});

			console.log(`Congrats! You've committed today (${commits} commits)`);
		})
		.catch((reason) => {
			console.log(reason);
		});
}
