import { Card, CardContent } from "@/components/ui/card";
import { KPICardProps } from "../types";
import { cn } from "@/lib/utils";

export default function KpiCard({ title, value, change, icon: Icon, trend }: KPICardProps) {
    return (
        <Card className="overflow-hidden border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm">
            <CardContent className="p-6">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-slate-400">{title}</p>
                        <h3 className="mt-2 text-3xl font-bold text-white">{value}</h3>
                        {change !== undefined && (
                            <p className={cn(
                                "mt-2 text-sm font-medium",
                                trend === 'up' ? "text-green-400" : "text-red-400"
                            )}>
                                {change > 0 ? '+' : ''}{change.toFixed(2)}%
                            </p>
                        )}
                    </div>
                    <div className="rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-3">
                        <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                </div>
            </CardContent>
        </Card>)
}