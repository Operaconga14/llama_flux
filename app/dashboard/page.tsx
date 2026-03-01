"use client"
import { useEffect, useState } from "react";
import OverviewPage from "./overview/page";
import Loading from "../loading";

export default function DashboardPage() {

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true)
        }, 3000)
    }, [])
    return isLoading ? <OverviewPage /> : <Loading />
}