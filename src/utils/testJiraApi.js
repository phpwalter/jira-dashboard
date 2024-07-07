const { fetchJiraData } = require('./jiraApi');

const testJiraApi = async () => {
    try {
        const data = await fetchJiraData('weekly', new Date());
        console.log('Successfully fetched JIRA data:', data);
    } catch (error) {
        console.error('Failed to fetch JIRA data:', error);
    }
};

testJiraApi();
