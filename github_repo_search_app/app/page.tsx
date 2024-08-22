'use client'
import { useEffect, useState } from "react"
import Image from "next/image";
import BlankUserSearch from "@/app/components/Static/BlankUserSearch"
import UserSearch from "@/app/components/Forms/UserSearch"
import { FaUserAstronaut } from "react-icons/fa";
import { UserSearchFormType } from "@/app/types/Forms"

export default function Home() {
  const [usernameFilter, setUsernameFilter] = useState<string>("");
  const [user, setUser]: any = useState<any>(null);
  return (
    <>
      <UserSearch
        usernameFilter={usernameFilter}
        setUsernameFilter={setUsernameFilter}
      />
      <br />
      {user ? (
        <>
          <p>User</p>
        </>
      ) : (
        <>
          <BlankUserSearch />
        </>
      )}
    </>
  );
}
