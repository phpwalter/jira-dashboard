import React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import CycleTimeDashboard from './components/CycleTimeDashboard';

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <CycleTimeDashboard />
            </div>
        </ThemeProvider>
    );
}

export default App;
