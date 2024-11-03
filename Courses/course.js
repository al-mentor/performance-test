import http from 'k6/http';
import {check} from 'k6';

function getFeaturedCourses(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJwaWNrcyIsInJlY2VpdmVyIjoicmFua2VkIiwidGltZXN0YW1wIjoiMTcxMDI3Nzc4MDI5NCIsInBsYXRmb3JtIjoiMDAiLCJ1dWlkIjoiZmMwODY4M2MtYmI2Yy00MjYwLTkwNmUtZWQ4Y2YyYjUxN2RlIn0=.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxMiwicGFnZSI6MH0sImZpbHRlck1hcCI6e319.e30=.3a1b427b13f4d428f78169f0abf77455f183d1b5f68696370a2c599b3a757496';

    const url = `${baseUrl}/getCourse/api/courses/featured-courses`;
    const functionName = 'getFeaturedCourses';
    console.log(`${functionName} url is `, url);

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, {headers});
    console.log(`${functionName} response is `, response.body);

    const expectedSize = 10;
    check(response, {
        [`${functionName} -response status is 200`]: (r) => r.status === 200,
        [`${functionName} -response success field is true`]: (r) => r.json().success === true,
        [`${functionName} -response is not null`]: (r) => r !== null,
        [`${functionName} -response contains array with size greater than expected`]: (r) => r.json().data.items.length > expectedSize
    });
}


function myProgressCarousel(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJteS1wcm9ncmVzcyIsInJlY2VpdmVyIjoibXktcHJvZ3Jlc3MtY2Fyb3VzZWwiLCJ0aW1lc3RhbXAiOiIxNzEwMjc3NzgwMjk3IiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiJmYzA4NjgzYy1iYjZjLTQyNjAtOTA2ZS1lZDhjZjJiNTE3ZGUifQ==.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxNSwicGFnZSI6MH0sImZpbHRlciI6e319.e30=.a4d9a2cd44493338a6a39a5f5e81187bb7b0e264e6fdfa9d0a58598dc560a42d';

    const url = `${baseUrl}/api/new-orchestrator/getCourseProgres/api/b2b/my-progress-carousel`;
    const functionName = 'myProgressCarousel';
    console.log(`${functionName} url is `, url);
    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, {headers});
    console.log(`${functionName} response is `, response.body);

    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} -response success field is true`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null,
    });
}


function getMostViewedCourses(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkLWhvbWUiLCJyZWNlaXZlciI6InBvcHVsYXItY291cnNlcyIsInRpbWVzdGFtcCI6IjE3MTAyNzc3ODAzMDIiLCJwbGF0Zm9ybSI6IjAwIiwidXVpZCI6ImZjMDg2ODNjLWJiNmMtNDI2MC05MDZlLWVkOGNmMmI1MTdkZSJ9.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxNSwicGFnZSI6MH0sImZpbHRlck1hcCI6e319.e30=.56d892fef20bca9e898533011283c4dbff7efa9c683e5d9505cc2d45835c6f1f';
    const functionName = 'getMostViewedCourses';
    const url = `${baseUrl}/getCourse/api/courses/most-viewed-courses`;
    console.log(`${functionName} url is `, url);

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, {headers});
    console.log(`${functionName} response is `, response.body);

    const expectedSize = 10;
    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response status is 200`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null
    });
}


function getPopularCourses(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkLWhvbWUiLCJyZWNlaXZlciI6InBvcHVsYXItY291cnNlcyIsInRpbWVzdGFtcCI6IjE3MTAyNzc3ODAzMDQiLCJwbGF0Zm9ybSI6IjAwIiwidXVpZCI6ImZjMDg2ODNjLWJiNmMtNDI2MC05MDZlLWVkOGNmMmI1MTdkZSJ9.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxNSwicGFnZSI6MH0sImZpbHRlck1hcCI6e319.e30=.ca1178cd8ff407d2eaf3ad6e8d58336f626d784d6d135039dbf4ef613383d4f6';
    const functionName = 'getMostViewedCourses';
    const url = `${baseUrl}/api/new-orchestrator/getCourse/api/courses/popular-courses`;
    console.log(`${functionName} url is `, url);

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, {headers});
    console.log(`${functionName} response is `, response.body);

    const expectedSize = 10;
    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response status is 200`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null,
    });
}


function getNewCourses(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkLWhvbWUiLCJyZWNlaXZlciI6ImdldE5ld0NvdXJzZXMiLCJ0aW1lc3RhbXAiOiIxNzEwMjc5ODUyNTg2IiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiJmYzA4NjgzYy1iYjZjLTQyNjAtOTA2ZS1lZDhjZjJiNTE3ZGUifQ==.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJwYWdlIjowLCJzaXplIjoxMn0sImZpbHRlck1hcCI6e319.e30=.b5cc706a9fa33c3eca29c8ef9c5af5b68690f710cd504f6e33833c056d76a9b1';
    const functionName = 'getNewCourses';

    const url = `${baseUrl}/getCourse/api/courses/getNewCourses`;

    console.log(`${functionName} url is `, url);

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, {headers});
    console.log(`${functionName} response is `, response.body);

    const expectedSize = 10;
    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response status is 200`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null,
        [`${functionName} - response contains array with size greater than expected`]: (r) => r.json().data.items.length > expectedSize
    });
}


function getPickOfTheDay(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkLWhvbWUiLCJyZWNlaXZlciI6Im91dGxpbmUiLCJ0aW1lc3RhbXAiOiIxNzEwMjc3NzgwMzA1IiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiJmYzA4NjgzYy1iYjZjLTQyNjAtOTA2ZS1lZDhjZjJiNTE3ZGUifQ==.eyJsYW5ndWFnZUlkIjoyfQ==.e30=.b51ef51223a3fe81d0d0f6af9edd820ec0af66f76e877a5c3665ae3421203c8c';
    const functionName = 'getPickOfTheDay';

    const url = `${baseUrl}/getCourse/api/courses/picksOfTheDay`;
    console.log(`${functionName} url is `, url);

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, {headers});
    console.log(`${functionName} response is `, response.body);

    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response success field is true`]: (r) => r.json().success === true
    });
}


function getCourseDetails(baseUrl) {
    const payload = '{"query": "query MyQuery {  course(id: 10, languageId: 1) {    id    name    description    duration    level    videoId    hasAssessment    courseLanguage    categoryCourseDto {      categories {        name        id      }    }    mentors {      name      title    }    learningOutcomes {      body      order    }  }}", "variables": null,"operationName": "MyQuery"}';
    const functionName = 'getCourseDetails';

    const url = `${baseUrl}/Home/graphql`;

    console.log(`${functionName} url is `, url);

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json'
    };

    const response = http.post(url, payload, {headers});

    console.log(`${functionName} response is `, response.body);

    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response success field is true`]: (r) => r.json().data != null
    });
}

function getCourseDiscovery(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhbm9ueW1vdXMtaG9tZSIsInJlY2VpdmVyIjoiY291cnNlcy1kaXNjb3ZlcnkiLCJ0aW1lc3RhbXAiOiIxNzMwNjI2NjU3MTc4IiwicGxhdGZvcm0iOm51bGwsInV1aWQiOiIwMDAwLTAwMDAtMDAwMC0wMDAwIn0=.eyJsYW5ndWFnZUlkIjoyfQ==.e30=.db216c0c31ad3f8983943e574c5b49e7c977c80b920e365caaf6db6619014d17';

    const url = `${baseUrl}/api/new-orchestrator/getCourse/api/courses/courses-discovery`;
    const functionName = 'getCourseDiscovery';
    console.log(`${functionName} url is `, url);

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'ar',
        'content-type': 'text/plain',
        'cookie': cookie,
        'origin': 'https://beta-preprod.almentor-mail.com',
        'priority': 'u=1, i',
        'referer': 'https://beta-preprod.almentor-mail.com/',
        'requester-app': 'ANONYMOUS_WEB',
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
    };

    const response = http.post(url, payload, {headers});
    console.log(`${functionName} response is `, response.body);

    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response status is 200`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null,
    });
}

function getTrendingCourses(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJ0cmVuZGluZy1jb3Vyc2VzIiwicmVjZWl2ZXIiOiJ0cmVuZGluZy1jb3Vyc2VzIiwidGltZXN0YW1wIjoiMTcxMDI3Nzc4MDI5NCIsInBsYXRmb3JtIjoiMDAiLCJ1dWlkIjoiZmMwODY4M2MtYmI2Yy00MjYwLTkwNmUtZWQ4Y2YyYjUxN2RlIn0=.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxMiwicGFnZSI6MH0sImZpbHRlck1hcCI6e319.e30=.3a1b427b13f4d428f78169f0abf77455f183d1b5f68696370a2c599b3a757496';

    const url = `${baseUrl}/api/new-orchestrator/getCourse/api/courses/trending-courses`;
    const functionName = 'getTrendingCourses';
    console.log(`${functionName} url is `, url);

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, {headers});
    console.log(`${functionName} response is `, response.body);

    const expectedSize = 10;
    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response status is 200`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null,
        [`${functionName} - response contains array with size greater than expected`]: (r) => r.json().data.items.length > expectedSize
    });
}

function getFilterCourses(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJicm93c2UtY291cnNlcy1wYWdlIiwicmVjZWl2ZXIiOiJmaWx0ZXIiLCJ0aW1lc3RhbXAiOiIxNzMwNjI5Njk4MTA2IiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiJlNjg0ZmViZi04YzA3LTRkMTctOGU5Yi02MDljZTA5ODNjMmEifQ==.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxNSwicGFnZSI6MCwic29ydCI6InJlbGVhc2VkQXQsZGVzYyJ9LCJmaWx0ZXJNYXAiOnsiaXNTcG9uc29yZWQiOjF9fQ==.e30=.9d2a3a9b2b4d41e841169a56d110aa233ff7aa0953c41d056c1e32961dc35c83';

    const url = `${baseUrl}/api/new-orchestrator/getCourse/api/courses/filter`;
    const functionName = 'getFilterCourses';
    console.log(`${functionName} url is `, url);

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'ar',
        'content-type': 'text/plain',
        'cookie': cookie,
        'origin': 'https://beta-preprod-authorized.almentor-mail.com',
        'priority': 'u=1, i',
        'referer': 'https://beta-preprod-authorized.almentor-mail.com/',
        'requester-app': 'B2C_WEB',
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
    };

    const response = http.post(url, payload, {headers});
    console.log(`${functionName} response is `, response.body);

    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response status is 200`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null,
    });
}


function getCourseIdPermanentLink(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJjb3Vyc2UtZGV0YWlscyIsInJlY2VpdmVyIjoicGVybWFuZW50TGluayIsInRpbWVzdGFtcCI6IjE3MzA2MzE1OTcwMjgiLCJwbGF0Zm9ybSI6bnVsbCwidXVpZCI6IjAwMDAtMDAwMC0wMDAwLTAwMDAifQ==.eyJwZXJtYW5lbnRMaW5rIjoiTGVhZGluZy1DaGFuZ2UtaW4tT3JnYW5pemF0aW9ucy1pbi1FbmdsaXNoIn0=.e30=.df37c92f3115c22e6ec98cb513552a6c2f92cbd2bed50c8fcda6dbc79d17bf3b';

    const url = `${baseUrl}/api/new-orchestrator/getCourse/api/courses/id/permanentLink`;
    const functionName = 'getCourseIdPermanentLink';
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

    const response = http.post(url, payload, {headers});
    console.log(`${functionName} response is `, response.body);

    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response success field is true`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null,
    });
}

function getCourseCategories(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJjb3Vyc2UtZGV0YWlscyIsInJlY2VpdmVyIjoiY2F0ZWdvcnkiLCJ0aW1lc3RhbXAiOiIxNzMwNjMxNTk3MzE2IiwicGxhdGZvcm0iOm51bGwsInV1aWQiOiIwMDAwLTAwMDAtMDAwMC0wMDAwIn0=.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJwYWdlIjowLCJzaXplIjoxfSwiZmlsdGVyTWFwIjp7ImMuaWQiOjYsInRhZ1JlcXVpcmVkIjp0cnVlLCJsZWFybmluZ091dGNvbWVSZXF1aXJlZCI6dHJ1ZSwicHJvZHVjZXJUeXBlUmVxdWlyZWQiOnRydWV9fQ==.e30=.656c23d825130f5cacf03d4444f6b6d98ea53312f159d9145f0e17dfc2da6109';

    const url = `${baseUrl}/api/new-orchestrator/getCourse/api/courses/id/category`;
    const functionName = 'getCourse';
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

    const response = http.post(url, payload, {headers});
    console.log(`${functionName} response is `, response.body);

    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response success field is true`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null,
    });
}


function getBenefitsAndPrerequisites(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJjb3Vyc2UtZGV0YWlscyIsInJlY2VpdmVyIjoiQmVuZWZpdHNBbmRQcmVyZXF1aXNpdGVzIiwidGltZXN0YW1wIjoiMTczMDYzMTU5NzczMyIsInBsYXRmb3JtIjpudWxsLCJ1dWlkIjoiMDAwMC0wMDAwLTAwMDAtMDAwMCJ9.eyJsYW5ndWFnZUlkIjoyLCJlbnRpdHlJZCI6Nn0=.e30=.d3070577266131a95e6d1c1b55d966a71c767a4c07fb463e603102d315bba46a';

    const url = `${baseUrl}/api/new-orchestrator/getCourse/api/courses/BenefitsAndPrerequisites`;
    const functionName = 'getBenefitsAndPrerequisites';
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

    const response = http.post(url, payload, {headers});
    console.log(`${functionName} response is `, response.body);

    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response success field is true`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null,
    });
}


function getRelatedCourses(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJjb3Vyc2UtZGV0YWlscyIsInJlY2VpdmVyIjoicmVsYXRlZCIsInRpbWVzdGFtcCI6IjE3MzA2MzE1OTc3MzQiLCJwbGF0Zm9ybSI6bnVsbCwidXVpZCI6IjAwMDAtMDAwMC0wMDAwLTAwMDAifQ==.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJwYWdlIjowLCJzaXplIjoxMn0sImZpbHRlck1hcCI6eyJjb3Vyc2VJZCI6NiwiYy5jYXRlZ29yeUlkIjpbNSw2OTQsODk2LDEwOTYsMTA5NywxMTAwXSwiY2F0ZWdvcnlUeXBlSWQiOjF9fQ==.e30=.05067c7dcd7731b446daf096bc00fd88998a410e594b9a389f4abbfb938b3ee9';

    const url = `${baseUrl}/api/new-orchestrator/getCourse/api/courses/related`;
    const functionName = 'getRelatedCourses';
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

    const response = http.post(url, payload, {headers});
    console.log(`${functionName} response is `, response.body);

    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response success field is true`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null,
    });
}


function getCourseCurriculum(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJjb3Vyc2UtZGV0YWlscyIsInJlY2VpdmVyIjoib3V0bGluZSIsInRpbWVzdGFtcCI6IjE3MzA2MzE1OTc3MzYiLCJwbGF0Zm9ybSI6bnVsbCwidXVpZCI6IjAwMDAtMDAwMC0wMDAwLTAwMDAifQ==.eyJoaWVyYXJjaHlMZXZlbCI6MiwiZW50aXR5SWQiOjYsImxhbmd1YWdlSWQiOjJ9.e30=.6592ddadcd07a67ff9233ae2208eab604f6cde54aeb09fdeb2c51d34138ab6c1';

    const url = `${baseUrl}/api/orchestrator/api/courses/simple/curriculum`;
    const functionName = 'getCourseCurriculum';
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

    const response = http.post(url, payload, {headers});
    console.log(`${functionName} response is `, response.body);

    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response success field is true`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null,
    });
}

export {
    getFeaturedCourses,
    myProgressCarousel,
    getMostViewedCourses,
    getPopularCourses,
    getPickOfTheDay,
    getNewCourses,
    getCourseDetails,
    getCourseDiscovery,
    getTrendingCourses,
    getFilterCourses,
    getCourseIdPermanentLink,
    getCourseCategories,
    getBenefitsAndPrerequisites,
    getRelatedCourses,
    getCourseCurriculum
}; 