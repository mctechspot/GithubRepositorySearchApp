import { StandardErrorType } from "@/app/types/Errors"

// Types for repository owner
export type RepositoryOwnerType = {
    repositoryOwner: {
        login: string;
        bio: string | null;
        avatarUrl: string;
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
