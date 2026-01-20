"use client";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function Chart() {
	const data = [
		{
			value: 0,
		},
		{
			value: 35,
		},
		{
			value: 15,
		},
		{
			value: 20,
		},
		{
			value: 96,
		},
		{
			value: 50,
		},
		{
			value: 300,
		},
	];
	return (
		<div className="w-full">
			<ResponsiveContainer width="100%" height={300}>
				<LineChart data={data}>
					<Tooltip />
					<Line type="monotone" strokeWidth={4} stroke="purple" dataKey="value" dot={false} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
