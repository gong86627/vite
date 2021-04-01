import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'

//新建hash history
const history = createWebHashHistory()

//新建router
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: 'switch', component: SwitchDemo },
            ]
        }
    ]
})

//路由执行后执行的代码
router.afterEach(() => {
    console.log("路由切换了")
});