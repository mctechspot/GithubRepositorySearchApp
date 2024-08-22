// Types for UserSearchForm
import { SetStateAction } from "react";
import { UserType } from "@/app/types/Users"
import { StandardErrorType } from "@/app/types/Errors"


export type UserSearchFormType = {
    usernameFilter: string;
    setUsernameFilter: React.Dispatch<SetStateAction<string>>;
    userSearchInProgress: boolean;
    setUserSearchInProgress: React.Dispatch<SetStateAction<boolean>>;
    user: UserType | StandardErrorType | null;
    setUser: React.Dispatch<SetStateAction<UserType | StandardErrorType | null>>
}