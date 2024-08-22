import { NextRequest, NextResponse } from "next/server"
import { octokit } from "@/app/api/constants"

export async function GET(req: NextRequest) {
    try {

        // Call request to get users
        const response = await octokit.request('GET /users', {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })

        // Return response
        return NextResponse.json({
            'data': response
        }, { status: response.status })

    } catch (error: any) {
        console.log(`Error fetching list of users: ${error.message}`);
        return NextResponse.json({
            'error': error.message
        }, { status: 500 })
    }
}