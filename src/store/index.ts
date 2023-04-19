import { createStore } from 'vuex';
import config from './module/config';
import employee from './module/employee';
import branch from './module/branch';
import depot from './module/depot';
import origin from './module/origin';
import trademark from './module/trademark';
import product from './module/product';
import category from './module/category';

const store = createStore({
  modules: {
    config,
    employee,
    branch,
    depot,
    origin,
    trademark,
    product,
    category,
  },
});

export default store;