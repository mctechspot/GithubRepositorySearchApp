'use client'
import { useEffect, useState } from "react"
import Image from "next/image";
import BlankUserSearch from "@/app/components/Static/BlankUserSearch"
import UserLoader from "@/app/components/Static/UserLoader"
import UserSearch from "@/app/components/Forms/UserSearch"
import { FaUserAstronaut } from "react-icons/fa";
import { UserSearchFormType } from "@/app/types/Forms"

export default function Home() {
  const [usernameFilter, setUsernameFilter] = useState<string>("");
  const [user, setUser]: any = useState<any>(null);
  const [userSearchInProgress, setUserSearchInProgress]: any = useState<boolean>(false);

  return (
    <>
      <UserSearch
        usernameFilter={usernameFilter}
        setUsernameFilter={setUsernameFilter}
        userSearchInProgress={userSearchInProgress}
        setUserSearchInProgress={setUserSearchInProgress}
      />
      <br />
      {user ? (
        <>
          <p>User</p>
        </>
      ) : (
        userSearchInProgress ? (
          <BlankUserSearch />
        ) : (
          <BlankUserSearch />
        )
      )
      }
    </>
  );
}
