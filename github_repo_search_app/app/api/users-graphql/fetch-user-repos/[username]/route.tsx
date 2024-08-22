import { NextRequest, NextResponse } from "next/server"
import { githubGraphqlURL } from "@/app/api/constants"

export async function GET(req: NextRequest, { params }: { params: { username: string } }) {
    try {

        // Get username parameter from request
        const username = params.username;

        // Build graphql query to fetch repositories by username
        const requestData = JSON.stringify({
            query: `{
                repositoryOwner(login: "${username}") {
                    login
                    ... on User {
                        bio,
                        avatarUrl
                    }
                    repositories(
                        first: 100
                        ownerAffiliations: OWNER
                        privacy: PUBLIC
                        isFork: false
                        isLocked: false
                        orderBy: { field: NAME, direction: ASC }
                    ) {
                        totalCount
                                    
                        pageInfo {
                            hasNextPage
                            endCursor
                        }
                                    
                        nodes {
                            name
                            description
                            url
                            createdAt
                            updatedAt
                            languages(first: 100) {
                                nodes {
                                    name
                                }
                            }
                        }
                    }
                }
            }`,
        });

        // Call request to fetch repositories by username
        const response = await fetch(githubGraphqlURL, {
            method: "POST",
            body: requestData,

            headers: {
                "Authorization": `Bearer ${process.env.GITHUB_API_ACCESS_TOKEN!}`,
                "Content-Type": "application/json"
            }
        });

        // Convert response to JSON object
        const responseJson = await response.json();

        // Return response
        return NextResponse.json(responseJson, { status: response.status })

    } catch (error: any) {
        console.log(`Error fetching repos by username: ${error.message}`);
        return NextResponse.json({
            'error': error.message
        }, { status: 500 })
    }
}