import axios from 'axios';

const jiraInstance = axios.create({
    baseURL: '',  // We're using a proxy, so leave this empty
    auth: {
        username: process.env.REACT_APP_JIRA_EMAIL,
        password: process.env.REACT_APP_JIRA_API_TOKEN
    }
});

export const fetchJiraData = async (period, selectedDate) => {
    console.log('fetchJiraData called with period:', period, 'and selectedDate:', selectedDate);
    try {
        // ... (previous code remains the same)

        console.log('Sending request to JIRA API...');
        const response = await jiraInstance.get(fullUrl);

        console.log('JIRA Response received:', {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
            totalIssues: response.data.total,
            issuesReturned: response.data.issues.length
        });

        // Log the first issue (if exists) for debugging
        if (response.data.issues.length > 0) {
            console.log('Sample issue:', JSON.stringify(response.data.issues[0], null, 2));
        }

        if (response.data.issues.length === 0) {
            console.warn('No issues found in JIRA response');
            return [];
        }

        // Process the data to calculate cycle time
        const processedData = response.data.issues.map(issue => {
            const created = new Date(issue.fields.created);
            const resolved = issue.fields.resolutiondate ? new Date(issue.fields.resolutiondate) : new Date();
            const cycleTime = (resolved - created) / (1000 * 60 * 60 * 24); // Convert to days

            return {
                date: created.toISOString().split('T')[0],
                cycleTime: cycleTime
            };
        });

        console.log('Processed Data:', processedData);

        return processedData;
    } catch (error) {
        // ... (error handling remains the same)
    }
};
