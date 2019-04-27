import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView.vue';
import SkillsView from '../views/SkillsView.vue';
import ProjectView from '../views/ProjectView.vue';
import ActivityView from '../views/ActivityView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import CommerceDetail from '../views/CommerceDetail.vue';
import SamsungcardDetail from '../views/SamsungcardDetail.vue';
import InfochatterDetail from '../views/InfochatterDetail.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/about',
        },
        {
            path: '/about', //url
            component: MainView,
        },
        {
            path: '/skills',
            component: SkillsView,
        },
        {
            path: '/project',
            component: ProjectView,
        },
        {
            path: '/activity',
            component: ActivityView,
        },
        {
            path: '/project/commerce-chatbot',
            component: CommerceDetail,
        },
        {
            path: '/project/samsungcard-chatbot',
            component: SamsungcardDetail,
        },
        {
            path: '/project/infochatter-webmanager',
            component: InfochatterDetail,
        },
        {
            path: '*', // * 설정 = 위에 설정된 path 이외의 url 모두
            component: NotFoundView,
        },
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});