import http from 'k6/http';
import { check } from 'k6';

function getTags(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJjb3Vyc2UtZGV0YWlscyIsInJlY2VpdmVyIjoiaWQiLCJ0aW1lc3RhbXAiOiIxNzMwNjMxNjIwOTc3IiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiJlNjg0ZmViZi04YzA3LTRkMTctOGU5Yi02MDljZTA5ODNjMmEifQ==.eyJ0YWdzIjpbNTM4XSwibGFuZ3VhZ2VJZCI6Mn0=.e30=.4c68f09d3226f8c3c1647ceb989a10b6fb4896839fda845d6f18f89f5f2aa54b';

    const url = `${baseUrl}/api/new-orchestrator/getTag/api/common/tags`;
    const functionName = 'getTag';
    console.log(`${functionName} url is `, url);

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
    console.log(`${functionName} response is `, response.body);

    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response success field is true`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null,
    });
}


export {
     getTags
};