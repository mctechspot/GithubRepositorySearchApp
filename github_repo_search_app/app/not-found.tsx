"use client"
import { FaUserAstronaut } from "react-icons/fa";
import { CgSpinnerTwo } from "react-icons/cg";
import Error404 from "@/app/components/Errors/Error404"

export default function NotFoundPage() {
    return (
        <>
            <div>
            <Error404 />
            </div>
        </>
    );
}