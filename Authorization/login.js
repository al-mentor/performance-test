import http from 'k6/http';
import { check } from 'k6';


function login(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhY2NvdW50IiwicmVjZWl2ZXIiOiJsb2dpbiIsInRpbWVzdGFtcCI6IjE3MDk5OTYxNjUzMDEiLCJwbGF0Zm9ybSI6bnVsbCwidXVpZCI6IjAwMDAtMDAwMC0wMDAwLTAwMDAifQ==.eyJlbWFpbCI6InNhbGFoLmF5bWFuK2xvYWRAYWxtZW50b3IubmV0IiwicGFzc3dvcmQiOiJBbG1lbnRvckAxMjMiLCJwbGF0Zm9ybSI6IjAwIiwic3ViRG9tYWluIjoiYmV0YS1wcmVwcm9kIn0=.e30=.5b34526c90ff8a4441287c7f45fd0186d9d57ccac4a55746b30200edbb86b21d';
    
    const url = `${baseUrl}/SSO/api/sso/login`;
    const headers = {
        'authority': 'revamp-preprod-api.almentor-mail.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, { headers });
    console.log('Login response: ' + response.body);

    check(response, {
        'is login status 200': (r) => r.status === 200
    });
}

module.exports = {
    login
  };