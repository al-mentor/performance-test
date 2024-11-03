import http from 'k6/http';
import {check, sleep} from 'k6';

export const options = {
    stages: [
        {duration: '5m', target: 50},
        {duration: '10m', target: 50},
        {duration: '5m', target: 0},
    ],
};

const payloads = [
    {
        planId: 'b364eb8d-54c9-4232-8fd1-2f6d3bd88fb4',
        userPaymentId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        paymentDetails: {
            paymentMethod: 'Fawry',
            phoneNumber: '01096317063'
        }
    }
    ,
    {
        planId: 'b364eb8d-54c9-4232-8fd1-2f6d3bd88fb4',
        userPaymentId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        paymentDetails: {
            paymentMethod: 'MobileWallet',
            phoneNumber: '01010101010'
        }
    },
    {
        planId: 'b364eb8d-54c9-4232-8fd1-2f6d3bd88fb4',
        userPaymentId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        paymentDetails: {
            paymentMethod: 'CreditCard',
            creditCardToken: 'tok_3xpmmbtfvqkuhkt6kdz3f4ky5y'
        }
    },
    {
        planId: 'b364eb8d-54c9-4232-8fd1-2f6d3bd88fb4',
        userPaymentId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        paymentDetails: {
            paymentMethod: 'CreditCard'
        }
    }
];

export default function () {
    const url = 'https://consumer-subscription.almentor-mail.com/order';

    const payload = payloads[Math.floor(Math.random() * payloads.length)];

    const params = {
        headers: {
            'X-User-Id': '4626666c-73ba-4ffe-9414-7206ff1752e9',
            'X-User-Country-Code': 'EG',
            'X-User-Email': 'user-4626666c-73ba-4ffe-9414-7206ff1752e9@example.com',
            'Content-Type': 'application/json',
        },
    };

    console.log("url"+url);
    console.log("body"+JSON.stringify(payload));

    const res = http.post(url, JSON.stringify(payload), params);
    console.log("response body"+res.body);
    console.log("response status"+res.status);

    check(res, {
        'is status 200': (r) => r.status === 200,
    });

    if (res.status === 200) {
        const responseBody = JSON.parse(res.body);
        handleResponse(responseBody, payload.paymentDetails.paymentMethod);
    }
// Sleep for 1 second between iterations
    sleep(1);

}


function handleResponse(response, paymentMethod) {
    const checks = {
        'paymentStatus is PendingUserAction': (r) => r.paymentStatus === 'PendingUserAction',
    };

    if (paymentMethod === 'MobileWallet' || paymentMethod === 'CreditCard') {
        checks['has link for MobileWallet or CreditCard'] = (r) => r.link !== null && r.link !== undefined;
    } else if (paymentMethod === 'Fawry') {
        checks['has code for Fawry'] = (r) => r.code !== null && r.code !== undefined;
    }

    const result = check(response, checks);

    if (!result) {
        console.error(`Test failed for payment method: ${paymentMethod}`);
    } else {
        if (response.link) {
            console.log(`Payment link: ${response.link}`);
        } else if (response.code) {
            console.log(`Payment code: ${response.code}`);
        }
    }
}