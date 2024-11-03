import http from 'k6/http';
import { check } from 'k6';


function getUserPlatform(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJyZWRpcmVjdC1jZW50ZXIiLCJyZWNlaXZlciI6IiIsInRpbWVzdGFtcCI6IjE3MDk5OTY4ODY4NTMiLCJwbGF0Zm9ybSI6bnVsbCwidXVpZCI6ImZjMDg2ODNjLWJiNmMtNDI2MC05MDZlLWVkOGNmMmI1MTdkZSJ9.e30=.e30=.9679af21419099aaa11097770ca4b53af84a6ed5dbe1c450f1e272be91769c68';
    const functionName = 'getUserPlatform';
    const url = `${baseUrl}/SSO/api/sso/getUserPlatforms`;
    
    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, { headers });
    

    check(response, {
        [`${functionName} - is status 200`]: (r) => r.status === 200,
        [`${functionName} - success field is true`]: (r) => r.json().success === true
        });
}


export {
    getUserPlatform
}; 