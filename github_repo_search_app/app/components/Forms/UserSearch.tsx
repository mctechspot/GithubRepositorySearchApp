'use client'
import { useEffect, useState } from 'react'
import { UserSearchFormType } from "@/app/types/Forms"

export default function UserSearch({ 
    usernameFilter, setUsernameFilter, userSearchInProgress, setUserSearchInProgress, user, setUser }
    : UserSearchFormType) {

    // Function to handle user search form submit
    const handleUserSearch = async(event: React.FormEvent): Promise<void> => {
        // Prevent page reload after form submission
        event.preventDefault();
        console.log(usernameFilter);
        await fetchUserByUsername();
    };

    // Function to get user data by username
    const fetchUserByUsername = async (): Promise<void> => {
        try {
            setUserSearchInProgress(true);
            // Call api request to fetch user data by username
            const res = await fetch(`api/users-graphql/fetch-user-repos/${usernameFilter}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            // Convert request object to JSON Object
            const resJson = await res.json();
            console.log(resJson);
            setUserSearchInProgress(false);
            setUser(resJson);
            console.log("user: ", user);
        } // Handle error
        catch (error: any) {
            console.log(`Error: ${error.message}`);
        }
    }

    /*useEffect(() => {
        fetchUserByUsername();
    }, [usernameFilter])*/

    return (
        <>
            <form method="GET" onSubmit={handleUserSearch}>
                <div className={`flex items-center justify-between gap-4 w-full \
                    max-[450px]:grid max-[450px]:grid-cols-1 max-[450px]:gap-4`}>
                    <input
                        type={`text`}
                        placeholder={`Search for user by username`}
                        onChange={(event) => setUsernameFilter(event.target.value.trim())}
                        className={`bg-transparent text-green-light border border-solid border-1 rounded-lg \
                    outline-none placeholder:text-green-light p-4 w-full \
                    max-[450px]:w-full`}
                    />
                    <button
                        type={`submit`}
                        className={`bg-green-light text-blue-main font-black rounded-lg p-4 max-[450px]:w-full`}
                    >
                        Search
                    </button>
                </div>
            </form>
        </>
    );
}