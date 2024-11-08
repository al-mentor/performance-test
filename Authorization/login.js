import http from 'k6/http';
import { check } from 'k6';


export function login(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhY2NvdW50IiwicmVjZWl2ZXIiOiJsb2dpbiIsInRpbWVzdGFtcCI6IjE3MDk5OTYxNjUzMDEiLCJwbGF0Zm9ybSI6bnVsbCwidXVpZCI6IjAwMDAtMDAwMC0wMDAwLTAwMDAifQ==.eyJlbWFpbCI6InNhbGFoLmF5bWFuK2xvYWRAYWxtZW50b3IubmV0IiwicGFzc3dvcmQiOiJBbG1lbnRvckAxMjMiLCJwbGF0Zm9ybSI6IjAwIiwic3ViRG9tYWluIjoiYmV0YS1wcmVwcm9kIn0=.e30=.5b34526c90ff8a4441287c7f45fd0186d9d57ccac4a55746b30200edbb86b21d';
    // const payload = 'eyJzZW5kZXIiOiJhY2NvdW50IiwicmVjZWl2ZXIiOiJsb2dpbiIsInRpbWVzdGFtcCI6IjE3MzA2NDIyODQ2NzEiLCJwbGF0Zm9ybSI6bnVsbCwidXVpZCI6IjAwMDAtMDAwMC0wMDAwLTAwMDAifQ==.eyJlbWFpbCI6InNhbGFoLmF5bWFuK2RjYkBhbG1lbnRvci5uZXQiLCJwYXNzd29yZCI6IkFsbWVudG9yQDEyMyIsInBsYXRmb3JtIjoiMDAiLCJzdWJEb21haW4iOiJ3d3cifQ==.e30=.42d0e3ee7418911931f8a39421940bad3cdd6244469e337180f7e96d5068781e';
    const functionName = 'login';

    const url = `${baseUrl}/api/new-orchestrator/SSO/api/sso/login`;
    

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, { headers });
    

    check(response, {
        [`${functionName} - is login status 200`]: (r) => r.status === 200
    });

    // Extract Set-Cookie headers
    const setCookieHeaders = response.headers['Set-Cookie'];
    if (setCookieHeaders) {

        if (Array.isArray(setCookieHeaders)) {
            setCookieHeaders.forEach(cookieStr => {
            });
        } else {
        }
    }

    check(response, {
        [`${functionName} - is login status 200`]: (r) => r.status === 200,
        [`${functionName} - has Set-Cookie header`]: (r) => r.headers['Set-Cookie'] !== undefined
    });

    return {
        response,
        cookies: setCookieHeaders
    };
}