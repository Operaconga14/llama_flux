import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChainDominanceChartProps } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const COLORS = ['#06b6d4', '#a855f7', '#ec4899', '#f59e0b', '#10b981', '#6366f1', '#8b5cf6', '#14b8a6'];

export default function ChainDominanceChart({ chains }: ChainDominanceChartProps) {

    const chartData = chains.map(chain => ({
        name: chain.name,
        value: chain.tvl,
    }));

    return (
        <Card className="border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90">
            <CardHeader>
                <CardTitle className="text-white">Chain Dominance</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer style={{ outline: "none", border: 'none' }} width="100%" height={300}>
                    <PieChart>
                        <Pie
                            style={{ outline: "none" }}
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#1e293b',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: '#fff'
                            }}
                            formatter={(value: number | undefined) => {
                                if (!value) return ['N/A', 'Dominance'];
                                if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
                                if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
                                return `$${value}`;
                            }}
                        />
                        <Legend
                            wrapperStyle={{ color: '#94a3b8' }}
                            formatter={(value) => <span className="text-sm text-slate-400">{value}</span>}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}