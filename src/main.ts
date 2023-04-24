/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
import BootstrapVueNext from 'bootstrap-vue-next';
import { FormInputsPlugin } from '@tvaliasek/vue-form-inputs';
import App from './App.vue';
import router from './router';
import store from './store';

import '@tvaliasek/vue-form-inputs/dist/vue-form-inputs.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

const app = createApp(App);
app.use(BootstrapVueNext).use(store).use(router);
app.use(FormInputsPlugin({ includeBootstrapNextComponents: false }));
// app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('ion-');
app.mount('#app');
