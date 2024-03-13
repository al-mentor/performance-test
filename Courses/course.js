import http from 'k6/http';
import { check } from 'k6';

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

    const response = http.post(url, payload, { headers });
    console.log(`${functionName} response is `, response.body);

    const expectedSize = 10;
    check(response, {
        'response status is 200': (r) => r.status === 200,
        'response success field is true': (r) => r.json().success === true,
        'response is not null': (r) => r !== null,
        'response contains array with size greater than expected': (r) => r.json().data.items.length > expectedSize
    });
}


function myProgressCarousel(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJteS1wcm9ncmVzcyIsInJlY2VpdmVyIjoibXktcHJvZ3Jlc3MtY2Fyb3VzZWwiLCJ0aW1lc3RhbXAiOiIxNzEwMjc3NzgwMjk3IiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiJmYzA4NjgzYy1iYjZjLTQyNjAtOTA2ZS1lZDhjZjJiNTE3ZGUifQ==.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxNSwicGFnZSI6MH0sImZpbHRlciI6e319.e30=.a4d9a2cd44493338a6a39a5f5e81187bb7b0e264e6fdfa9d0a58598dc560a42d';

    const url = `${baseUrl}/getCourseProgres/api/b2b/my-progress-carousel`;
    const functionName='myProgressCarousel';
    console.log(`${functionName} url is `, url);
    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, { headers });
    console.log(`${functionName} response is `, response.body);

    check(response, {
        'response status is 200': (r) => r.status === 200,
        'response success field is true': (r) => r.json().success === true,
        'response is not null': (r) => r !== null,
    });
}


function getMostViewedCourses(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkLWhvbWUiLCJyZWNlaXZlciI6InBvcHVsYXItY291cnNlcyIsInRpbWVzdGFtcCI6IjE3MTAyNzc3ODAzMDIiLCJwbGF0Zm9ybSI6IjAwIiwidXVpZCI6ImZjMDg2ODNjLWJiNmMtNDI2MC05MDZlLWVkOGNmMmI1MTdkZSJ9.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxNSwicGFnZSI6MH0sImZpbHRlck1hcCI6e319.e30=.56d892fef20bca9e898533011283c4dbff7efa9c683e5d9505cc2d45835c6f1f';
    const functionName='getMostViewedCourses';
    const url = `${baseUrl}/getCourse/api/courses/most-viewed-courses`;
    console.log(`${functionName} url is `, url);

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, { headers });
    console.log(`${functionName} response is `, response.body);

    const expectedSize = 10;
    check(response, {
        'response status is 200': (r) => r.status === 200,
        'response success field is true': (r) => r.json().success === true,
        'response is not null': (r) => r !== null,
        'response contains array with size greater than expected': (r) => r.json().data.items.length > expectedSize
    });
}



function getMostViewedCourses(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkLWhvbWUiLCJyZWNlaXZlciI6InBvcHVsYXItY291cnNlcyIsInRpbWVzdGFtcCI6IjE3MTAyNzc3ODAzMDQiLCJwbGF0Zm9ybSI6IjAwIiwidXVpZCI6ImZjMDg2ODNjLWJiNmMtNDI2MC05MDZlLWVkOGNmMmI1MTdkZSJ9.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxNSwicGFnZSI6MH0sImZpbHRlck1hcCI6e319.e30=.ca1178cd8ff407d2eaf3ad6e8d58336f626d784d6d135039dbf4ef613383d4f6';
    const functionName='getMostViewedCourses';
    const url = `${baseUrl}/getCourse/api/courses/popular-courses`;
    console.log(`${functionName} url is `, url);

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, { headers });
    console.log(`${functionName} response is `, response.body);

    const expectedSize = 10;
    check(response, {
        'response status is 200': (r) => r.status === 200,
        'response success field is true': (r) => r.json().success === true,
        'response is not null': (r) => r !== null,
        'response contains array with size greater than expected': (r) => r.json().data.items.length > expectedSize
    });
}



function getNewCourses(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkLWhvbWUiLCJyZWNlaXZlciI6ImdldE5ld0NvdXJzZXMiLCJ0aW1lc3RhbXAiOiIxNzEwMjc5ODUyNTg2IiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiJmYzA4NjgzYy1iYjZjLTQyNjAtOTA2ZS1lZDhjZjJiNTE3ZGUifQ==.eyJsYW5ndWFnZUlkIjoyLCJwYWdpbmF0aW9uUmVxdWVzdCI6eyJwYWdlIjowLCJzaXplIjoxMn0sImZpbHRlck1hcCI6e319.e30=.b5cc706a9fa33c3eca29c8ef9c5af5b68690f710cd504f6e33833c056d76a9b1';
    const functionName='getNewCourses';

    const url = `${baseUrl}/getCourse/api/courses/getNewCourses`;

    console.log(`${functionName} url is `, url);

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, { headers });
    console.log(`${functionName} response is `, response.body);

    const expectedSize = 10;
    check(response, {
        'response status is 200': (r) => r.status === 200,
        'response success field is true': (r) => r.json().success === true,
        'response is not null': (r) => r !== null,
        'response contains array with size greater than expected': (r) => r.json().data.items.length > expectedSize
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

    const response = http.post(url, payload, { headers });
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

    const response = http.post(url, payload, { headers });

    console.log(`${functionName} response is `, response.body);

    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response success field is true`]: (r) => r.json().data != null
    });
}


module.exports = {
    getFeaturedCourses, myProgressCarousel, getMostViewedCourses, getPickOfTheDay, getNewCourses, getCourseDetails
}; 