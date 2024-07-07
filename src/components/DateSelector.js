import React from 'react';
import { TextField } from '@mui/material';

const DateSelector = ({ selectedDate, onDateChange }) => (
    <TextField
        type="date"
        value={selectedDate.toISOString().split('T')[0]}
        onChange={(e) => onDateChange(new Date(e.target.value))}
        label="Select Date"
        InputLabelProps={{
            shrink: true,
        }}
    />
);

export default DateSelector;
