import http from 'k6/http';
import {check} from 'k6';

function getFeaturedCourses(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJwaWNrcyIsInJlY2VpdmVyIjoicmFua2VkIiwidGltZXN0YW1wIjoiMTcxMDI3Nzc4MDI5NCIsInBsYXRmb3JtIjoiMDAiLCJ1dWlkIjoiZmMwODY4M2MtYmI2Yy00MjYwLTkwNmUtZWQ4Y2YyYjUxN2RlIn0=.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxMiwicGFnZSI6MH0sImZpbHRlck1hcCI6e319.e30=.3a1b427b13f4d428f78169f0abf77455f183d1b5f68696370a2c599b3a757496';

    const url = `${baseUrl}/getCourse/api/courses/featured-courses`;
    const functionName = 'getFeaturedCourses';


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
    const payload = 'eyJzZW5kZXIiOiJteS1wcm9ncmVzcyIsInJlY2VpdmVyIjoibXktcHJvZ3Jlc3MtY2Fyb3VzZWwiLCJ0aW1lc3RhbXAiOiIxNzMwNjUwMjUwOTI2IiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiIxN2UwYTg4ZS1lODM5LTRiMTYtODllMi05ZDA0MGM0OWIyYmQifQ==.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjo1LCJwYWdlIjowfSwiZmlsdGVyIjp7fX0=.e30=.2bc0b92563a4f9402064d0391b3c9cf51d50aa0f34d387909e61d17c7a5268e9';

    const url = `${baseUrl}/api/new-orchestrator/getCourseProgres/api/b2b/my-progress-carousel`;
    const functionName = 'myProgressCarousel';

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
    const payload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkLWhvbWUiLCJyZWNlaXZlciI6InBvcHVsYXItY291cnNlcyIsInRpbWVzdGFtcCI6IjE3MzA2NjA2MzgzMzkiLCJwbGF0Zm9ybSI6IjAwIiwidXVpZCI6IjE3ZTBhODhlLWU4MzktNGIxNi04OWUyLTlkMDQwYzQ5YjJiZCJ9.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxNSwicGFnZSI6MH0sImZpbHRlck1hcCI6e319.e30=.8700dbf3d7b46f374a01a54755381636d934f339a12c82c80f38ce076566e8f2';
    const functionName = 'getPopularCourses';
    const url = `${baseUrl}/api/new-orchestrator/getCourse/api/courses/popular-courses`;


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
    const payload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkLWhvbWUiLCJyZWNlaXZlciI6InBvcHVsYXItY291cnNlcyIsInRpbWVzdGFtcCI6IjE3MzA2NDIyODc5NDciLCJwbGF0Zm9ybSI6IjAwIiwidXVpZCI6IjE3ZTBhODhlLWU4MzktNGIxNi04OWUyLTlkMDQwYzQ5YjJiZCJ9.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxNSwicGFnZSI6MH0sImZpbHRlck1hcCI6e319.e30=.65fe3dd01820c9b0cc34497807313884746530f8ed5d30b652a07287b5b526f5';

    const url = `${baseUrl}/api/new-orchestrator/getCourse/api/courses/trending-courses`;
    const functionName = 'getTrendingCourses';

    cookie='_gcl_au=1.1.1244814011.1730407096; _scid=oi_q-IwAWsd9egnPEtET_6s0pnJ9io6U; _tt_enable_cookie=1; _ttp=WnJTum-VGyatX4x1IZrRP7yJBt5; th_capi_fn=30cb9023a560ca7c3b7081bd319b378ff82f015cafb8e322f1188642c3aa1b9f; th_capi_em=17550f03a4b68ee034bb5fbf4d9f7618eca9cb8bbebdb0696ec81429d284bcc5; stape_mixpanel_initial_referrer=https%3A%2F%2Faccount.almentor.net%2F; _ScCbts=%5B%22215%3Bchrome.2%3A2%3A5%22%5D; _sctr=1%7C1730322000000; _hjSessionUser_2590718=eyJpZCI6IjU5MzRlNDg4LTRiOTItNWJhNS1hOWQ2LWI2YjkxYjFjNGU4ZiIsImNyZWF0ZWQiOjE3MzA0MDcxMzQ0NDgsImV4aXN0aW5nIjp0cnVlfQ==; _gid=GA1.2.2081162525.1730547014; alm-sub-init=%7B%22url%22%3A%22%2Fhome%22%2C%22title%22%3A%22%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%85%20%D8%B1%D8%AD%D9%84%D8%A9%20%D8%AD%D9%8A%D8%A7%D8%A9%20%7C%20almentor%22%7D; _dcid=dcid.1.1730621987803.470454589; ab.storage.sessionId.18e6f6b3-5ba4-45af-967e-9f0c90cce1a9=%7B%22g%22%3A%22994ebc77-af47-4d6f-9770-dd4267e080bf%22%2C%22e%22%3A1730643886669%2C%22c%22%3A1730642086669%2C%22l%22%3A1730642086669%7D; ab.storage.deviceId.18e6f6b3-5ba4-45af-967e-9f0c90cce1a9=%7B%22g%22%3A%228cc480ff-8f80-6403-edde-bbdd99eaddf7%22%2C%22c%22%3A1730407132315%2C%22l%22%3A1730642086670%7D; ab.storage.userId.18e6f6b3-5ba4-45af-967e-9f0c90cce1a9=%7B%22g%22%3A%229f36201d-7ac6-4c1f-a27a-572ecc5aadb7%22%2C%22c%22%3A1730407132322%2C%22l%22%3A1730642086670%7D; _hjSession_2590718=eyJpZCI6IjgyNWY5YmJmLWNjYmItNDBkNS1iMjE0LTYzZTE4MmE5ZGI1MCIsImMiOjE3MzA2NDIwODkwOTYsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=; alm-device-uid=bc7d0166-b212-47aa-af05-6c7a5b30d30b; _ga=GA1.2.105277857.1730407097; _gat_UA-207772086-2=1; _scid_r=ta_q-IwAWsd9egnPEtET_6s0pnJ9io6U3ckgOA; cto_bundle=3qUR2F9YdDI4YVZJbG1aMFRqZWMlMkJhaTRpT3FkTEVNc1ZYdHYlMkJqa2tqZUlEaHhITjRXTFVaam1zaDJUZVQ1aUclMkJCTHc1YzJaRU1vY0V0eUlidlNZNVQlMkIlMkY2YWw4cVBVbkE1dTlzbm94JTJGajR1Wk45c0hMMTlKRklkUEVPOFZWWmxYMFk2ZUNrJTJGN0hVVTBsOGtvSUxTb1NmRndLR3djVHkzSThDSTJFVDFvdXNRUGtsYWIxSDdnNVJBTUxxOXZOTDJ0MEx6YVNmQWE0Q3ZsUjd6cjFMU0NUeWoxSUElM0QlM0Q; token=z14pnGfnlwEd1JojsKSZqxz8MAEp%2FFcdJaJhLnBYbjZNKsMNtlUTxXl3vGpiNurhQw%2BqfWIswtZMd0QG4dLknkl3EVtV2SeAzBcB%2BjPdZwZkfZa3z63KqSYDq9SlnaXph4brxOGtDH0%3D; device=88ea2a4b-2862-4aea-a0d6-11dbe07eec6a; alm-user=W3sibGFuZyI6ImFyIn0seyJ0aGVtZSI6MH0seyJ1c2VyIjp7InV1aWQiOiIxN2UwYTg4ZS1lODM5LTRiMTYtODllMi05ZDA0MGM0OWIyYmQiLCJ0eXBlIjowLCJsaW5rIjpudWxsfX1d; _ga_HBN3GYESRR=GS1.1.1730642089.6.1.1730642285.46.0.0; alm-gtm-global-prop=eyJ0aF9jYXBpX2VtIjoiYTY5YTc4ZmYyZWU1NTliYzQ3MzAzZmVkMjMzZTZjMDFkYWU4NzQxODQ2MWI0Yzg2ZTQ1NWU2ZmJhYjRjMDg4MCIsInRoX2NhcGlfZm4iOiIzMGNiOTAyM2E1NjBjYTdjM2I3MDgxYmQzMTliMzc4ZmY4MmYwMTVjYWZiOGUzMjJmMTE4ODY0MmMzYWExYjlmIiwidXNlcl9jb3VudHJ5IjoiRUcifQ%3D%3D';  //TEMP
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
        [`${functionName} - response status is 200`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null
    });
}

function getFilterCourses(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJicm93c2UtY291cnNlcy1wYWdlIiwicmVjZWl2ZXIiOiJmaWx0ZXIiLCJ0aW1lc3RhbXAiOiIxNzMwNjUwNjI5MzEyIiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiIxN2UwYTg4ZS1lODM5LTRiMTYtODllMi05ZDA0MGM0OWIyYmQifQ==.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxNSwicGFnZSI6MCwic29ydCI6InJlbGVhc2VkQXQsZGVzYyJ9LCJmaWx0ZXJNYXAiOnsiaXNTcG9uc29yZWQiOjF9fQ==.e30=.af66112e9e9fd1d95c39a8b074aee181141f7fd959401c1e4d10424504ed4a5c';

    const url = `${baseUrl}/api/new-orchestrator/getCourse/api/courses/filter`;
    const functionName = 'getFilterCourses';
    cookie = '_gcl_au=1.1.1244814011.1730407096; _scid=oi_q-IwAWsd9egnPEtET_6s0pnJ9io6U; _tt_enable_cookie=1; _ttp=WnJTum-VGyatX4x1IZrRP7yJBt5; th_capi_fn=30cb9023a560ca7c3b7081bd319b378ff82f015cafb8e322f1188642c3aa1b9f; stape_mixpanel_initial_referrer=https%3A%2F%2Faccount.almentor.net%2F; _ScCbts=%5B%22215%3Bchrome.2%3A2%3A5%22%5D; _sctr=1%7C1730322000000; _hjSessionUser_2590718=eyJpZCI6IjU5MzRlNDg4LTRiOTItNWJhNS1hOWQ2LWI2YjkxYjFjNGU4ZiIsImNyZWF0ZWQiOjE3MzA0MDcxMzQ0NDgsImV4aXN0aW5nIjp0cnVlfQ==; _gid=GA1.2.2081162525.1730547014; alm-sub-init=%7B%22url%22%3A%22%2Fhome%22%2C%22title%22%3A%22%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%85%20%D8%B1%D8%AD%D9%84%D8%A9%20%D8%AD%D9%8A%D8%A7%D8%A9%20%7C%20almentor%22%7D; alm-device-uid=bc7d0166-b212-47aa-af05-6c7a5b30d30b; token=z14pnGfnlwEd1JojsKSZqxz8MAEp%2FFcdJaJhLnBYbjZNKsMNtlUTxXl3vGpiNurhQw%2BqfWIswtZMd0QG4dLknkl3EVtV2SeAzBcB%2BjPdZwZkfZa3z63KqSYDq9SlnaXph4brxOGtDH0%3D; device=88ea2a4b-2862-4aea-a0d6-11dbe07eec6a; alm-user=W3sibGFuZyI6ImFyIn0seyJ0aGVtZSI6MH0seyJ1c2VyIjp7InV1aWQiOiIxN2UwYTg4ZS1lODM5LTRiMTYtODllMi05ZDA0MGM0OWIyYmQiLCJ0eXBlIjowLCJsaW5rIjpudWxsfX1d; alm-gtm-global-prop=eyJ0aF9jYXBpX2VtIjoiYTY5YTc4ZmYyZWU1NTliYzQ3MzAzZmVkMjMzZTZjMDFkYWU4NzQxODQ2MWI0Yzg2ZTQ1NWU2ZmJhYjRjMDg4MCIsInRoX2NhcGlfZm4iOiIzMGNiOTAyM2E1NjBjYTdjM2I3MDgxYmQzMTliMzc4ZmY4MmYwMTVjYWZiOGUzMjJmMTE4ODY0MmMzYWExYjlmIiwidXNlcl9jb3VudHJ5IjoiRUcifQ%3D%3D; ab.storage.deviceId.18e6f6b3-5ba4-45af-967e-9f0c90cce1a9=%7B%22g%22%3A%228cc480ff-8f80-6403-edde-bbdd99eaddf7%22%2C%22c%22%3A1730407132315%2C%22l%22%3A1730642288115%7D; ab.storage.userId.18e6f6b3-5ba4-45af-967e-9f0c90cce1a9=%7B%22g%22%3A%2217e0a88e-e839-4b16-89e2-9d040c49b2bd%22%2C%22c%22%3A1730642288113%2C%22l%22%3A1730642288116%7D; th_capi_em=a69a78ff2ee559bc47303fed233e6c01dae87418461b4c86e455e6fbab4c0880; _dcid=dcid.1.1730645422630.409798826; ab.storage.sessionId.18e6f6b3-5ba4-45af-967e-9f0c90cce1a9=%7B%22g%22%3A%22e73c9105-fc7e-f874-7caf-2ecf1b08b737%22%2C%22e%22%3A1730652050885%2C%22c%22%3A1730649578179%2C%22l%22%3A1730650250885%7D; _scid_r=x6_q-IwAWsd9egnPEtET_6s0pnJ9io6U3ckgOg; cto_bundle=UimsSl9YdDI4YVZJbG1aMFRqZWMlMkJhaTRpT3RBZGVFcGk1OTRkTXlIamhTRE94U2JzeGtCMTdjcDEzblolMkJjOENRUUglMkJjVzNWTWlwTjdyQUtRV0djY2lKTUthc3ltaGkyNHg3OU5PZTdoaFh6TkZHa0Z5NW9LSTg4ME12N3RnQnglMkIlMkZiMUdRZTdrVyUyRm9YWjE2WTd2bDhxYmdMWFIzNFAzU2lCUFVMRzAlMkZQRDRLSjYlMkIyVEhkM0Nrc3c4VWZHZDZuOGZBYTNOdWNBb2VtanNDbkZ6ejhTc1Z5YktWdyUzRCUzRA; _hjSession_2590718=eyJpZCI6ImUwZDkyMWEzLTZjODItNDhjNS04YWFkLTZjMDE4MjExNTY0OCIsImMiOjE3MzA2NTAyNTQzODYsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=; _ga=GA1.2.105277857.1730407097; _gat_UA-207772086-2=1; _ga_HBN3GYESRR=GS1.1.1730650247.7.1.1730650627.60.0.0';
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
        [`${functionName} - response status is 200`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null,
    });
}

function getCourseIdPermanentLink(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJjb3Vyc2UtZGV0YWlscyIsInJlY2VpdmVyIjoicGVybWFuZW50TGluayIsInRpbWVzdGFtcCI6IjE3MzA2MzE1OTcwMjgiLCJwbGF0Zm9ybSI6bnVsbCwidXVpZCI6IjAwMDAtMDAwMC0wMDAwLTAwMDAifQ==.eyJwZXJtYW5lbnRMaW5rIjoiTGVhZGluZy1DaGFuZ2UtaW4tT3JnYW5pemF0aW9ucy1pbi1FbmdsaXNoIn0=.e30=.df37c92f3115c22e6ec98cb513552a6c2f92cbd2bed50c8fcda6dbc79d17bf3b';

    const url = `${baseUrl}/api/new-orchestrator/getCourse/api/courses/id/permanentLink`;
    const functionName = 'getCourseIdPermanentLink';


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