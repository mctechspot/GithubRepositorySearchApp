import { FaUserAstronaut } from "react-icons/fa";
import { CgSpinnerTwo } from "react-icons/cg";

export default function UserLoader() {
    return (
        <>
            <div>
                <p className={`text-center`}>Searching for user...</p>
                <br />
                <div className={`spin`}>
                    <div className={`flex items-center justify-center text-[100px] text-green-light w-full`}>
                        <CgSpinnerTwo />
                    </div>
                </div>
            </div>

        </>
    );
}