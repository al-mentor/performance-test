import {login} from '../../Authorization/login.js';
import {authorize, getUserInfo} from '../../Authorization/authorize.js';
import {getUserAds} from '../../DeepLinking/user-link.js';
import {
    getCourseDiscovery,
    getFilterCourses,
    getPopularCourses,
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


export const options = {
    scenarios: {
        constant_request_rate: {
            executor: 'constant-arrival-rate',
            rate: 100,
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
    authorize(baseUrl, cookie);
    getPlans(baseUrl, cookie);
    getUserAds(baseUrl, cookie);
    getUserInfo(baseUrl, cookie);
    myProgressCarousel(baseUrl, cookie);
    topTemp(baseUrl, cookie);
    getCourseDiscovery(baseUrl, cookie);
    getPopularCourses(baseUrl, cookie);
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