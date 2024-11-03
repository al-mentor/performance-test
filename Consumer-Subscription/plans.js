import http from 'k6/http';
import { check } from 'k6';

function getPlans(baseUrl, cookie) {
    const functionName = 'getPlans';

    const url = `${baseUrl}/api/plan-svc/plans`;
    

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'ar',
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

    const response = http.get(url, { headers });
    

    check(response, {
        [`${functionName} - is status 200`]: (r) => r.status === 200
    });

    return {
        response
    };
}

export {
    getPlans
};