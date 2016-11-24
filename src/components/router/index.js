
import Router from 'vue-router'

import Parent from '../parent.vue'
import Default from '../default.vue'
import Foo from '../foo.vue'
import Bar from '../bar.vue'
import Navigation from '../nav.vue'
import Params from '../params.vue'

export default new Router({
  mode: 'history',
  // base: _dirname,
  scrollBehavior (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash
    }
  }
},
  routes: [
    { path: '/', redirect: '/parent' },
    { path: '/parent',name:'parent', component:Parent, 
      children: [
        { path: '',name:'default', component: Default },
        { path: 'foo',name:'foo', component : Foo},
        { path: 'bar',name:'bar',component: Bar }
      ]
    },
    { path: '/navigation',name:'navigation',component:Navigation},
    // { path: '/navigation/async',name:'navigation',component: resolve =>{
    //   setTimeout(()=>{
    //     resolve(Navigation)
    //   },3000)
    // }},
    { path: '/params/:id',name:'params',component:Params},
  ],
  
})

function beforeEach (to, from, next) {
  if (window.confirm(`Navigate to ${to.path}?`)) {
    next()
  } else if (window.confirm(`Redirect to /baz?`)) {
    next('/')
  } else {
    next(false)
  }
}

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(m => m.meta.needGuard)) {
//     guardRoute(to, from, next)
//   } else {
//     next()
//   }
// })