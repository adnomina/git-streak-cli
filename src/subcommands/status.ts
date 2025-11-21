import fs from "node:fs/promises";
import { graphql } from "@octokit/graphql";
import type { GraphQlQueryResponseData } from "@octokit/graphql/types";

export default async function status() {
	const token = await fs.readFile("token.txt", "utf8");

	const result: GraphQlQueryResponseData = await graphql(
		`
            {
                user(login: "adnomina") {
                    contributionsCollection {
                        totalCommitContributions
                        totalRepositoryContributions
                        totalPullRequestContributions
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
	console.table(result.user.contributionsCollection);
}
