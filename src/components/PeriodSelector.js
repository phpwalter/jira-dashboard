import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const PeriodSelector = ({ period, onPeriodChange }) => (
    <FormControl fullWidth>
        <InputLabel>Period</InputLabel>
        <Select value={period} onChange={(e) => onPeriodChange(e.target.value)}>
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="quarterly">Quarterly</MenuItem>
        </Select>
    </FormControl>
);

export default PeriodSelector;
