import { Octokit, App } from "octokit"

// Initialise GitHub Oktokit SDK
export const octokit = new Octokit({
    auth: process.env.GITHUB_API_ACCESS_TOKEN
})