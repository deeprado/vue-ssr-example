import Vue from 'vue';
import createStore from './store/store.js';
import App from './App.vue';
import Meta from 'vue-meta';

Vue.use(Meta);

export function createApp() {
  const store = createStore();

  const app = new Vue({
    store,
    render: h => h(App)
  });

  return { app, store, App };
}