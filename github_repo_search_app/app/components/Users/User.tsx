import Image from "next/image"
import Link from "next/link"
import { RepositoryLanguageNodeType, RepositoryNodeType, RepositoryOwnerType, UserType } from "@/app/types/Users"

export default function User({ repositoryOwner }: RepositoryOwnerType) {

    return (
        <>
            <p className={`text-lg font-black`}>{repositoryOwner.login}</p><br />
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
            </div><br />

            <div className={`grid grid-cols-1 gap-8`}>
                {repositoryOwner.repositories.nodes.map((repository: RepositoryNodeType, index: number) => {
                    return (
                        <Link key={`repository-${index + 1}`} href={repository.url} target={`_blank`}>
                            <div className={``}>
                                <p className={`font-black`}>{repository.name}</p>
                                <p className={``}>{repository.description}</p>
                                <p className={``}>{repository.url}</p>
                                <p className={``}>{(repository.languages.nodes.map((language: RepositoryLanguageNodeType, index: number) => {
                                    return language.name
                                })).join(", ")}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}