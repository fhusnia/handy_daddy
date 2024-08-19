import Vue from 'vue'
import App from './App.vue'
import './assets/styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import router from './router';
import VueCarousel from 'vue-carousel';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLocationDot, faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp,faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const EventBus = new Vue();

library.add(faArrowRight,faAngleDown,faFacebookF,faTwitter, faPinterestP,faChevronLeft,faYoutube,faStar,faChevronRight, faLinkedin,faLocationDot,faPhone,faEnvelope,faCopyright,faCheck,faAngleUp,faFigma,faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueCarousel);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.filter('uppercase', function(value) {
  if (!value) return '';
  return value.toString().toUpperCase();
});