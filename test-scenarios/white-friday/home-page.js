import {login} from '../../Authorization/login.js';
import {authorize, getUserInfo} from '../../Authorization/authorize.js';
import {getUserAds} from '../../DeepLinking/user-link.js';
import {
    getCourseDiscovery,
    getFilterCourses,
    getMostViewedCourses,
    getTrendingCourses,
    myProgressCarousel
} from '../../Courses/course.js';
import {getAllInterestsByLanguageId, getUserWishlist} from '../../User/user.js';
import {Config} from '../../config.js';
import {getPlans} from "../../Consumer-Subscription/plans.js";
import {getHeroBanner} from "../../Courses/hero-banner.js";
import {getMentors} from "../../Mentors/mentors.js";
import {topTemp} from "../../Courses/category.js";
import {getUnreadMsg} from "../../User/notification.js";


export let options = {
    stages: [
        {
            duration: '1h',
            target: 20    // 20% of 100
        },
        {
            duration: '1h',
            target: 40    // 40% of 100
        },
        {
            duration: '2h',
            target: 60    // 60% of 100
        },
        {
            duration: '2h',
            target: 80    // 80% of 100
        },
        {
            duration: '2h',
            target: 100   // 100% - peak load
        },
        {
            duration: '1h',
            target: 60    // reduce to 60%
        },
        {
            duration: '1h',
            target: 40    // stable phase at 40%
        },
        {
            duration: '1h',
            target: 20    // start ramp down
        },
        {
            duration: '5m',
            target: 16    // 80% of previous
        },
        {
            duration: '5m',
            target: 12    // 60% of previous
        },
        {
            duration: '5m',
            target: 8     // 40% of previous
        },
        {
            duration: '5m',
            target: 4     // 20% of previous
        },
        {
            duration: '5m',
            target: 0     // complete ramp down
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
    authorize(baseUrl, cookie);
    getPlans(baseUrl, cookie);
    getUserAds(baseUrl, cookie);
    getUserInfo(baseUrl, cookie);
    myProgressCarousel(baseUrl, cookie);
    topTemp(baseUrl, cookie);
    getCourseDiscovery(baseUrl, cookie);
    getMostViewedCourses(baseUrl, cookie);
    getTrendingCourses(baseUrl, cookie);
    getUserWishlist(baseUrl, cookie);
    getAllInterestsByLanguageId(baseUrl, cookie);
    getFilterCourses(baseUrl, cookie);
    getUnreadMsg(baseUrl, cookie);
}

function unauthenticatedUserFlow() {
    getPlans(baseUrl, initialCookie);
    getHeroBanner(baseUrl, initialCookie);
    getMentors(baseUrl, initialCookie);
    getCourseDiscovery(baseUrl, initialCookie);
}

export default function (data) {
    const isAuthenticated = Math.random() < 0.5;

    if (isAuthenticated && data.authenticatedCookie) {
        authenticatedUserFlow(data.authenticatedCookie);
    } else {
        unauthenticatedUserFlow();
    }
}