import Image from "next/image"
import Link from "next/link"
import { RepositoryLanguageNodeType, RepositoryNodeType, RepositoryOwnerType, UserType } from "@/app/types/Users"
import { FaExternalLinkAlt } from "react-icons/fa";

export default function User({ repositoryOwner }: RepositoryOwnerType) {

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
                    <div className={`grid grid-cols-1 gap-8 border border-solid border-green-light rounded-lg p-4 w-full`}>
                        <p className={`text-lg font-black`}>{repositoryOwner.repositories.totalCount} {repositoryOwner.repositories.totalCount === 1? ("repository"): ("repositories")} </p>
                        {repositoryOwner.repositories.nodes.map((repository: RepositoryNodeType, index: number) => {
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