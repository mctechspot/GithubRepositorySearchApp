import { Octokit, App } from "octokit"

// Initialise GitHub Oktokit SDK
export const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
})
export const githubGraphqlURL: string = `https://api.github.com/graphql`;