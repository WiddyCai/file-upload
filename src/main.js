import Vue from 'vue'
import {
  Icon,
  Input,
  Table,
  TableColumn,
  Button,
  Progress,
} from 'element-ui';
import App from './App.vue'

Vue.use(Icon);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);
Vue.use(Progress);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
