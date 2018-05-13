import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'

export default () => {
  fontawesome.library.add(solid)
  fontawesome.library.add(regular)
  fontawesome.library.add(brands)
  Vue.component('fa-icon', FontAwesomeIcon)
}
