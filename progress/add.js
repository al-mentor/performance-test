import http from 'k6/http';
import { sleep, check } from 'k6';
import { Trend } from 'k6/metrics';

// Configuration
const config = {
    baseUrl: 'https://api-gateway.almentor.net',
    cookie:  'alm-ldi=Rvrw07OvrolBq23dzH2h; _tt_enable_cookie=1; _ttp=3zF-CZo7P22wFvSxziXvtnBJFNr; _scid=f05d02d3-0c96-48f3-b17a-0beccbf72b17; _hjSessionUser_2590718=eyJpZCI6ImMwZDhiMWQ3LWY4NjYtNTNiYi05Njc5LWE2N2QyM2M3YjZlYiIsImNyZWF0ZWQiOjE2OTY0MTE3MDM0NTQsImV4aXN0aW5nIjp0cnVlfQ==; __zlcmid=1InmGb6YHRAC8Ik; fbm_510357686322993=base_domain=.almentor.net; _vwo_uuid=D9B2B7B4A4E1A657922C8D46556B9D283; _vwo_uuid_v2=DDACCA32EE3EFD10FCCCE84ED270CE39D|1e19de288f806a5ea36cca1dfe081a40; _gcl_au=1.1.669701419.1712670907; _hjSessionUser_2610635=eyJpZCI6ImM0ODMxNDkwLTNjNTgtNWU1YS05Mzg4LTBmNzk2YmU2MjUzMSIsImNyZWF0ZWQiOjE3MTMyMDgxODEyMDMsImV4aXN0aW5nIjp0cnVlfQ==; _vis_opt_exp_12_exclude=1; _ga_ZBHQ56110R=GS1.2.1713863356.11.1.1713863356.0.0.0; mp_5dd8964c087a8c75131d8f3fbe1541b9_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A18ee32cc15baed-06e8e19b5d34d2-1c525637-1d73c0-18ee32cc15baed%22%2C%22%24device_id%22%3A%20%2218ee32cc15baed-06e8e19b5d34d2-1c525637-1d73c0-18ee32cc15baed%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D; _ga_036Y5CBY4L=GS1.1.1713896839.13.0.1713896839.0.0.2080445507; _vis_opt_exp_10_combi=1; _vwo_ds=3%241714691289%3A28.45801351%3A%3A; debug_vwo_ds=3%241715330264%3A29.49541045%3A%3A; debug_vis_opt_exp_10_split=2; debug_vis_opt_exp_10_combi=2; debug_vwo_uuid=D2E26E219D2CAE6D5B231805212A89E3A; _gid=GA1.2.425854251.1716190978; _hjSession_2590718=eyJpZCI6ImJkN2ZlMDYxLWQyMzEtNGI2My05ZmUxLTQ5YmFkNWJmNjliNSIsImMiOjE3MTYxOTA5Nzg0MzgsInMiOjEsInIiOjEsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=; _sctr=1%7C1716152400000; token=2fWL1kQwnqgg2tEutvHWyLA84qRk2KOXP9YO2d5eAphA1wmAu1fpnA%2Fzr2yhQ19aaG2A6KKmtQ5m3XXB%2BLFgKXS4sR%2FcivEzKV2BysNwiwRH%2F7LmSCFYav%2FJWr8XY3ULO3GwTQmJm9g%3D; device=8b9da9d9-63e2-4fb0-a9d2-5b83a94c0ce4; alm-user=W3sibGFuZyI6ImVuIn0seyJ0aGVtZSI6MH0seyJ1c2VyIjp7InV1aWQiOiI0MTgwYzFkMi1hYjc3LTQyZmUtOWUxOS1hYmRiNWFiYzQ5YTkiLCJ0eXBlIjowLCJsaW5rIjpudWxsfX1d; _vis_opt_s=7%7C; _vis_opt_test_cookie=1; alm-gtm-global-prop=eyJ0aF9jYXBpX2ZuIjoiYTBhMTE2YjNkZTUxZDEyYTY1ZTU4MGQzZDMwZjZiMmZiNGY1NzA4MDVjNTBkMDg0OGQ3NTdlZTk2NjgzYjZjOCIsInRoX2NhcGlfZW0iOiJjMmVjZWMwNmI0YTliYmM1YWI0NzdjZDAxZTA5ZDkyYzQwNzMzYWY5MDVkYjdhZjE1YjRmY2JjYjRkYWU0NzhlIiwiY291bnRyeSI6IkVHIn0%3D; ab.storage.deviceId.18e6f6b3-5ba4-45af-967e-9f0c90cce1a9=%7B%22g%22%3A%228c6148d2-6d24-1780-dc51-da7af66cc28e%22%2C%22c%22%3A1686246444646%2C%22l%22%3A1716193387478%7D; ab.storage.userId.18e6f6b3-5ba4-45af-967e-9f0c90cce1a9=%7B%22g%22%3A%224180c1d2-ab77-42fe-9e19-abdb5abc49a9%22%2C%22c%22%3A1716193387476%2C%22l%22%3A1716193387479%7D; th_capi_fn=a0a116b3de51d12a65e580d3d30f6b2fb4f570805c50d0848d757ee96683b6c8; th_capi_em=c2ecec06b4a9bbc5ab477cd01e09d92c40733af905db7af15b4fcbcb4dae478e; _vwo_sn=1502096%3A6%3A%3A%3A1; mp_df04c80eff821c07529540963fca1d83_mixpanel=%7B%22distinct_id%22%3A%20%224180c1d2-ab77-42fe-9e19-abdb5abc49a9%22%2C%22%24device_id%22%3A%20%2218b90a4dbd7d48-03918f2f5803b4-17525634-1d73c0-18b90a4dbd7d48%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24user_id%22%3A%20%224180c1d2-ab77-42fe-9e19-abdb5abc49a9%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22video-player%22%3A%20%22azure%22%7D; ab.storage.sessionId.18e6f6b3-5ba4-45af-967e-9f0c90cce1a9=%7B%22g%22%3A%2289f00792-4fda-2f13-ece7-1855c492f0cf%22%2C%22e%22%3A1716195989378%2C%22c%22%3A1716193387478%2C%22l%22%3A1716194189378%7D; _ga=GA1.2.774076237.1696411703; _gat_UA-207772086-2=1; _scid_r=f05d02d3-0c96-48f3-b17a-0beccbf72b17; cto_bundle=FDXLS19yYUxHVGEwa1dpTG54blhUWWtnZ0pIV0hHcTIxMk9sT1NSJTJGOHZkYVhQbDNXOGRja2I2U1g1ektLN2tqSlVXV2NnJTJCUE9jTVlERVZOOFpSbyUyRnZQZjJwQnJONkhWSHJyJTJCT0NsdFd5aTAlMkZJd3Z6Rkk2TDNwdHpOeFl1WUlrY0U4aFkwOXhsbHFSRXhSJTJCaElEbFplaGRTREFueU1NTVVuUXVBemtPZlFIRVJGTkM0MXFwSFpwVjBZOVVqYkprWlpNY1dmcGV5TDZWWGlrRmFrQVNmRlBEalp3JTNEJTNE; _ga_HBN3GYESRR=GS1.1.1716190977.124.1.1716194634.40.0.0',
    payload: 'eyJzZW5kZXIiOiJ2aWV3ZXIiLCJyZWNlaXZlciI6InBvc2l0aW9uIiwidGltZXN0YW1wIjoiMTcxNjE5Nzc1ODM3OCIsInBsYXRmb3JtIjoiMDciLCJ1dWlkIjoiNDE4MGMxZDItYWI3Ny00MmZlLTllMTktYWJkYjVhYmM0OWE5In0=.eyJjb3Vyc2VJZCI6MTE5MiwibGVzc29uSWQiOjI3MjMxLCJpbnRlcnZhbHMiOlt7InN0YXJ0IjowLCJlbmQiOjE1fSx7InN0YXJ0IjozMiwiZW5kIjo0Nn1dfQ==.e30=.3a4b389f94c016b08a1ac74bc0b552feccaaec81a5ccfbd67c28ecd979d8223b',
    headers: {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/plain',
    },
    stages: [
        { duration: '1m', target: 33 }, // Ramp-up to 200 users over 1 minute
        { duration: '20m', target: 33 }, // Stay at 200 users for 5 minutes
        { duration: '1m', target: 0 }, // Ramp-down to 0 users over 1 minute
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
    }
};

const progressTrend = new Trend('progress_duration');

const getHeaders = (config) => {
    return Object.assign({}, config.headers, {
        authority: config.baseUrl,
        cookie: config.cookie,
    });
};
function sendLessonProgress(config) {
    const url = `${config.baseUrl}/api/new-orchestrator/progress/api/lessonprogress/add`;
    const headers = getHeaders(config);
    const res = http.post(url, config.payload, { headers });

    check(res, {
        'status is 200': (r) => r.status === 200,
    });

    progressTrend.add(res.timings.duration);
    console.log(`Response time: ${res.timings.duration} ms`);
    console.log(`Response status: ${res.status}`);
    console.log(`Response body: ${res.body}`);
}

export const options = {
    stages: config.stages,
    thresholds: config.thresholds,
};

export default function () {
    sendLessonProgress(config);
    sleep(0.9); // wait for 30 seconds before next request
}
