import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import {check} from 'k6';

export let options = {
    stages: [
        {duration: "10m", target: 1},
    ],
};

const csvData = open('../resources/user_uuid-2.csv');
const parsedData = papaparse.parse(csvData).data;

parsedData.shift();

const payload = {
    planId: 'b364eb8d-54c9-4232-8fd1-2f6d3bd88fb4'
}
export default function () {


    parsedData.forEach(row => {
        const [userId] = row;


        payload['userId'] = userId;


        const params = {
            headers: {
                'X-User-Id': userId,
                'X-User-Country-Code': 'EG',
                'X-User-Email': `user-${userId}@example.com`,
                'Content-Type': 'application/json',
            },
        };

        const url = 'https://consumer-subscription.almentor-mail.com/paid-order';


        const response = http.post(url, JSON.stringify(payload), params);


        check(response, {
            'status is 200': (r) => r.status === 200,
        });


    });
}