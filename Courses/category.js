import http from 'k6/http';
import { check } from 'k6';

function topTemp(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkLWhvbWUiLCJyZWNlaXZlciI6InRvcFRlbXAiLCJ0aW1lc3RhbXAiOiIxNzEwMjc3NzgwMjk5IiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiJmYzA4NjgzYy1iYjZjLTQyNjAtOTA2ZS1lZDhjZjJiNTE3ZGUifQ==.eyJsYW5ndWFnZUlkIjoyfQ==.e30=.a8d042fdf43c892498334606b7b344789f4f80e24c4a7a313c010cf67b0fc1db';
    const functionName = 'topTemp';
 
    const url = `${baseUrl}/getCategory/api/categories/topTemp`;
    console.log(`${functionName} url is `,url);

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, { headers });
    console.log(`${functionName} response is `,response.body);

    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response success field is true`]: (r) => r.json().success === true
    });
}


module.exports = {
    topTemp
  }; 