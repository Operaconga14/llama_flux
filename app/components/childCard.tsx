import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function Childcard({ children, className, mainClassName }: { className: string, mainClassName?: string, children: React.ReactNode }) {
    return (
        <Card className={`overflow-hidden border-white/10 bg-slate-900/90 ${mainClassName}`}>
            <CardContent className={className}>
                {children}
            </CardContent>
        </Card>
    )
}