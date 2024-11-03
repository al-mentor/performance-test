import http from 'k6/http';
import { check } from 'k6';

function topTemp(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkLWhvbWUiLCJyZWNlaXZlciI6InRvcFRlbXAiLCJ0aW1lc3RhbXAiOiIxNzEwMjc3NzgwMjk5IiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiJmYzA4NjgzYy1iYjZjLTQyNjAtOTA2ZS1lZDhjZjJiNTE3ZGUifQ==.eyJsYW5ndWFnZUlkIjoyfQ==.e30=.a8d042fdf43c892498334606b7b344789f4f80e24c4a7a313c010cf67b0fc1db';
    const functionName = 'topTemp';
 
    const url = `${baseUrl}/api/new-orchestrator/getCategory/api/categories/topTemp`;
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



function getCategories(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJjYXRlZ29yeSIsInJlY2VpdmVyIjoiY2F0ZWdvcnkiLCJ0aW1lc3RhbXAiOiIxNzMwNjI5Mzc3NDg5IiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiJlNjg0ZmViZi04YzA3LTRkMTctOGU5Yi02MDljZTA5ODNjMmEifQ==.eyJlbnRpdHlJZCI6NCwibGFuZ3VhZ2VJZCI6MiwicGFnaW5hdGlvblJlcXVlc3QiOnsicGFnZSI6MCwic2l6ZSI6MjAsInNvcnQiOiJyZWxlYXNlZEF0LGRlc2MifSwiZmlsdGVyTWFwIjp7fX0=.e30=.bbd6fe86e0e1a2bc89f820a4d70d039edbdffb04953ff6b1fc963d49550ef58c';
    const functionName = 'getCategories';

    const url = `${baseUrl}/api/new-orchestrator/getCourse/api/courses/category`;
    console.log(`${functionName} url is `,url);

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'ar',
        'content-type': 'text/plain',
        'cookie': cookie,
        'origin': baseUrl,
        'priority': 'u=1, i',
        'referer': baseUrl,
        'requester-app': 'B2C_WEB',
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
    };

    const response = http.post(url, payload, { headers });
    console.log(`${functionName} response is `,response.body);

    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response success field is true`]: (r) => r.json().success === true
    });
}



module.exports = {
    topTemp,getCategories
  }; 