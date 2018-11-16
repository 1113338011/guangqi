import Vue from 'vue'
import Index from '@/views/Home'
import Components from '@/components'
import Style from '@/style'

Vue.config.productionTip = false

new Vue({
    render: h => h(Index)
}).$mount('#app')
