import http from 'k6/http';
import { check } from 'k6';

function getUserWishlist(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJteS1wcm9ncmVzcyIsInJlY2VpdmVyIjoiYWxsIiwidGltZXN0YW1wIjoiMTcxMDI3Nzc4MDMwOCIsInBsYXRmb3JtIjoiMDAiLCJ1dWlkIjoiZmMwODY4M2MtYmI2Yy00MjYwLTkwNmUtZWQ4Y2YyYjUxN2RlIn0=.eyJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxNSwicGFnZSI6MH0sImxhbmd1YWdlSWQiOjJ9.e30=.88c2df885081c7dbe4a3a3fd54cbf268d0cfd88e436cc28e397e42b2e3f85f44';
    const functionName = 'getUserWishlist';

    const url = `${baseUrl}/api/new-orchestrator/getUser/api/wishList/all/page`;
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
        [`${functionName} - response success field is true`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null
    });
}

function getAllInterestsByLanguageId(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkLWhvbWUiLCJyZWNlaXZlciI6IkdldEFsbEludGVyZXN0c0J5TGFuZ3VhZ2VJZCIsInRpbWVzdGFtcCI6IjE3MTAyNzk4NTI1OTAiLCJwbGF0Zm9ybSI6IjAwIiwidXVpZCI6ImZjMDg2ODNjLWJiNmMtNDI2MC05MDZlLWVkOGNmMmI1MTdkZSJ9.eyJsYW5ndWFnZUlkIjoyfQ==.e30=.726b783ab7a94f061103ec1c1a5f2b38711d0ff5ce2cbbc68e65a128379e193f';
    const functionName = 'getAllInterestsByLanguageId';

    const url = `${baseUrl}/api/new-orchestrator/getUser/api/users/GetAllInterestsByLanguageId`;
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
        [`${functionName} - response is not null`]: (r) => r !== null,
        [`${functionName} - response contains array with size greater than expected`]: (r) => r.json().data != null,
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response success field is true`]: (r) => r.json().success === true
    });
}


module.exports = {
    getUserWishlist,getAllInterestsByLanguageId
  }; 