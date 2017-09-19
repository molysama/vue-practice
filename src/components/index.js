import Vue from 'vue'
const requireContext = require.context('../components', true, /.*\.vue$/)

const components = requireContext.keys().map(key => {
  let module = requireContext(key)
  Vue.component(module.default.name || key, module)
})

export default components