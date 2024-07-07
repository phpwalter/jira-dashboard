import React, { useState, useEffect } from 'react';
import TimeRangeSelector from './TimeRangeSelector';
import CycleTimeChart from './CycleTimeChart';

const Dashboard = () => {
    const [timeRange, setTimeRange] = useState({
        type: 'weekly',
        startDate: new Date(),
        selectedPeriod: new Date()
    });
    const [cycleTimeData, setCycleTimeData] = useState([]);

    useEffect(() => {
        // Fetch cycle time data based on the selected time range
        fetchCycleTimeData(timeRange);
    }, [timeRange]);

    const fetchCycleTimeData = async (range) => {
        // TODO: Implement API call to fetch data from JIRA Cloud
        // For now, we'll use mock data
        const mockData = generateMockCycleTimeData(range);
        setCycleTimeData(mockData);
    };

    const generateMockCycleTimeData = (range) => {
        // Generate mock data based on the selected time range
        // This is a placeholder and should be replaced with actual API data
        const data = [];
        let currentDate = new Date(range.startDate);
        for (let i = 0; i < 10; i++) {
            data.push({
                date: new Date(currentDate),
                cycleTime: Math.floor(Math.random() * 10) + 1
            });
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return data;
    };

    return (
        <div className="dashboard">
            <h1>Development Team KPI Dashboard</h1>
            <TimeRangeSelector timeRange={timeRange} setTimeRange={setTimeRange} />
            <CycleTimeChart data={cycleTimeData} />
        </div>
    );
};

export default Dashboard;