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
    
    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, {headers});
    

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
    

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, {headers});
    

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
    

    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response status is 200`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null,
    });
}

function getTrendingCourses(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkLWhvbWUiLCJyZWNlaXZlciI6InBvcHVsYXItY291cnNlcyIsInRpbWVzdGFtcCI6IjE3MzA2NDU0MjI0MTAiLCJwbGF0Zm9ybSI6IjAwIiwidXVpZCI6ImU2ODRmZWJmLThjMDctNGQxNy04ZTliLTYwOWNlMDk4M2MyYSJ9.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxNSwicGFnZSI6MH0sImZpbHRlck1hcCI6e319.e30=.6987a06ddb6c9791122f7795875f4b1db5d0f6d3ec3d9e977c8fcb464f53fcb5';

    const url = `${baseUrl}/api/new-orchestrator/getCourse/api/courses/trending-courses`;
    const functionName = 'getTrendingCourses';
    
    cookie='alm-device-uid=83d5e0a9-c31d-4196-b80e-ba99e7a39930; _gcl_au=1.1.1548516614.1730360160; _scid=pHCDbdDSZvyVkOClqN92vqSFT-fOkFib; _hjSessionUser_2610635=eyJpZCI6IjI5NzY1OGZlLTM4YjktNWRkNy04ZjU0LWU3YjViNWJkOTQxNSIsImNyZWF0ZWQiOjE3MzAzNjAxNjAxNjYsImV4aXN0aW5nIjp0cnVlfQ==; _gid=GA1.2.1762868036.1730621989; token=2zzU2hSgNVx9W8viFr0VNZ3B3NuCZ%2F9YiF1sM5UBQObzV0WqZT4Nuy2wmPJi3RFKvDcCoy6oOWnMdMhz5qcuKo168cOE5fPvUP9MRPhK%2BtMmkIgLytNWZhsusyRUcOx15PF7VGdNwmw%3D; device=6aae264f-78a2-4c20-89b1-ca788b0ac9e5; alm-user=W3sibGFuZyI6ImFyIn0seyJ0aGVtZSI6MH0seyJ1c2VyIjp7InV1aWQiOiJlNjg0ZmViZi04YzA3LTRkMTctOGU5Yi02MDljZTA5ODNjMmEiLCJ0eXBlIjoxLCJsaW5rIjoiaHR0cHM6Ly9iZXRhLXByZXByb2QtYXV0aG9yaXplZC5hbG1lbnRvci1tYWlsLmNvbSJ9fV0%3D; alm-gtm-global-prop=eyJ0aF9jYXBpX2VtIjoiNjljZTRjM2MwZWU3OGMxYTA2Y2U5NjJjMzM2NWNmYzgyYjJmMDkzZGU5NTdjZDUwMWQwODUyZjk2YmEwY2VlOSIsInRoX2NhcGlfZm4iOiIwNTU2NTRlOWQ3OWIwYmZhZjA1MzJjNjY4ZTZiMDNjMTE2NzdhNmMwNjBiMWZkYmM5NGYxNGY1YTgzY2RhNTc0IiwidXNlcl9jb3VudHJ5IjoiRUcifQ%3D%3D; alm-push-request=1730798115517; alm-sub-init=%7B%22url%22%3A%22%2F%22%2C%22title%22%3A%22Learning%20is%20a%20life\'s%20journey%20%7C%20almentor%22%7D; _scid_r=tfCDbdDSZvyVkOClqN92vqSFT-fOkFibY8eD9Q; cto_bundle=CjLKRV9FZXVXRnRTaWtIb1o5aFY1M2pJbGFITTJXdDd6eW5EZ0VYcW1oOUpuUnhJQSUyQjlDMHBYQXQ1TFVTMGo0OG1UZ1dTRmpPUE5uM1JEMmtGT2dGSmg3bk9IRnJBb0t3djVuNjdjakhuSHRjSDk2TWRyMG9GaEdBU216NTdESDlBN1FpYlh1THFBWDJLSjVzem9PJTJCVGxrSjBQbnkzRyUyRnhKRmFPajkwSzNLYWE4ViUyRmQyUkNLZlQyWHBJQVBsVHFrZlRoeWVFOGI1Mm1VNW96eCUyQjk0cEQyT29raEZtVHNtVmtmbks5VjB1aUtJJTJCTlBYM0ZZUXRYTFVya2xuQUdVRWtCV2FVcGhPV0dFTlFrbHBHVkZQMnhWbzJHUSUzRCUzRA; _ga=GA1.2.816515942.1730360160; _hjSession_2610635=eyJpZCI6ImQzYmJhNTRhLWFkNjEtNGEwMy04MGU0LTkwYmUwYmE3MGQ3YSIsImMiOjE3MzA2NDQyNDA4NTMsInMiOjEsInIiOjEsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MX0=; _ga_ZBHQ56110R=GS1.2.1730645422.6.1.1730645422.0.0.0; _ga_036Y5CBY4L=GS1.1.1730645422.7.0.1730645701.0.0.0; ab.storage.sessionId.84c4b8da-627b-4674-afc0-9e86a12265f0=%7B%22g%22%3A%22e037fc14-6529-046e-d832-a0baf818ac8a%22%2C%22e%22%3A1730647505001%2C%22c%22%3A1730645705001%2C%22l%22%3A1730645705001%7D; ab.storage.deviceId.84c4b8da-627b-4674-afc0-9e86a12265f0=%7B%22g%22%3A%223ee2eab4-fd8c-3647-e032-324674de30d2%22%2C%22c%22%3A1730360194157%2C%22l%22%3A1730645705002%7D; ab.storage.userId.84c4b8da-627b-4674-afc0-9e86a12265f0=%7B%22g%22%3A%22e684febf-8c07-4d17-8e9b-609ce0983c2a%22%2C%22c%22%3A1730622069318%2C%22l%22%3A1730645705003%7D';  //TEMP
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
    

    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response status is 200`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null
    });
}

function getFilterCourses(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJicm93c2UtY291cnNlcy1wYWdlIiwicmVjZWl2ZXIiOiJmaWx0ZXIiLCJ0aW1lc3RhbXAiOiIxNzMwNjQ1NDIyNDM2IiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiJlNjg0ZmViZi04YzA3LTRkMTctOGU5Yi02MDljZTA5ODNjMmEifQ==.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxNSwicGFnZSI6MCwic29ydCI6InJlbGVhc2VkQXQsZGVzYyJ9LCJmaWx0ZXJNYXAiOnsiaXNTcG9uc29yZWQiOjF9fQ==.e30=.c49c7f22949e79910cfc0201cf6285f6901b357fbd5072f09b486eb9afc13f5c';

    const url = `${baseUrl}/api/new-orchestrator/getCourse/api/courses/filter`;
    const functionName = 'getFilterCourses';
    cookie='alm-device-uid=83d5e0a9-c31d-4196-b80e-ba99e7a39930; _gcl_au=1.1.1548516614.1730360160; _scid=pHCDbdDSZvyVkOClqN92vqSFT-fOkFib; _hjSessionUser_2610635=eyJpZCI6IjI5NzY1OGZlLTM4YjktNWRkNy04ZjU0LWU3YjViNWJkOTQxNSIsImNyZWF0ZWQiOjE3MzAzNjAxNjAxNjYsImV4aXN0aW5nIjp0cnVlfQ==; _gid=GA1.2.1762868036.1730621989; token=2zzU2hSgNVx9W8viFr0VNZ3B3NuCZ%2F9YiF1sM5UBQObzV0WqZT4Nuy2wmPJi3RFKvDcCoy6oOWnMdMhz5qcuKo168cOE5fPvUP9MRPhK%2BtMmkIgLytNWZhsusyRUcOx15PF7VGdNwmw%3D; device=6aae264f-78a2-4c20-89b1-ca788b0ac9e5; alm-user=W3sibGFuZyI6ImFyIn0seyJ0aGVtZSI6MH0seyJ1c2VyIjp7InV1aWQiOiJlNjg0ZmViZi04YzA3LTRkMTctOGU5Yi02MDljZTA5ODNjMmEiLCJ0eXBlIjoxLCJsaW5rIjoiaHR0cHM6Ly9iZXRhLXByZXByb2QtYXV0aG9yaXplZC5hbG1lbnRvci1tYWlsLmNvbSJ9fV0%3D; alm-gtm-global-prop=eyJ0aF9jYXBpX2VtIjoiNjljZTRjM2MwZWU3OGMxYTA2Y2U5NjJjMzM2NWNmYzgyYjJmMDkzZGU5NTdjZDUwMWQwODUyZjk2YmEwY2VlOSIsInRoX2NhcGlfZm4iOiIwNTU2NTRlOWQ3OWIwYmZhZjA1MzJjNjY4ZTZiMDNjMTE2NzdhNmMwNjBiMWZkYmM5NGYxNGY1YTgzY2RhNTc0IiwidXNlcl9jb3VudHJ5IjoiRUcifQ%3D%3D; alm-push-request=1730798115517; alm-sub-init=%7B%22url%22%3A%22%2F%22%2C%22title%22%3A%22Learning%20is%20a%20life\'s%20journey%20%7C%20almentor%22%7D; _scid_r=tfCDbdDSZvyVkOClqN92vqSFT-fOkFibY8eD9Q; cto_bundle=CjLKRV9FZXVXRnRTaWtIb1o5aFY1M2pJbGFITTJXdDd6eW5EZ0VYcW1oOUpuUnhJQSUyQjlDMHBYQXQ1TFVTMGo0OG1UZ1dTRmpPUE5uM1JEMmtGT2dGSmg3bk9IRnJBb0t3djVuNjdjakhuSHRjSDk2TWRyMG9GaEdBU216NTdESDlBN1FpYlh1THFBWDJLSjVzem9PJTJCVGxrSjBQbnkzRyUyRnhKRmFPajkwSzNLYWE4ViUyRmQyUkNLZlQyWHBJQVBsVHFrZlRoeWVFOGI1Mm1VNW96eCUyQjk0cEQyT29raEZtVHNtVmtmbks5VjB1aUtJJTJCTlBYM0ZZUXRYTFVya2xuQUdVRWtCV2FVcGhPV0dFTlFrbHBHVkZQMnhWbzJHUSUzRCUzRA; _ga=GA1.2.816515942.1730360160; _hjSession_2610635=eyJpZCI6ImQzYmJhNTRhLWFkNjEtNGEwMy04MGU0LTkwYmUwYmE3MGQ3YSIsImMiOjE3MzA2NDQyNDA4NTMsInMiOjEsInIiOjEsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MX0=; _ga_ZBHQ56110R=GS1.2.1730645422.6.1.1730645422.0.0.0; _ga_036Y5CBY4L=GS1.1.1730645422.7.0.1730645701.0.0.0; ab.storage.sessionId.84c4b8da-627b-4674-afc0-9e86a12265f0=%7B%22g%22%3A%22e037fc14-6529-046e-d832-a0baf818ac8a%22%2C%22e%22%3A1730647505001%2C%22c%22%3A1730645705001%2C%22l%22%3A1730645705001%7D; ab.storage.deviceId.84c4b8da-627b-4674-afc0-9e86a12265f0=%7B%22g%22%3A%223ee2eab4-fd8c-3647-e032-324674de30d2%22%2C%22c%22%3A1730360194157%2C%22l%22%3A1730645705002%7D; ab.storage.userId.84c4b8da-627b-4674-afc0-9e86a12265f0=%7B%22g%22%3A%22e684febf-8c07-4d17-8e9b-609ce0983c2a%22%2C%22c%22%3A1730622069318%2C%22l%22%3A1730645705003%7D'
    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'ar',
        'content-type': 'text/plain',
        'Cookie': cookie,
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