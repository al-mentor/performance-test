import {login} from '../../Authorization/login.js';
import {Config} from '../../config.js';
import {getPlans} from "../../Consumer-Subscription/plans.js";

export let options = {
    stages: [
        {
            duration: '5m', // 0-5 minutes
            target: 6 // 10% of 60 RPM
        },
        {
            duration: '5m', // 5-10 minutes
            target: 12 // 20% of 60 RPM
        },
        {
            duration: '5m', // 10-15 minutes
            target: 18 // 30% of 60 RPM
        },
        {
            duration: '5m', // 15-20 minutes
            target: 24 // 40% of 60 RPM
        },
        {
            duration: '5m', // 20-25 minutes
            target: 30 // 50% of 60 RPM
        },
        {
            duration: '5m', // 25-30 minutes
            target: 60 // 100% of 60 RPM
        },
        {
            duration: '11h', // stable phase
            target: 60 // maintain 60 RPM for 11 hours
        },
        {
            duration: '5m', // 0-5 minutes of ramp down
            target: 60 // 100% of 60 RPM
        },
        {
            duration: '5m', // 5-10 minutes of ramp down
            target: 48 // 80% of 60 RPM
        },
        {
            duration: '5m', // 10-15 minutes of ramp down
            target: 36 // 60% of 60 RPM
        },
        {
            duration: '5m', // 15-20 minutes of ramp down
            target: 24 // 40% of 60 RPM
        },
        {
            duration: '5m', // 20-25 minutes of ramp down
            target: 12 // 20% of 60 RPM
        },
        {
            duration: '5m', // 25-30 minutes of ramp down
            target: 0 // 0% of 60 RPM
        }
    ]
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