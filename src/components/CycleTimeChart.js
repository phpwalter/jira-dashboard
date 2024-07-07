import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

const CycleTimeChart = ({ data }) => {
    return (
        <div className="cycle-time-chart">
            <h2>Cycle Time</h2>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="date"
                        tickFormatter={(date) => format(new Date(date), 'MM/dd')}
                    />
                    <YAxis />
                    <Tooltip
                        labelFormatter={(date) => format(new Date(date), 'MM/dd/yyyy')}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="cycleTime" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CycleTimeChart;