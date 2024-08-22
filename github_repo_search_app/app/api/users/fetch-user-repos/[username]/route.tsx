import { NextRequest, NextResponse } from "next/server"
import { octokit } from "@/app/api/constants"

export async function GET(req: NextRequest, { params }: { params: { username: string } }) {
    try {
        
        // Get username parameter from request
        const username = params.username;

        // Call request to get repositories by username
        const response = await octokit.request(`/users/{username}/repos`, {
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