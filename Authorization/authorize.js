import http from 'k6/http';
import { check } from 'k6';

function authorize(baseUrl, cookie) {
    const authorizePayload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkIiwicmVjZWl2ZXIiOiJhdXRob3JpemUiLCJ0aW1lc3RhbXAiOiIxNzA5OTk2ODg4MDY3IiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiJmYzA4NjgzYy1iYjZjLTQyNjAtOTA2ZS1lZDhjZjJiNTE3ZGUifQ==.eyJwbGF0Zm9ybSI6IjAwIiwic3ViRG9tYWluIjpudWxsfQ==.e30=.d8278ad086fec66e27e1941a5599f4cb0db8361459e885e001fc0da9e0b11b27';
    
    const url = `${baseUrl}/authorize/api/sso/authorize`;
    const headers = {
        'authority': 'revamp-preprod-api.almentor-mail.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, authorizePayload, { headers });
    console.log('Authorize response: ' + response.body);

    check(response, {
        'is status 200': (r) => r.status === 200
    });

    check(response, {
        'success field is true': (r) => r.json().success === true
    });

    check(response, {
        'response contains expected payload': (r) => r.json().data.isReachedMaxDevices === '00'
    });

    check(response, {
        'response contains privilege': (r) => r.json().data.privilege === '00'
    });
}

function getUserInfo(baseUrl, cookie) {
    const authorizePayload = 'eyJzZW5kZXIiOiJhdXRoIiwicmVjZWl2ZXIiOiJsb2dvdXQiLCJ0aW1lc3RhbXAiOiIxNzA5OTk2ODg4Mzg5IiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiJmYzA4NjgzYy1iYjZjLTQyNjAtOTA2ZS1lZDhjZjJiNTE3ZGUifQ==.e30=.e30=.71cb662c59369ac68ace540a22adfc9b748d205bcdf8212ce53d459795a2ae83';
    
    const url = `${baseUrl}/authorize/api/sso/GetUserInfo`;
    const headers = {
        'authority': 'revamp-preprod-api.almentor-mail.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, authorizePayload, { headers });
    console.log('GetUserInfo response: ' + response.body);

    check(response, {
        'is status 200': (r) => r.status === 200
    });

    check(response, {
        'success field is true': (r) => r.json().success === true
    });

    check(response, {
        'response contains expected payload': (r) => r.json().data.isMentor === false
    });
}



module.exports = {
    authorize,getUserInfo
  }; 