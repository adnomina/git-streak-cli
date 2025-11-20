import { Command } from "commander";
import { createOAuthDeviceAuth } from "@octokit/auth-oauth-device";
import { Octokit } from "@octokit/core";
import * as fs from 'node:fs/promises';

const program = new Command();

program
    .name("streak")
    .description("A CLI tool for checking your GitHub streak")
    .version("1.0.0");

program
    .command("status")
    .description("Show the current status of your GitHub streak")
    .option("--json", "machine-readable output")
    .option("--tz", "timezone identifier")
    .action(() => {
        console.log("Hello, world!");
    });

async function logInToGitHub() {
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

    fs.open('token.txt', 'w')
        .then((file) => {
            file.write(token);
            file.close();
        })
        .catch((error) => {
            console.error('Error writing to file:', error);
        });
}

program
    .command("login")
    .description("Authenticate with GitHub OAuth Device Authentication")
    .action(logInToGitHub);

await program.parseAsync();
