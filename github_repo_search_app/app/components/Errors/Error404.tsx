import { FaUserAstronaut } from "react-icons/fa";
import { TbError404 } from "react-icons/tb";

export default function BlankUserSearch() {
    return (
        <>
            <div className={`rounded-lg min-h-[200px] min-w-[200px]  p-4`}>
                <div className={`grid grid-cols-1 items-center justify-center gap-4 w-ful`}>
                    <div className={`block m-auto text-center text-[50px]`}><TbError404 /></div>
                    <p className={`text-center`}>Page not found.</p>
                </div>
            </div>
        </>
    );
}