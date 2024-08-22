import Image from "next/image"
import { RepositoryOwnerType, UserType } from "@/app/types/Users"

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
            </div>
        </>
    );
}