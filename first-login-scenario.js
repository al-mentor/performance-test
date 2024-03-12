import { sleep } from 'k6';
import { login } from './Authorization/login.js';
import { getUserPlatform } from './Authorization/user-platform.js';
import { authorize,getUserInfo } from './Authorization/authorize.js';
import { getUserAds } from './DeepLinking/user-link.js';
import { getUserNotification,getUnreadMsg } from './User/notification.js';
import { getFeaturedCourses,myProgressCarousel,getMostViewedCourses,getPickOfTheDay,getNewCourses} from './Courses/course.js';
import { topTemp } from './Courses/category.js';
import { getUserWishlist,getAllInterestsByLanguageId } from './User/user.js';

export let options = {
    stages: [
        // Ramp up stage
        { duration: '10s', target: 10 },

        // Stable stage 
        { duration: '30s', target: 10 },

        // Ramp down stage
        { duration: '10s', target: 0 },
    ]

};

const cookie = '_vwo_uuid=D426C2C7F3F9D1E18F4247F1C5DFC9758; _vwo_ds=3%241707684147%3A58.76826411%3A%3A; _gcl_au=1.1.439240313.1707686628; _scid=a5aa5eed-d7be-4b32-8435-cc0d93ebba9a; _hjSessionUser_2610635=eyJpZCI6ImFlMjRkMDhiLTc0MDItNWQ3Yy04NDU2LThkMmU3OTIwNDk4NyIsImNyZWF0ZWQiOjE3MDc2ODY2MjkxODAsImV4aXN0aW5nIjp0cnVlfQ==; _vis_opt_s=2%7C; _vis_opt_test_cookie=1; alm-gtm-global-prop=eyJjb3VudHJ5IjoiRUciLCJ0aF9jYXBpX2ZuIjoiMzBjYjkwMjNhNTYwY2E3YzNiNzA4MWJkMzE5YjM3OGZmODJmMDE1Y2FmYjhlMzIyZjExODg2NDJjM2FhMWI5ZiIsInRoX2NhcGlfZW0iOiJiOWViY2Y3ZWY3M2Q0ODBiZTU0MzQ1MmM2ZTE5YzFmNDVhNmFjMzM0YjY4MGY2MWU3MjA1OTg1ZmI2YWI4NjIzIn0%3D; alm-push-request=1709997273071; _gid=GA1.2.1847346252.1709994169; _hjSession_2610635=eyJpZCI6IjFmOGNhYTk5LWUxZjctNDYxNC1hMTRiLWY5ZWY0MTk5ODg4YyIsImMiOjE3MDk5OTQxNjkzMjEsInMiOjEsInIiOjEsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MX0=; ab.storage.deviceId.84c4b8da-627b-4674-afc0-9e86a12265f0=%7B%22g%22%3A%22609622f9-af18-fb52-80b2-c29ed47fd1f7%22%2C%22c%22%3A1707686637642%2C%22l%22%3A1709994191047%7D; ab.storage.userId.84c4b8da-627b-4674-afc0-9e86a12265f0=%7B%22g%22%3A%22dea0f18c-c9a5-4171-a8c0-f19fd4714757%22%2C%22c%22%3A1709812245150%2C%22l%22%3A1709994191048%7D; alm-user=W3sibGFuZyI6ImFyIn0seyJ0aGVtZSI6MH0seyJ1c2VyIjpudWxsfV0%3D; _vwo_sn=2310041%3A10%3A%3A%3A1; ab.storage.sessionId.84c4b8da-627b-4674-afc0-9e86a12265f0=%7B%22g%22%3A%22fe7fdf01-f3d3-5a98-a15b-2959d2b17500%22%2C%22e%22%3A1709997666983%2C%22c%22%3A1709994191045%2C%22l%22%3A1709995866983%7D; mp_5dd8964c087a8c75131d8f3fbe1541b9_mixpanel=%7B%22distinct_id%22%3A%20%22dea0f18c-c9a5-4171-a8c0-f19fd4714757%22%2C%22%24device_id%22%3A%20%2218d9a0e04c613a0-01a9f97ec9682e-26001851-144000-18d9a0e04c613a0%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fbeta-preprod-authorized.almentor-mail.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22beta-preprod-authorized.almentor-mail.com%22%2C%22%24user_id%22%3A%20%22dea0f18c-c9a5-4171-a8c0-f19fd4714757%22%7D; _ga=GA1.2.930978899.1707686628; _scid_r=a5aa5eed-d7be-4b32-8435-cc0d93ebba9a; cto_bundle=46Tlzl8xYU1tRHpPRGdWWDhxamdBSWFYRFRsUzhQRWFia2ZrelFOdGZ2WUE0Mm53NkNTWVBTaFBtMnBWUUIxbEhjRTBKajVSJTJCQnlzdFVkdjVqMW1TNGx5ZkVFcnZ0UUE0QmZoNmh2Q3FZbFFvSUZ3SFFrTmswUFBkcWpRUnJJYiUyRjI2VGhRbkliSWZiZHR5c1JWJTJGUktNRHc2OHBTNyUyQktUUGprdGQlMkJxQTA4VVhtTkVpTDU1TXM3WmZZbU5VVWphQ0dLNGRjVHU4Mm9BYmgzd1JrbE9qeXJpMmNyUSUzRCUzRA; _ga_036Y5CBY4L=GS1.1.1709994169.15.1.1709995901.0.0.0; _gat_UA-207772086-1=1; _ga_ZBHQ56110R=GS1.2.1709994180.10.1.1709996165.0.0.0';
const baseUrl='https://revamp-preprod-api.almentor-mail.com';
export default function () {
    login(baseUrl,cookie);
    sleep(1);
    getUserPlatform(baseUrl,cookie);
    sleep(1);
    authorize(baseUrl,cookie);
    sleep(1);
    getUserAds(baseUrl,cookie);
    sleep(1);
    getUserInfo(baseUrl,cookie);
    sleep(1);
    getUserNotification(baseUrl,cookie);
    sleep(1);
    getUnreadMsg(baseUrl,cookie);
    sleep(1);
    getFeaturedCourses(baseUrl,cookie);
    sleep(1);
    myProgressCarousel(baseUrl,cookie);
    sleep(1);
    topTemp(baseUrl,cookie);
    sleep(1);
    getMostViewedCourses(baseUrl,cookie);
    sleep(1);
    getPickOfTheDay(baseUrl,cookie);
    sleep(1);
    getUserWishlist(baseUrl,cookie);
    sleep(1);
    getNewCourses(baseUrl,cookie);
    sleep(1);
    getAllInterestsByLanguageId(baseUrl,cookie);
}



