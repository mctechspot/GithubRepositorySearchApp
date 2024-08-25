import { BiSolidConfused } from "react-icons/bi";
import { UserNotFoundType } from "@/app/types/Users"

export default function UserNotFound({usernameFilter}: UserNotFoundType) {
    return (
        <>
            <div className={`rounded-lg min-h-[200px] min-w-[200px]  p-4`}>
                <div className={`grid grid-cols-1 items-center justify-center gap-4 w-ful`}>
                    <div className={`block m-auto text-center text-[50px]`}><BiSolidConfused /></div>
                    <p className={`text-center`}>User not found.</p>
                </div>
            </div>
        </>
    );
}