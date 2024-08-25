'use client'
import { useEffect, useState } from "react"
import Image from "next/image";
import BlankUserSearch from "@/app/components/Static/BlankUserSearch"
import UserError from "@/app/components/Static/UserError"
import UserLoader from "@/app/components/Static/UserLoader"
import UserNotFound from "@/app/components/Static/UserNotFound"
import User from "@/app/components/Users/User"
import UserSearch from "@/app/components/Forms/UserSearch"
import { FaUserAstronaut } from "react-icons/fa";
import { UserSearchFormType } from "@/app/types/Forms"
import { UserType } from "@/app/types/Users"
import { StandardErrorType } from "@/app/types/Errors"

export default function Home() {
  const [usernameFilter, setUsernameFilter] = useState<string>("");
  const [user, setUser]: any = useState<UserType | StandardErrorType | null>(null);
  const [userSearchInProgress, setUserSearchInProgress]: any = useState<boolean>(false);

  return (
    <>
      <UserSearch
        usernameFilter={usernameFilter}
        setUsernameFilter={setUsernameFilter}
        userSearchInProgress={userSearchInProgress}
        setUserSearchInProgress={setUserSearchInProgress}
        user={user}
        setUser={setUser}
      />
      <br />
      {user ? (
        "error" in user ? (
          <UserError />
        ) : (
          user.data.repositoryOwner ? (
            <User repositoryOwner={user.data.repositoryOwner} />
          ) : (
            <UserNotFound usernameFilter={usernameFilter} />
          )
        )
      ) : (
        <BlankUserSearch />
      )
      }
    </>
  );
}
