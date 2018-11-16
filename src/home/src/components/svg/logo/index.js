import SvgLogo from './src/logo'

SvgLogo.install = function(Vue) {
  Vue.component(SvgLogo.name, SvgLogo)
}

export default SvgLogo