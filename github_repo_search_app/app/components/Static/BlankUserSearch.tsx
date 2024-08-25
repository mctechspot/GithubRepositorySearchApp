import { FaUserAstronaut } from "react-icons/fa";

export default function BlankUserSearch() {
    return (
        <>
            <div className={`rounded-lg min-h-[200px] min-w-[200px]  p-4`}>
                <div className={`grid grid-cols-1 items-center justify-center gap-4 w-ful`}>
                    <div className={`block m-auto text-center text-[50px]`}><FaUserAstronaut /></div>
                    <p className={`text-center`}>Search for a user to see their profile details and repositories.</p>
                </div>
            </div>
        </>
    );
}