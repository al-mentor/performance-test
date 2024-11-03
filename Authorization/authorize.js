import http from 'k6/http';
import { check } from 'k6';

function authorize(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhdXRob3JpemVkIiwicmVjZWl2ZXIiOiJhdXRob3JpemUiLCJ0aW1lc3RhbXAiOiIxNzMwNjQyMjg2OTQxIiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiIxN2UwYTg4ZS1lODM5LTRiMTYtODllMi05ZDA0MGM0OWIyYmQifQ==.eyJwbGF0Zm9ybSI6IjAwIiwic3ViRG9tYWluIjpudWxsfQ==.e30=.49e1965afd533d1c56ba497b20e9d18b65974f5dbcaf54f975f4199d5abce49e';
    
    const functionName = 'authorize';
    const url = `${baseUrl}/api/new-orchestrator/authorize/api/sso/authorize`;
    

    const headers = {
        'authority': baseUrl,
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, { headers });
    console.log('Authorize response: ' + response.body);

    check(response, {
        [`${functionName} - is status 200`]: (r) => r.status === 200,
        [`${functionName} - response success field is true`]: (r) => r.json().success === true,
    });
}

function getUserInfo(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJhdXRoIiwicmVjZWl2ZXIiOiJsb2dvdXQiLCJ0aW1lc3RhbXAiOiIxNzMwNjQyMjg3MjYyIiwicGxhdGZvcm0iOiIwMCIsInV1aWQiOiIxN2UwYTg4ZS1lODM5LTRiMTYtODllMi05ZDA0MGM0OWIyYmQifQ==.e30=.e30=.fa325bd50d3a11a9626ebc4f0cebae1eca598096da1a1bdfa9a3ba53911510d3';
    
    const functionName = 'getUserInfo';
    const url = `${baseUrl}/api/new-orchestrator/SSO/api/sso/GetUserInfo`;
    

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
        [`${functionName} - is status 200`]: (r) => r.status === 200,
        [`${functionName} - success field is true`]: (r) => r.json().success === true
    });  
}



export {
    authorize,getUserInfo
  }; 