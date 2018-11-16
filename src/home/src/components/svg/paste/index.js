import SvgPas from './src/pas'
import SvgTe from './src/te'

SvgPas.install = function(Vue) {
  Vue.component(SvgPas.name, SvgPas)
}

SvgTe.install = function(Vue) {
  Vue.component(SvgTe.name, SvgTe)
}

export {
    SvgPas,
    SvgTe
}