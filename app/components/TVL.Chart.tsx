import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { title } from "process";

export default function TVLChart({ data, title }: { data: any, title: string }) {
    return (
        <Card className="border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90">
            <CardHeader>
                <CardTitle className="text-white">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis
                            dataKey="date"
                            stroke="#64748b"
                            tick={{ fill: '#94a3b8' }}
                            tickFormatter={(value) => {
                                const date = new Date(value);
                                return `${date.getMonth() + 1}/${date.getDate()}`;
                            }}
                        />
                        <YAxis
                            stroke="#64748b"
                            tick={{ fill: '#94a3b8' }}
                            tickFormatter={(value) => {
                                if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`;
                                if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
                                return `$${value}`;
                            }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#1e293b',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: '#fff'
                            }}
                            formatter={(value: number | undefined) => {
                                if (!value) return ['N/A', 'TVL'];
                                if (value >= 1e9) return [`$${(value / 1e9).toFixed(2)}B`, 'TVL'];
                                if (value >= 1e6) return [`$${(value / 1e6).toFixed(2)}M`, 'TVL'];
                                return [`$${value.toFixed(2)}`, 'TVL'];
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="tvl"
                            stroke="url(#colorGradient)"
                            strokeWidth={2}
                            dot={false}
                        />
                        <defs>
                            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#06b6d4" />
                                <stop offset="100%" stopColor="#a855f7" />
                            </linearGradient>
                        </defs>
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}