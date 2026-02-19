"use client"
import { useEffect, useState } from "react"
import DasboardLoading from "./dashboardloading"
import Overview from "./overview/page"

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])


    return (
        <div>
            {isLoading && (
                <DasboardLoading />
            )}

            {!isLoading && (
                <Overview />
            )}
        </div>
    )
}   