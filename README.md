# Git Streak CLI
 
## Overview
 
IMPORTANT: All of this is under active development!
The Git Streak CLI is a local command-line tool designed to keep developers informed about their daily GitHub contribution streak. It nudges them before their streak breaks, helping to maintain consistent coding habits.
 
## Features
 
*   **Streak Status at a Glance:** Quickly see your current streak length, last commit timestamp, and whether you've made a qualifying contribution today.
*   **Interactive Login:** Authorize the CLI with your GitHub account using a user-friendly OAuth device flow, eliminating the need for manual token management.
*   **Contribution History:** View a mini-heatmap of your contributions over the last N days.
*   **Offline Wins:** Add optional "offline win" notes to intentionally mark non-code days, ensuring your streak isn't broken by non-GitHub activities.
*   **Terminal Greeting Integration:** Seamlessly display your streak status every time you open your terminal (e.g., with `fish_greeting`), providing a constant, low-friction reminder.
*   **Lightweight & Fast:** Designed to run quickly, making it suitable for daily execution or integration into shell greetings.
 
## Installation
 
### Prerequisites
 
*   Node.js 20 or newer
 
### Install
 
```bash
npm install -g git-streak-cli
```
*(Note: The package name `git-streak-cli` is a placeholder and may vary.)*
 
## Usage
 
### 1. Authenticate with GitHub
 
Before using the CLI, you need to authorize it with your GitHub account. This uses the secure OAuth 2.0 Device Authorization Flow.
 
```bash
streak login
```
 
Follow the on-screen instructions:
1.  Open the provided URL in your web browser.
2.  Enter the displayed user code to authorize the application.
3.  Once authorized, the CLI will securely store your access token.
 
You can also log out at any time:
```bash
streak logout
```
 
### 2. Check Your Streak Status
 
See your current streak, last contribution, and today's status.
 
```bash
$ streak status
🔥 Streak: 12 days
✅ Last commit: 2024-04-03 21:14 local (Repo: sidequest)
⚠️ Today: no contributions yet (11h left)
```
 
Use the `--json` flag for machine-readable output:
```bash
streak status --json
```
 
You can also specify a timezone:
```bash
streak status --tz Europe/Paris
```
 
### 3. View Your Contribution History
 
See a visual representation of your contributions over a period.
 
```bash
$ streak history --days 14
┌──────────────┐
│██ ██ ░░ ██ ░░│ legend: ██ done, ░░ pending, .. note
└──────────────┘
```
 
The `--days` flag accepts an integer between 7 and 90 (default is 14).
 
### 4. Add an Offline Note
 
If you've had a productive day that didn't involve GitHub contributions, you can add a note to maintain your streak.
 
```bash
streak note "Finished planning for Project X"
```
 
## Configuration
 
You can set various configuration options using the `config set` command (future enhancement).
Configuration is stored in `~/.config/streak/config.json`.
 
## Error Handling
 
The CLI provides clear messages for common issues like missing authentication tokens, API failures, and clock skew.
 
## Contributing
 
Contributions are welcome! Please refer to the `CONTRIBUTING.md` for guidelines.
 
## License
 
This project is licensed under the MIT License.
