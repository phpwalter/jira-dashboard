import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CycleTimeChart = ({ data, period }) => {
    console.log('CycleTimeChart rendering with data:', data);

    if (!data || data.length === 0) {
        console.warn('No data provided to CycleTimeChart');
        return <div>No data available to display</div>;
    }

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="date"
                    tickFormatter={(tick) => new Date(tick).toLocaleDateString()}
                />
                <YAxis label={{ value: 'Cycle Time (days)', angle: -90, position: 'insideLeft' }} />
                <Tooltip labelFormatter={(label) => new Date(label).toLocaleDateString()} />
                <Legend />
                <Line type="monotone" dataKey="cycleTime" stroke="#8884d8" activeDot={{ r: 8 }} name="Cycle Time" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default CycleTimeChart;
