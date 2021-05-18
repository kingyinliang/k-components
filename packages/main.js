import KDiv from './k-div'
import KButton from './k-button'

const components = [
  KDiv,
  KButton
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  KDiv,
  KButton
}
