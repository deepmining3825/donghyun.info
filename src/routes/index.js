import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView.vue';
import SkillsView from '../views/SkillsView.vue';
import ProjectView from '../views/ProjectView.vue';
import ActivityView from '../views/ActivityView.vue';
import NotFoundView from '../views/NotFoundView.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history', // url에 # 가 들어가지 않게된다
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
            path: '*', // * 설정 = 위에 설정된 path 이외의 url 모두
            component: NotFoundView,
        },
       
    ],
});