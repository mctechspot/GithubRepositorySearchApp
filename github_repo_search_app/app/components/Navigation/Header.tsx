import Link from "next/link"
import { FaGithub } from "react-icons/fa";

export default function Header() {
    return (
        <>
            <div className={`bg-green-main bg-gradient-to-r from-green-main to-blue-main text-green-light p-4`}>
                <Link href={"/"} className={`block text-center text-green-light text-xl font-bold`}>
                    <div className={`flex justify-center items-center gap-2`}>
                        <div>
                            <FaGithub />
                        </div>
                        <span>GITHUB REPOSITORY SEARCH</span>
                    </div>
                </Link>
            </div>
        </>
    );
}