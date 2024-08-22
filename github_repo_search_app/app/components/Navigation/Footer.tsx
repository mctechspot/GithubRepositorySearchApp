import Link from "next/link"

export default function Footer() {
    const currentYear: number = new Date().getFullYear();
    return (
        <>
            <div className={`bg-green-main bg-gradient-to-r from-green-main to-blue-main text-green-light p-4`}>
                <p className={`block text-center text-green-light`}>&copy; {currentYear} Github Repository Search</p>
            </div>
        </>
    );
}