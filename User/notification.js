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
    const payload = 'eyJzZW5kZXIiOiJoZWFkZXItbWVzc2FnZXMiLCJyZWNlaXZlciI6ImdldFVucmVhZE1zZyIsInRpbWVzdGFtcCI6IjE3MzA2NjA2MzgwNDMiLCJwbGF0Zm9ybSI6IjAwIiwidXVpZCI6IjE3ZTBhODhlLWU4MzktNGIxNi04OWUyLTlkMDQwYzQ5YjJiZCJ9.eyJpc0xlYXJuZXIiOnRydWV9.e30=.facfc54ba626c3637d42c571a16b6dd5eb8e54bbab1d64578520532cc2fbcb9d';
    const functionName = 'getUnreadMsg';
    const url = `${baseUrl}/api/orchestrator/api/chats/getUnreadMsg`;
    
    cookie='_gcl_au=1.1.1244814011.1730407096; _scid=oi_q-IwAWsd9egnPEtET_6s0pnJ9io6U; _tt_enable_cookie=1; _ttp=WnJTum-VGyatX4x1IZrRP7yJBt5; th_capi_fn=30cb9023a560ca7c3b7081bd319b378ff82f015cafb8e322f1188642c3aa1b9f; stape_mixpanel_initial_referrer=https%3A%2F%2Faccount.almentor.net%2F; _ScCbts=%5B%22215%3Bchrome.2%3A2%3A5%22%5D; _sctr=1%7C1730322000000; _hjSessionUser_2590718=eyJpZCI6IjU5MzRlNDg4LTRiOTItNWJhNS1hOWQ2LWI2YjkxYjFjNGU4ZiIsImNyZWF0ZWQiOjE3MzA0MDcxMzQ0NDgsImV4aXN0aW5nIjp0cnVlfQ==; _gid=GA1.2.2081162525.1730547014; alm-sub-init=%7B%22url%22%3A%22%2Fhome%22%2C%22title%22%3A%22%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%85%20%D8%B1%D8%AD%D9%84%D8%A9%20%D8%AD%D9%8A%D8%A7%D8%A9%20%7C%20almentor%22%7D; alm-device-uid=bc7d0166-b212-47aa-af05-6c7a5b30d30b; token=z14pnGfnlwEd1JojsKSZqxz8MAEp%2FFcdJaJhLnBYbjZNKsMNtlUTxXl3vGpiNurhQw%2BqfWIswtZMd0QG4dLknkl3EVtV2SeAzBcB%2BjPdZwZkfZa3z63KqSYDq9SlnaXph4brxOGtDH0%3D; device=88ea2a4b-2862-4aea-a0d6-11dbe07eec6a; alm-user=W3sibGFuZyI6ImFyIn0seyJ0aGVtZSI6MH0seyJ1c2VyIjp7InV1aWQiOiIxN2UwYTg4ZS1lODM5LTRiMTYtODllMi05ZDA0MGM0OWIyYmQiLCJ0eXBlIjowLCJsaW5rIjpudWxsfX1d; alm-gtm-global-prop=eyJ0aF9jYXBpX2VtIjoiYTY5YTc4ZmYyZWU1NTliYzQ3MzAzZmVkMjMzZTZjMDFkYWU4NzQxODQ2MWI0Yzg2ZTQ1NWU2ZmJhYjRjMDg4MCIsInRoX2NhcGlfZm4iOiIzMGNiOTAyM2E1NjBjYTdjM2I3MDgxYmQzMTliMzc4ZmY4MmYwMTVjYWZiOGUzMjJmMTE4ODY0MmMzYWExYjlmIiwidXNlcl9jb3VudHJ5IjoiRUcifQ%3D%3D; th_capi_em=a69a78ff2ee559bc47303fed233e6c01dae87418461b4c86e455e6fbab4c0880; _hjSession_2590718=eyJpZCI6ImUwZDkyMWEzLTZjODItNDhjNS04YWFkLTZjMDE4MjExNTY0OCIsImMiOjE3MzA2NTAyNTQzODYsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=; _dcid=dcid.1.1730659608866.416469223; ab.storage.deviceId.18e6f6b3-5ba4-45af-967e-9f0c90cce1a9=%7B%22g%22%3A%228cc480ff-8f80-6403-edde-bbdd99eaddf7%22%2C%22c%22%3A1730407132315%2C%22l%22%3A1730660443345%7D; ab.storage.userId.18e6f6b3-5ba4-45af-967e-9f0c90cce1a9=%7B%22g%22%3A%2217e0a88e-e839-4b16-89e2-9d040c49b2bd%22%2C%22c%22%3A1730642288113%2C%22l%22%3A1730660443346%7D; ab.storage.sessionId.18e6f6b3-5ba4-45af-967e-9f0c90cce1a9=%7B%22g%22%3A%220754a992-5698-bcb6-bbeb-45d422126f9e%22%2C%22e%22%3A1730662348931%2C%22c%22%3A1730660443344%2C%22l%22%3A1730660548931%7D; _ga=GA1.2.105277857.1730407097; _scid_r=u6_q-IwAWsd9egnPEtET_6s0pnJ9io6U3ckgTQ; cto_bundle=BueXLV9YdDI4YVZJbG1aMFRqZWMlMkJhaTRpT2pzUTc2amRFOVV6d1d3VkZjQXhXRTBmM0JaMWtLV093UjY0RWhNOVZPV1N0WkRqdWpvZkMydlhTVFEyTk8yYlByZ2NjUE5kRnBGNHVSMnhsJTJGaVJIQnl4NHFZd3glMkZEZzBycWRkRnZDZVI2aHRnZDd0MjRYRXZxRVE3b0dZalAwJTJGNU1BNGF1aHQ3bDgzNFJROTQ2cVl3OWhxTHhBWlBoZXlRZFpOWWFVSnc0JTJGQWJXYkQxMWNYaXZxOWpQQzlLc2pIZyUzRCUzRA; _gat_UA-207772086-2=1; _ga_HBN3GYESRR=GS1.1.1730660425.8.1.1730660634.60.0.0';  //TEMP
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