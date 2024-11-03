import http from 'k6/http';
import { check } from 'k6';

function getUserNotification(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJoZWFkZXItbm90aWZpY2F0aW9uIiwicmVjZWl2ZXIiOiJ1blJlYWRDb3VudCIsInRpbWVzdGFtcCI6IjE3MDk5OTY4ODg2NzEiLCJwbGF0Zm9ybSI6IjAwIiwidXVpZCI6ImZjMDg2ODNjLWJiNmMtNDI2MC05MDZlLWVkOGNmMmI1MTdkZSJ9.e30=.e30=.6fcbc0829dd0ea23547cd2492f0a563e22fac4188c4e7d17dfa42d5441dff75f';
    const functionName = 'getUserNotification';
    const url=baseUrl + '/getUsrNotify/api/notifications/unReadCount';
    

    const response = http.post(url, payload, {
        headers: {
            'authority': baseUrl,
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'text/plain',
            'cookie': cookie
        },
    });

    check(response, {
        [`${functionName} - is status 200`]: (r) => r.status === 200,
        [`${functionName} - success field is true`]: (r) => r.json().success === true
    });


}



function getUnreadMsg(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJoZWFkZXItbWVzc2FnZXMiLCJyZWNlaXZlciI6ImdldFVucmVhZE1zZyIsInRpbWVzdGFtcCI6IjE3MzA2NDU3MDQ3ODgiLCJwbGF0Zm9ybSI6IjAwIiwidXVpZCI6ImU2ODRmZWJmLThjMDctNGQxNy04ZTliLTYwOWNlMDk4M2MyYSJ9.eyJpc0xlYXJuZXIiOnRydWV9.e30=.aeae863fc4377ed2a1e83579e6eaa7f794c76e02074c13b5890e71e54540cf67';    const functionName = 'getUnreadMsg';
    const url = `${baseUrl}/api/orchestrator/api/chats/getUnreadMsg`;
    
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

    const response = http.post(url, payload, { headers });
    

    check(response, {
        [`${functionName} - is status 200`]: (r) => r.status === 200,
        [`${functionName} - response success field is true`]: (r) => r.json().success === true,
    });

}



export {
    getUserNotification, getUnreadMsg
}; 