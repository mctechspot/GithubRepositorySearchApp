// Types for UserSearchForm

import { SetStateAction } from "react";

export type UserSearchFormType = {
    usernameFilter: string;
    setUsernameFilter: React.Dispatch<SetStateAction<string>>;
    userSearchInProgress: boolean;
    setUserSearchInProgress: React.Dispatch<SetStateAction<boolean>>;

}