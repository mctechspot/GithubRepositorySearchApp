import { MdError } from "react-icons/md";

export default function UserError() {
    return (
        <>
            <div className={`rounded-lg min-h-[200px] min-w-[200px]  p-4`}>
                <div className={`grid grid-cols-1 items-center justify-center gap-4 w-ful`}>
                    <div className={`block m-auto text-center text-[50px]`}><MdError /></div>
                    <p className={`text-center`}>Error fetching user.</p>
                </div>
            </div>
        </>
    );
}