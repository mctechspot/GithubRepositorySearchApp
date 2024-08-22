import { NextRequest, NextResponse } from "next/server"
import { Octokit, App } from "octokit"

export async function GET(req: NextRequest, { params }: { params: { username: string } }) {
    try {

        // Get username parameter from request
        const username = params.username;

        // Initialise GitHub Oktokit SDK
        const octokit = new Octokit({
            auth: process.env.GITHUB_API_ACCESS_TOKEN
        })
        
        // Call request to get user by username
        const response = await octokit.request(`GET /users/{username}`, {
            username: username,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          })

        // Return response
        return NextResponse.json({
            'data': response
        }, { status: response.status })
        
    } catch (error: any) {
        console.log(`Error fetching user: `);
        return NextResponse.json({
            'error': error.message
        }, { status: 500 })
    }
}