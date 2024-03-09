import http from 'k6/http';
import { check } from 'k6';

function getUserNotification(baseUrl,cookie) {
    const payload = 'eyJzZW5kZXIiOiJoZWFkZXItbm90aWZpY2F0aW9uIiwicmVjZWl2ZXIiOiJ1blJlYWRDb3VudCIsInRpbWVzdGFtcCI6IjE3MDk5OTY4ODg2NzEiLCJwbGF0Zm9ybSI6IjAwIiwidXVpZCI6ImZjMDg2ODNjLWJiNmMtNDI2MC05MDZlLWVkOGNmMmI1MTdkZSJ9.e30=.e30=.6fcbc0829dd0ea23547cd2492f0a563e22fac4188c4e7d17dfa42d5441dff75f';
    const response = http.post(baseUrl + '/getUsrNotify/api/notifications/unReadCount', payload, {
        headers: {
            'authority': 'revamp-preprod-api.almentor-mail.com',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'text/plain',
            'cookie': cookie
        },
    });
    console.log(response.body);

    check(response, {
        'is status 200': (r) => r.status === 200
    });

    check(response, {
        'success field is true': (r) => r.json().success === true
    });

   
}



function getUnreadMsg(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJoZWFkZXItbWVzc2FnZXMiLCJyZWNlaXZlciI6ImdldFVucmVhZE1zZyIsInRpbWVzdGFtcCI6IjE3MDk5OTY4ODg2NzQiLCJwbGF0Zm9ybSI6IjAwIiwidXVpZCI6ImZjMDg2ODNjLWJiNmMtNDI2MC05MDZlLWVkOGNmMmI1MTdkZSJ9.eyJpc0xlYXJuZXIiOnRydWV9.e30=.5432cc57c6502a01f595fe32dad68315039b6384a2e9703a7f38e486d22f106a';

    const url = `${baseUrl}/api/notifications/unReadCount`;
    const headers = {
        'authority': 'revamp-preprod-api.almentor-mail.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
        'cookie': cookie
    };

    const response = http.post(url, payload, { headers });
    console.log('UserNotification response: ' + response.body);

    check(response, {
        'is status 200': (r) => r.status === 200
    });

    check(response, {
        'success field is true': (r) => r.json().success === true
    });
}



module.exports = {
    getUserNotification,getUnreadMsg
  }; 