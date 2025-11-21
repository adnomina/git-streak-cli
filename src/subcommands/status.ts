import fs from "node:fs/promises";
import { graphql } from "@octokit/graphql";
import type { GraphQlQueryResponseData } from "@octokit/graphql/types";

export default async function status() {
	const token = await fs.readFile("token.txt", "utf8");

	const today = new Date();
	const todayISOString = `${today.toISOString().split(".")[0]}Z`;

	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	const yesterdayISOString = `${yesterday.toISOString().split(".")[0]}Z`;

	const result: GraphQlQueryResponseData = await graphql(
		`
            {
                user(login: "adnomina") {
                    contributionsCollection(from: "${yesterdayISOString}", to: "${todayISOString}") {
                        hasAnyContributions
                    }
                }
            }
        `,
		{
			headers: {
				authorization: `token ${token}`,
			},
		},
	);

	const commmitted = result.user.contributionsCollection.hasAnyContributions;

	if (commmitted) {
		console.log("Congrats! You have committed today!");
	} else {
		console.log("You have not yet committed today.");
	}
}
