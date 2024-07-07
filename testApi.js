const axios = require('axios');
require('dotenv').config();

const jiraInstance = axios.create({
    baseURL: process.env.REACT_APP_JIRA_URL,
    auth: {
        username: process.env.REACT_APP_JIRA_EMAIL,
        password: process.env.REACT_APP_JIRA_API_TOKEN
    }
});

async function testApi() {
    try {
        const response = await jiraInstance.get('/rest/api/3/myself');
        console.log('API Test Successful:', response.data);
    } catch (error) {
        console.error('API Test Failed:', error.message);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
        }
    }
}

testApi();
