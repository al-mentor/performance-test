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