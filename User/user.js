import http from 'k6/http';
import { check } from 'k6';

function getUserWishlist(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJteS1wcm9ncmVzcyIsInJlY2VpdmVyIjoiYWxsIiwidGltZXN0YW1wIjoiMTczMDY1MDYyOTMwOSIsInBsYXRmb3JtIjoiMDAiLCJ1dWlkIjoiMTdlMGE4OGUtZTgzOS00YjE2LTg5ZTItOWQwNDBjNDliMmJkIn0=.eyJwYWdpbmF0aW9uUmVxdWVzdCI6eyJzaXplIjoxNSwicGFnZSI6MH0sImxhbmd1YWdlSWQiOjJ9.e30=.b94d986eabf78a88baf9f72d342910e0ca396bec77bd4539cb51201b48f306f3';
    const functionName = 'getUserWishlist';

    const url = `${baseUrl}/api/new-orchestrator/getUser/api/wishList/all/page`;
    

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, { headers });

    
    check(response, {
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response success field is true`]: (r) => r.json().success === true,
        [`${functionName} - response is not null`]: (r) => r !== null
    });
}

function getAllInterestsByLanguageId(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkLWhvbWUiLCJyZWNlaXZlciI6IkdldEFsbEludGVyZXN0c0J5TGFuZ3VhZ2VJZCIsInRpbWVzdGFtcCI6IjE3MzA2NDIyODc5NjMiLCJwbGF0Zm9ybSI6IjAwIiwidXVpZCI6IjE3ZTBhODhlLWU4MzktNGIxNi04OWUyLTlkMDQwYzQ5YjJiZCJ9.eyJsYW5ndWFnZUlkIjoyfQ==.e30=.dd8cda83a5c569672f9fa605f4a842360873d5e0f08865e8fea5a2c936eb2c28';
    const functionName = 'getAllInterestsByLanguageId';

    const url = `${baseUrl}/api/new-orchestrator/getUser/api/users/GetAllInterestsByLanguageId`;
    

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, { headers });
    
    check(response, {
        [`${functionName} - response is not null`]: (r) => r !== null,
        [`${functionName} - response contains array with size greater than expected`]: (r) => r.json().data != null,
        [`${functionName} - response status is 200`]: (r) => r.status === 200,
        [`${functionName} - response success field is true`]: (r) => r.json().success === true
    });
}


export {
    getUserWishlist,getAllInterestsByLanguageId
  }; 