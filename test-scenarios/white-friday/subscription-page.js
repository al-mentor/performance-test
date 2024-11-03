import {login} from '../../Authorization/login.js';
import {Config} from '../../config.js';
import {getPlans} from "../../Consumer-Subscription/plans.js";

export const options = {
    scenarios: {
        constant_request_rate: {
            executor: 'constant-arrival-rate',
            rate: 200,
            timeUnit: '1m', // 1000 iterations per second, i.e. 1000 RPS
            duration: '6h',
            preAllocatedVUs: 10, // how large the initial pool of VUs would be
            maxVUs: 20, // if the preAllocatedVUs are not enough, we can initialize more
        },
    },
};
const baseUrl = Config.BASE_URL;
const initialCookie = '';

export function setup() {
    const {cookies} = login(baseUrl, initialCookie);
    return {authenticatedCookie: cookies};
}

function authenticatedUserFlow(cookie) {
    getPlans(baseUrl, cookie);

}

function unauthenticatedUserFlow() {
    getPlans(baseUrl, initialCookie);
}

export default function (data) {
    const isAuthenticated = Math.random() < 0.5;

    if (isAuthenticated && data.authenticatedCookie) {
        authenticatedUserFlow(data.authenticatedCookie);
    } else {
        unauthenticatedUserFlow();
    }
}