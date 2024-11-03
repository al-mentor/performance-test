import http from 'k6/http';
import {check, sleep} from 'k6';
import {SharedArray} from 'k6/data';

function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    return lines.slice(1)
        .map(line => line.trim().replace(/["\r]/g, ''))
        .filter(line => line !== '');
}

const userIds = new SharedArray('userIds', function () {
    const csvData = open('../resources/user_uuid.csv');
    return parseCSV(csvData);
});

export const options = {
    stages: [{duration: '5m', target: 50}, {duration: '10m', target: 50}, {duration: '5m', target: 0},],
};

const payload = {
    planId: 'b364eb8d-54c9-4232-8fd1-2f6d3bd88fb4'
}


let globalIndex = 0;

export default function () {
    const currentIndex = globalIndex + (__VU - 1);

    if (currentIndex >= userIds.length) {
        return;
    }


    const userId = userIds[currentIndex];
    globalIndex++;



    const params = {
        headers: {
            'X-User-Id': userId,
            'X-User-Country-Code': 'EG',
            'X-User-Email': `user-${userId}@example.com`,
            'Content-Type': 'application/json',
        },
    };

    const url = 'https://consumer-subscription.almentor-mail.com/paid-order';

    const res = http.post(url, JSON.stringify(payload), params);

    check(res, {
        'is status 200': (r) => r.status === 200,
    });

    // Sleep for 1 second between iterations
    sleep(1);
}