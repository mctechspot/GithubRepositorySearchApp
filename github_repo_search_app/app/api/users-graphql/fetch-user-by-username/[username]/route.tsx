import { NextRequest, NextResponse } from "next/server"
import { githubGraphqlURL } from "@/app/api/constants"

export async function GET(req: NextRequest, { params }: { params: { username: string } }) {
    try {

        // Get username parameter from request
        const username = params.username;


        // Build graphql query to fetch a user by username
        const requestData = JSON.stringify({
            query: `{
              repositoryOwner(login: "${username}") {
                    login
                    ... on User {
                        bio,
                        avatarUrl
                    }
                }
            }`,
        });

        // Call request to fetch a user by username
        const response = await fetch(githubGraphqlURL, {
            method: "POST",
            body: requestData,

            headers: {
                "Authorization": `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN!}`,
                "Content-Type": "application/json"
            }
        });

        // Convert response to JSON object
        const responseJson = await response.json();

        // Return response
        return NextResponse.json(responseJson, { status: response.status })

    } catch (error: any) {
        console.log(`Error fetching user by username: ${error.message}`);
        return NextResponse.json({
            'error': error.message
        }, { status: 500 })
    }
}