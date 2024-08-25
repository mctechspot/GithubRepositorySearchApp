'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { RepositoryLanguageNodeType, RepositoryNodeType, RepositoryOwnerType, UserType } from "@/app/types/Users"
import { CiSearch } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function User({ repositoryOwner }: RepositoryOwnerType) {

    const [displayedRepositories, setDisplayedRepositories] = useState<any>(repositoryOwner.repositories);

    const [repositoryFilter, setRepositoryFilter] = useState<string>("");
    const [userSearchInProgress, setUserSearchInProgress] = useState<boolean>(false);
    
    const handleRepositorySearch = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();
    };

    //  Function to filter displayed repositories by name or language
    const filterRepositoriesByName = (): void => {

        // Clean repository filter text, remove whitespace and set to lowercase
        const cleanRepoFilter: string = repositoryFilter.trim().toLowerCase();

        // Build list of terms from repository filter, splitting the string by commas and removing empty list items
        const splitSearchList: string[] = cleanRepoFilter.split(",").map((searchItem: string, index: number) => {
            return searchItem.trim().toLowerCase();
        }).filter((searchItem: string, index: number) => searchItem !== "");

        // Filter displayed repositories by name and language
        const filteredRepoNodes: RepositoryNodeType[] = repositoryOwner.repositories.nodes.filter((node: RepositoryNodeType, index: number) => {
            // Function to check if search item language is a substring of langauge list
            const checkLanguage = (searchItem: string): boolean => {
                // Build string from repository language list
                const languages: string[] = node.languages.nodes.map((language: RepositoryLanguageNodeType, index: number) => {
                    return language.name.trim().toLowerCase();
                }).join(",").split(",");
                const languagesUnique: string[] = languages.filter((value, index, array) => array.indexOf(value) === index);
                const languagesString: string = languagesUnique.join(",");
                return languagesString.includes(searchItem);
            }
            return node.name.trim().toLowerCase().includes(cleanRepoFilter) || splitSearchList.every(checkLanguage);
        });
        setDisplayedRepositories({ ...displayedRepositories, nodes: filteredRepoNodes });
    }

    useEffect(() => {
        setRepositoryFilter("");
    }, [repositoryOwner]);

    useEffect(() => {
        setDisplayedRepositories(repositoryOwner.repositories);
    }, [repositoryOwner])

    useEffect(() => {
        filterRepositoriesByName();
    }, [repositoryFilter]);

    // Function to get user data by username
    const fetchRepositoriesByUsername = async (): Promise<void> => {
        try {
            setUserSearchInProgress(true);
            // Call api request to fetch user data by username
            const res = await fetch(`api/users-graphql/fetch-user-repos/${repositoryOwner.login}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            // Convert request object to JSON Object
            const resJson = await res.json();
            //console.log(resJson);
            setUserSearchInProgress(false);
            //setUser(resJson);
            //console.log("user: ", user);
        } // Handle error
        catch (error: any) {
            console.log(`Error: ${error.message}`);
        }
    }

    return (
        <>
            <div className={`grid grid-cols-2 gap-4 w-full max-[750px]:grid-cols-1`}>
                {/* User Details */}
                <div className={`bg-green-light bg-gradient-to-r from-green-light to-blue-light text-blue-main rounded-lg p-8 w-full h-fit`}>
                    <p className={`text-xl font-black`}>{repositoryOwner.login}</p><br />
                    {repositoryOwner.bio ?
                        (
                            <>
                                <p>{repositoryOwner.bio}</p><br />
                            </>
                        ) : ("")}

                    <div>
                        <Image
                            alt={`${repositoryOwner.login} profile photo`}
                            src={repositoryOwner.avatarUrl}
                            height={300}
                            width={300}
                            className={`bg-green-light rounded`}
                        />
                    </div>
                </div>

                {/* User Repositories */}
                <div className={`w-full`}>
                    <div className={`grid grid-cols-1 gap-4 border border-solid border-green-light rounded-lg p-4 w-full overflow-y-auto repo-container-height`}>
                        <p className={`text-center font-black`}>Repositories</p>
                        <form method={`GET`} onSubmit={handleRepositorySearch}>
                            <div className={`flex items-center justify-between gap-2 w-full`}>
                                <div className={`flex flex-1 items-center justify-between gap-2 border border-green-light border-1 rounded p-4`}>
                                    <div className={`text-[20px] w-fit`}>
                                        <CiSearch />
                                    </div>
                                    <input
                                        type={`text`}
                                        placeholder={`Filter by name or programming languages (comma separated)`}
                                        value={repositoryFilter}
                                        onChange={(event) => setRepositoryFilter(event.target.value)}
                                        className={`bg-transparent placeholder:text-green-light outline-none w-full`}
                                    />
                                </div>
                                {/*<button type={`submit`}
                                    className={`bg-green-light text-blue-main font-black rounded-lg p-4 w-fit`}>
                                    Search
                                </button>*/}
                            </div>

                        </form>
                        <p className={`text-center text-lg font-black`}>{displayedRepositories.nodes.length} {displayedRepositories.nodes.length === 1 ? ("repository") : ("repositories")} </p>
                        {displayedRepositories.nodes.map((repository: RepositoryNodeType, index: number) => {
                            return (
                                <div key={`repository-${index + 1}`} className={``}>
                                    <p className={`font-black`}>{repository.name}</p>
                                    <p className={``}>{repository.description}</p>
                                    <p className={``}>{(repository.languages.nodes.map((language: RepositoryLanguageNodeType, index: number) => {
                                        return language.name
                                    })).join(", ")}</p>
                                    <Link href={repository.url} target={`_blank`} className={`flex items-center gap-2`}>
                                        <div>
                                            <FaExternalLinkAlt />
                                        </div>
                                        <span>View Repo Here</span>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}