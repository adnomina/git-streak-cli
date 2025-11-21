import { Command } from "commander";
import login from "./subcommands/login.js";
import status from "./subcommands/status.js";

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
	.action(status);

program.command("login").description("Log in to GitHub").action(login);

await program.parseAsync();
