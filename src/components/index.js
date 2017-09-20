import Vue from 'vue'
const requireContext = require.context('../components', true, /.*\.vue$/)

const components = requireContext.keys().map(key => {
  let m = requireContext(key)
  return Vue.component(m.default.name, m.default)
})

export default components