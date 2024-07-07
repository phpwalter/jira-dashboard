import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, CircularProgress } from '@mui/material';
import PeriodSelector from './PeriodSelector';
import DateSelector from './DateSelector';
import CycleTimeChart from './CycleTimeChart';
import { fetchJiraData } from '../utils/jiraApi';

const CycleTimeDashboard = () => {
    const [period, setPeriod] = useState('weekly');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            console.log('getData called with period:', period, 'and selectedDate:', selectedDate);
            setIsLoading(true);
            setError(null);
            try {
                console.log('Fetching JIRA data...');
                const jiraData = await fetchJiraData(period, selectedDate);
                console.log('Received JIRA data:', jiraData);
                if (Array.isArray(jiraData) && jiraData.length > 0) {
                    setData(jiraData);
                    console.log('Data state updated with', jiraData.length, 'items');
                } else {
                    console.warn('Received empty or invalid data from JIRA');
                    setData([]);
                }
            } catch (err) {
                console.error('Error in getData:', err);
                setError(`Failed to fetch data from JIRA: ${err.message}`);
            } finally {
                setIsLoading(false);
                console.log('Loading state set to false');
            }
        };
        getData();
    }, [period, selectedDate]);

    console.log('Rendering dashboard. Current state:', { period, selectedDate, dataLength: data.length, isLoading, error });

    return (
        <Container maxWidth="lg">
            {/* ... (rest of the component remains the same) */}
        </Container>
    );
};

export default CycleTimeDashboard;
