import http from 'k6/http';
import { check } from 'k6';

function getMentors(baseUrl, cookie) {
    const functionName = 'getMentors';

    const url = `${baseUrl}/api/new-orchestrator/getMentor/api/mentor/all`;
    

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'ar',
        'content-type': 'text/plain',
        'cookie': cookie,
        'origin': baseUrl,
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

    const data = 'eyJzZW5kZXIiOiJob21lIiwicmVjZWl2ZXIiOiJhbGwiLCJ0aW1lc3RhbXAiOiIxNzMwNjI2NjU3MTgyIiwicGxhdGZvcm0iOm51bGwsInV1aWQiOiIwMDAwLTAwMDAtMDAwMC0wMDAwIn0=.eyJwYWdpbmF0aW9uUmVxdWVzdCI6eyJwYWdlIjowLCJzaXplIjoyMH0sImZpbHRlck1hcCI6eyJtZW50b3JfdHlwZS5pZCI6MSwibGFuZ3VhZ2UuaWQiOjJ9fQ==.e30=.ef2609fa1b8336f0c3b631335dbcd03cc595c2aa683350b8c0a0642a3e0e9602';

    const response = http.post(url, data, { headers });
    

    check(response, {
        [`${functionName} - is status 200`]: (r) => r.status === 200,
        [`${functionName} - response body has success true`]: (r) => r.json().success === true,
    });

    return {
        response
    };
}



function getMentorDetails(baseUrl, cookie) {
    const functionName = 'getMentorDetails';

    const url = `${baseUrl}/api/new-orchestrator/getMentor/api/mentor/details`;
    

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'ar',
        'content-type': 'text/plain',
        'cookie': cookie,
        'origin': baseUrl,
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

    const data = 'eyJzZW5kZXIiOiJkZXRhaWxzLW1lbnRvci1zd2lwZXIiLCJyZWNlaXZlciI6ImRldGFpbHMiLCJ0aW1lc3RhbXAiOiIxNzMwNjMxNTk3NzQ4IiwicGxhdGZvcm0iOm51bGwsInV1aWQiOiIwMDAwLTAwMDAtMDAwMC0wMDAwIn0=.eyJmaWx0ZXJNYXAiOnsibWFpbl91c2VyLm1haW5fdXNlcl90eXBlX3V1aWQiOiI4NzAxMzRjNi0wOGNlLTRlMmMtOGFkMC0yOTFiN2I3NzcxMTEiLCJsYW5ndWFnZS5pZCI6Miwic29jaWFsUmVxdWlyZWQiOnRydWUsInhwUmVxdWlyZWQiOnRydWV9fQ==.e30=.010198980b8f9c4c2edd6dca11769108638418a94b7ad67fbeb1bdc10f224126';

    const response = http.post(url, data, { headers });
    

    check(response, {
        [`${functionName} - is status 200`]: (r) => r.status === 200,
        [`${functionName} - response body has success true`]: (r) => r.json().success === true,
    });

    return {
        response
    };
}


function getMentorPageViews(baseUrl, cookie) {
    const functionName = 'getMentorPageViews';

    const url = `${baseUrl}/api/new-orchestrator/getMentor/api/mentor/update/pageViews`;
    

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'ar',
        'content-type': 'text/plain',
        'cookie': cookie,
        'origin': baseUrl,
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

    const data = 'eyJzZW5kZXIiOiJtZW50b3ItZGV0YWlscyIsInJlY2VpdmVyIjoidXBkYXRlUGFnZVZpZXdzIiwidGltZXN0YW1wIjoiMTczMDYzMTU5ODE5OSIsInBsYXRmb3JtIjpudWxsLCJ1dWlkIjoiMDAwMC0wMDAwLTAwMDAtMDAwMCJ9.eyJlbnRpdHlVVUlEIjoiODcwMTM0YzYtMDhjZS00ZTJjLThhZDAtMjkxYjdiNzc3MTExIn0=.e30=.b5d33a2ccd4c10549d4ac1d34fc948cb3085f35a9ad16634fcb2f789c1f7f927';

    const response = http.post(url, data, { headers });
    

    check(response, {
        [`${functionName} - is status 200`]: (r) => r.status === 200,
        [`${functionName} - response body has success true`]: (r) => r.json().success === true,
    });

    return {
        response
    };
}
export {
    getMentors,
    getMentorDetails,
    getMentorPageViews
};