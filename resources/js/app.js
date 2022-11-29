import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import { createInertiaApp, Link } from '@inertiajs/inertia-vue'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from "./Shared/Layout";
import { Head } from '@inertiajs/inertia-vue';
import 'sweetalert2/dist/sweetalert2.min.css';
import { ZiggyVue } from 'ziggy-js/dist/vue';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher/*new Pusher('23350e9fcf4a7f58a717', {
    cluster: 'eu'
})*/;
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '23350e9fcf4a7f58a717',
    cluster: 'eu',
    encrypted: true,
    enabledTransports: ['ws', 'wss'],
});

createInertiaApp({
    resolve: async name => {
        const page = (await import(`./Pages/${name}`)).default
        if (page.layout === undefined /*&& !name.startsWith('Public/')*/) {
            page.layout = Layout
        }
        return page
    },
    setup({ el, App, props, plugin }) {
        Vue.use(plugin)
        Vue.use(VueSweetalert2);
        Vue.use(ZiggyVue);
        Vue.component('Link', Link)
        Vue.component('Head', Head)
        new Vue({
            render: h => h(App, props),
        }).$mount(el)
    },
    title: title => `Site - ${title}`,
})

InertiaProgress.init({showSpinner: true});
