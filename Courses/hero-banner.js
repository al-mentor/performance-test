import http from 'k6/http';
import { check } from 'k6';

function getHeroBanner(baseUrl, cookie) {
    const functionName = 'getHeroBanner';

    const url = `${baseUrl}/api/new-orchestrator/banner/api/getHeroBanner`;
    console.log(`${functionName} url is `, url);

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'ar',
        'content-type': 'text/plain',
        'cookie': cookie,
        'origin': baseUrl,
        'priority': 'u=1, i',
        'referer': baseUrl,
        'requester-app': 'ANONYMOUS_WEB',
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
    };

    let data = 'eyJzZW5kZXIiOiJiYW5uZXIiLCJyZWNlaXZlciI6ImdldC1iYW5uZXIiLCJ0aW1lc3RhbXAiOiIxNzMwNjI2NjU3MTc1IiwicGxhdGZvcm0iOm51bGwsInV1aWQiOiIwMDAwLTAwMDAtMDAwMC0wMDAwIn0=.eyJsYW5ndWFnZUlkIjoyfQ==.e30=.0fd77f2e5832ee88ea3c9ebc4201b62922a621fd3a53ca0b152468258779288b';

    const response = http.post(url, data, { headers });
    console.log(`${functionName} response is ${JSON.stringify(response.body)}`);


    try {
        const responseBody = JSON.parse(response.body);
        check(response, {
            [`${functionName} - is status 200`]: (r) => r.status === 200,
            [`${functionName} - response body has success true`]: (r) => responseBody.success === true,
        });
    } catch (error) {
        console.log(`${functionName} - error parsing response as JSON: ${error}`);
    }
    return {
        response
    };
}

module.exports = {
    getHeroBanner
};