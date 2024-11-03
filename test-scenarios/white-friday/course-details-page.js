import {login} from '../../Authorization/login.js';
import {Config} from '../../config.js';
import {
    getBenefitsAndPrerequisites,
    getCourseCategories,
    getCourseCurriculum,
    getMostViewedCourses,
    getRelatedCourses
} from "../../Courses/course.js";
import {getTags} from "../../Courses/tags.js";
import {getMentorDetails, getMentorPageViews} from "../../Mentors/mentors.js";
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
    getCourseCategories(baseUrl, cookie);
    getTags(baseUrl, cookie);
    getBenefitsAndPrerequisites(baseUrl, cookie);
    getRelatedCourses(baseUrl, cookie);
    getCourseCurriculum(baseUrl, cookie);
    getMentorDetails(baseUrl, cookie);
    getMentorPageViews(baseUrl, cookie);

}

function unauthenticatedUserFlow() {
    getCourseCategories(baseUrl, initialCookie);
    getTags(baseUrl, initialCookie);
    getBenefitsAndPrerequisites(baseUrl, initialCookie);
    getRelatedCourses(baseUrl, initialCookie);
    getCourseCurriculum(baseUrl, initialCookie);
    getMentorDetails(baseUrl, initialCookie);
    getMentorPageViews(baseUrl, initialCookie);
}

export default function (data) {
    const isAuthenticated = Math.random() < 0.5;

    if (isAuthenticated && data.authenticatedCookie) {
        authenticatedUserFlow(data.authenticatedCookie);
    } else {
        unauthenticatedUserFlow();
    }
}