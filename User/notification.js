import http from 'k6/http';
import { check } from 'k6';

function getUserNotification(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJoZWFkZXItbm90aWZpY2F0aW9uIiwicmVjZWl2ZXIiOiJ1blJlYWRDb3VudCIsInRpbWVzdGFtcCI6IjE3MDk5OTY4ODg2NzEiLCJwbGF0Zm9ybSI6IjAwIiwidXVpZCI6ImZjMDg2ODNjLWJiNmMtNDI2MC05MDZlLWVkOGNmMmI1MTdkZSJ9.e30=.e30=.6fcbc0829dd0ea23547cd2492f0a563e22fac4188c4e7d17dfa42d5441dff75f';
    const functionName = 'getUserNotification';
    const url=baseUrl + '/getUsrNotify/api/notifications/unReadCount';
    console.log(`${functionName} response is `,response.body);

    const response = http.post(url, payload, {
        headers: {
            'authority': baseUrl,
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'text/plain',
            'cookie': cookie
        },
    });
    console.log(`${functionName} response is `,response);

    check(response, {
        [`${functionName} - is status 200`]: (r) => r.status === 200,
        [`${functionName} - success field is true`]: (r) => r.json().success === true
    });


}



function getUnreadMsg(baseUrl, cookie) {
    const payload = 'eyJzZW5kZXIiOiJoZWFkZXItbWVzc2FnZXMiLCJyZWNlaXZlciI6ImdldFVucmVhZE1zZyIsInRpbWVzdGFtcCI6IjE3MTAyODEwMDI5NTciLCJwbGF0Zm9ybSI6IjAwIiwidXVpZCI6ImZjMDg2ODNjLWJiNmMtNDI2MC05MDZlLWVkOGNmMmI1MTdkZSJ9.eyJpc0xlYXJuZXIiOnRydWV9.e30=.d5e898bfe9d4862839b938bcdc1de912319f3b125bba4cd54e2753b195050451';
    const functionName = 'getUnreadMsg';
    baseUrl=baseUrl.replace("alrevampapi", "clientpapi").replace('revamp-preprod-api','revamp-preprod-client-orchestrator');
    const url = `${baseUrl}/api/orchestrator/api/chats/getUnreadMsg`;
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
        [`${functionName} - is status 200`]: (r) => r.status === 200,
        [`${functionName} - success field is true`]: (r) => r.json().success === true
    });

}



export {
    getUserNotification, getUnreadMsg
}; 