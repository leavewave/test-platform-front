import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'

const route: Route[] = [
  {
    path: '/api-test',
    component: Layout,
    redirect: '/api-test/project',
    hideMenu: false,
    meta: { title: '接口自动化', icon: 'iconfont icon-testwangfandijia' },
    children: [
      {
        path: 'project',
        component: createNameComponent(() => import('@/views/api-test/project/index.vue')),
        meta: { title: '服务管理', icon: 'iconfont icon-testfolder-open-fill' }
      },
      {
        path: 'api',
        component: createNameComponent(() => import('@/views/api-test/module/index.vue')),
        meta: { title: '接口管理', icon: 'iconfont icon-testwangfandijia' }
      },
      {
        path: 'case',
        component: createNameComponent(() => import('@/views/api-test/case-suite/index.vue')),
        meta: { title: '用例管理', icon: 'iconfont icon-testcodepen' }
      },
      {
        path: 'task',
        component: createNameComponent(() => import('@/views/api-test/task/index.vue')),
        meta: { title: '任务管理', icon: 'iconfont icon-testcalendar-check' }
      },
      {
        path: 'report-show',
        // @ts-ignore
        hideMenu: true,  // 不显示菜单
        component: createNameComponent(() => import('@/views/api-test/report/show.vue')),
        meta: { title: '查看测试报告', icon: 'iconfont icon-testbarchart' }
      },
      {
        path: 'report',
        component: createNameComponent(() => import('@/views/api-test/report/index.vue')),
        meta: { title: '测试报告', icon: 'iconfont icon-testbarchart' }
      },
    ]
  }
]

export default route
