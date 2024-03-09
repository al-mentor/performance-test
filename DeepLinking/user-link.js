import http from 'k6/http';
import { check } from 'k6';

function getUserAds(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkIiwicmVjZWl2ZXIiOiJhdXRob3JpemUiLCJ0aW1lc3RhbXAiOiIxNzA5OTk2ODg4MDY3IiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiJmYzA4NjgzYy1iYjZjLTQyNjAtOTA2ZS1lZDhjZjJiNTE3ZGUifQ==.eyJwbGF0Zm9ybSI6IjAwIiwic3ViRG9tYWluIjpudWxsfQ==.e30=.d8278ad086fec66e27e1941a5599f4cb0db8361459e885e001fc0da9e0b11b27';
    
    const url = `${baseUrl}/deepLinking/api/getUserAd`;
    const headers = {
        'authority': 'revamp-preprod-api.almentor-mail.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, { headers });
    console.log(response.body);

    check(response, {
        'is status 200': (r) => r.status === 200
    });

    check(response, {
        'success field is true': (r) => r.json().success === true
    });
}



module.exports = {
    getUserAds
  }; 