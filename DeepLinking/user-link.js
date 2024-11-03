import http from 'k6/http';
import { check } from 'k6';

function getUserAds(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJ1c2VyLXNlcnZpY2UiLCJyZWNlaXZlciI6ImdldC1Vc2VyQWQiLCJ0aW1lc3RhbXAiOiIxNzMwNjQyMjg3MjU4IiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiIxN2UwYTg4ZS1lODM5LTRiMTYtODllMi05ZDA0MGM0OWIyYmQifQ==.e30=.e30=.a78197daea5c455a0e5b996da80d966ff2fe49078644235fb4a20cd00ffa36d4';
    const functionName = 'getUserAds';

    const url = `${baseUrl}/api/new-orchestrator/deepLinking/api/getUserAd`;
    

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, { headers });
    

    check(response, {
        [`${functionName} - is status 200`]: (r) => r.status === 200,
        [`${functionName} - success field is true`]: (r) => r.json().success === true
    });
}



export {
    getUserAds
  }; 