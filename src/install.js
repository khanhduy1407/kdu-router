import View from './components/view'
import Link from './components/link'

export let _Kdu

export function install (Kdu) {
  if (install.installed && _Kdu === Kdu) return
  install.installed = true

  _Kdu = Kdu

  const isDef = v => v !== undefined

  const registerInstance = (vm, callVal) => {
    let i = vm.$options._parentVnode
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal)
    }
  }

  Kdu.mixin({
    beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this
        this._router = this.$options.router
        this._router.init(this)
        Kdu.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
      registerInstance(this, this)
    },
    destroyed () {
      registerInstance(this)
    }
  })

  Object.defineProperty(Kdu.prototype, '$router', {
    get () { return this._routerRoot._router }
  })

  Object.defineProperty(Kdu.prototype, '$route', {
    get () { return this._routerRoot._route }
  })

  Kdu.component('RouterView', View)
  Kdu.component('RouterLink', Link)

  const strats = Kdu.config.optionMergeStrategies
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created
}
