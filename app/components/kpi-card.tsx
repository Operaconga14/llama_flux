import { Card, CardContent } from "@/components/ui/card"
import { KpiCardProps } from "../types"
import { cn } from "@/lib/utils"

const KpiCard = ({ title, value, icon: Icon, trend, change, iconClassName, iconContainerClassName }: KpiCardProps) => {
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
                    <div className={`rounded-lg p-3 ${iconContainerClassName}`}>
                        <Icon className={`h-6 w-6 ${iconClassName}`} />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default KpiCard