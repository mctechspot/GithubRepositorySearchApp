import { StandardErrorType } from "@/app/types/Errors"

// Type for Repository Langauge Node Type
export type RepositoryLanguageNodeType = {
    "name": "PowerShell"
}

// Type for User Repository Node
export type RepositoryNodeType = {
    name: string,
    description: string
    url: string
    createdAt: string
    updatedAt: string
    languages: {
        nodes: RepositoryLanguageNodeType[]
    }
}

// Type for Repositories
export type RepositoriesType = {
    totalCount: number,
    pageInfo: {
        hasNextPage: boolean,
        endCursor: string | null
    },
    nodes: RepositoryNodeType[]
}

// Types for repository owner
export type RepositoryOwnerType = {
    repositoryOwner: {
        login: string;
        bio: string | null;
        avatarUrl: string;
        repositories: RepositoriesType;
    }
}

// Types for User fetched by username
export type UserType = {
    data: RepositoryOwnerType | null;
}

// Types for User Not Found
export type UserNotFoundType = {
    usernameFilter: string;
}

// Types for User fetched by username
export type UserWithRepositoriesType = {
    data: {
        repositoryOwner: {
            login: string;
            bio: string | null;
            avatarUrl: string;
            repositories: RepositoriesType;
        }
    }
}

