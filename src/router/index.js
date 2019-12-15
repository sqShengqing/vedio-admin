import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/首页',
    children: [
      {
        path: '首页',
        component: () => import('@/views/home/index'),
        name: 'Home',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/videos',
    component: Layout,
    redirect: '/videos/av',
    name: 'Videos',
    meta: {
      title: '视频管理',
      icon: 'example'
    },
    children: [
      {
        path: 'av',
        component: () => import('@/views/videos/av'),
        name: 'AVList',
        meta: { title: 'AV列表', icon: 'list' }
      },
      {
        path: 'shortVideos',
        component: () => import('@/views/videos/shortVideos'),
        name: 'ShortVideos',
        meta: { title: '小视频列表', noCache: true, icon: 'list' }
      },
      {
        path: 'actors',
        component: () => import('@/views/videos/actors'),
        name: 'Actors',
        meta: { title: '演员列表', icon: 'list' }
      },
      {
        path: 'channel',
        component: () => import('@/views/videos/channel'),
        name: 'Channel',
        meta: {
          title: '频道管理',
          icon: 'list'
        }
      },
      {
        path: 'project',
        component: () => import('@/views/videos/project'),
        name: 'Project',
        meta: {
          title: '专题管理',
          icon: 'list'
        }
      },
      {
        path: 'label',
        component: () => import('@/views/videos/label'),
        name: 'Label',
        meta: {
          title: '专题管理',
          icon: 'list'
        }
      },
      {
        path: 'upload',
        component: () => import('@/views/videos/upload'),
        name: 'Upload',
        meta: {
          title: '上传视频',
          icon: 'list'
        }
      }
    ]
  },
  {
    path: '/users',
    component: Layout,
    redirect: '/users/userList',
    alwaysShow: true,
    name: 'Users',
    meta: {
      title: '用户管理',
      icon: 'example'
    },
    children: [
      {
        path: 'userList',
        component: () => import('@/views/users/userList'),
        name: 'UserList',
        meta: {
          title: '用户列表',
          icon: 'list'
        }
      }
    ]
  },
  {
    path: '/statistics',
    component: Layout,
    redirect: '/statistics/dailyData',
    name: 'Statistics',
    meta: {
      title: '统计管理',
      icon: 'example'
    },
    children: [{
      path: 'dailyData',
      component: () => import('@/views/statistics/dailyData'),
      name: 'DailyData',
      meta: {
        title: '用户今日数据统计',
        icon: 'list'
      }
    },
    {
      path: 'videoPoint',
      component: () => import('@/views/statistics/videoPoint'),
      name: 'VideoPoint',
      meta: {
        title: '视频埋点统计数据',
        noCache: true,
        icon: 'list'
      }
    },
    {
      path: 'channelHot',
      component: () => import('@/views/statistics/channelHot'),
      name: 'ChannelHot',
      meta: {
        title: '频道热度统计',
        icon: 'list'
      }
    },
    {
      path: 'avHot',
      component: () => import('@/views/statistics/avHot'),
      name: 'AvHot',
      meta: {
        title: '女优热度统计',
        icon: 'list'
      }
    },
    {
      path: 'projectHot',
      component: () => import('@/views/statistics/projectHot'),
      name: 'ProjectHot',
      meta: {
        title: '专题热度',
        icon: 'list'
      }
    },
    {
      path: 'labelHot',
      component: () => import('@/views/statistics/labelHot'),
      name: 'LabelHot',
      meta: {
        title: '标签热度',
        icon: 'list'
      }
    },
    {
      path: 'promoteType',
      component: () => import('@/views/statistics/promoteType'),
      name: 'PromoteType',
      meta: {
        title: '用户推广方式统计',
        icon: 'list'
      }
    }
    ]
  },
  {
    path: '/transaction',
    component: Layout,
    redirect: '/transaction/flowlog',
    name: 'Statistics',
    meta: {
      title: '统计管理',
      icon: 'example'
    },
    children: [
      {
        path: 'flowlog',
        component: () => import('@/views/transaction/flowlog'),
        name: 'Flowlog',
        meta: {
          title: '流水记录',
          icon: 'list'
        }
      },
      {
        path: 'recharge',
        component: () => import('@/views/transaction/recharge'),
        name: 'Recharge',
        meta: {
          title: '充值列表',
          noCache: true,
          icon: 'list'
        }
      },
      {
        path: 'withDraw',
        component: () => import('@/views/transaction/withDraw'),
        name: 'WithDraw',
        meta: {
          title: '提现列表',
          icon: 'list'
        }
      },
      {
        path: 'produce',
        component: () => import('@/views/transaction/produce'),
        name: 'Produce',
        meta: {
          title: '商品管理',
          icon: 'list'
        }
      },
      {
        path: 'rechargeChannel',
        component: () => import('@/views/transaction/rechargeChannel'),
        name: 'RechargeChannel',
        meta: {
          title: '充值渠道管理',
          icon: 'list'
        }
      },
      {
        path: 'withDrawChannel',
        component: () => import('@/views/transaction/withDrawChannel'),
        name: 'WithDrawChannel',
        meta: {
          title: '提现渠道管理',
          icon: 'list'
        }
      },
      {
        path: 'promoteType',
        component: () => import('@/views/transaction/promoteType'),
        name: 'PromoteType',
        meta: {
          title: '用户推广方式统计',
          icon: 'list'
        }
      }
    ]
  },
  {
    path: '/message',
    component: Layout,
    redirect: '/message/notice',
    alwaysShow: true,
    name: 'Message',
    meta: {
      title: '消息中心',
      icon: 'example'
    },
    children: [
      {
        path: 'notice',
        component: () => import('@/views/message/notice'),
        name: 'Notice',
        meta: {
          title: '公告列表',
          icon: 'list'
        }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/carousel',
    alwaysShow: true,
    name: 'System',
    meta: {
      title: '系统管理',
      icon: 'example'
    },
    children: [
      {
        path: 'carousel',
        component: () => import('@/views/system/carousel'),
        name: 'Carousel',
        meta: {
          title: '轮播图设置',
          icon: 'list'
        }
      },
      {
        path: 'ad',
        component: () => import('@/views/system/ad'),
        name: 'Ad',
        meta: {
          title: '广告管理',
          icon: 'list'
        }
      },
      {
        path: 'version',
        component: () => import('@/views/system/version'),
        name: 'Version',
        meta: {
          title: '版本管理',
          icon: 'list'
        }
      },
      {
        path: 'hotWords',
        component: () => import('@/views/system/hotWords'),
        name: 'HotWords',
        meta: {
          title: '热搜词管理',
          icon: 'list'
        }
      },
      {
        path: 'drivingGroup',
        component: () => import('@/views/system/drivingGroup'),
        name: 'DrivingGroup',
        meta: {
          title: '开车群管理',
          icon: 'list'
        }
      }
    ]
  },
  {
    path: '/domains',
    component: Layout,
    redirect: '/domains/domainList',
    alwaysShow: true,
    name: 'Domains',
    meta: {
      title: '域名管理',
      icon: 'example'
    },
    children: [
      {
        path: 'domainList',
        component: () => import('@/views/domains/domainList'),
        name: 'DomainList',
        meta: {
          title: '域名列表',
          icon: 'list'
        }
      },
      {
        path: 'cdn',
        component: () => import('@/views/domains/cdn'),
        name: 'CDN',
        meta: {
          title: 'cdn管理',
          icon: 'list'
        }
      }
    ]
  },
  {
    path: '/account',
    component: Layout,
    redirect: '/account/accountList',
    alwaysShow: true,
    name: 'Account',
    meta: {
      title: '域名管理',
      icon: 'example'
    },
    children: [
      {
        path: 'accountList',
        component: () => import('@/views/account/accountList'),
        name: 'AccountList',
        meta: {
          title: '账号列表',
          icon: 'list'
        }
      },
      {
        path: 'roles',
        component: () => import('@/views/account/roles'),
        name: 'Roles',
        meta: {
          title: '角色列表',
          icon: 'list'
        }
      }
    ]
  },
  {
    path: '/timedTask',
    component: Layout,
    redirect: '/timedTask/timedTaskList',
    alwaysShow: true,
    name: 'TimedTask',
    meta: {
      title: '定时任务',
      icon: 'example'
    },
    children: [
      {
        path: 'timedTaskList',
        component: () => import('@/views/timedTask/timedTaskList'),
        name: 'TimedTaskList',
        meta: {
          title: '定时任务列表',
          icon: 'list'
        }
      }
    ]
  },
  {
    path: '/activity',
    component: Layout,
    redirect: '/activity/activityList',
    alwaysShow: true,
    name: 'Activity',
    meta: {
      title: '活动中心',
      icon: 'example'
    },
    children: [
      {
        path: 'activityList',
        component: () => import('@/views/activity/activityList'),
        name: 'ActivityList',
        meta: {
          title: '活动列表',
          icon: 'list'
        }
      }
    ]
  },
  {
    path: '/task',
    component: Layout,
    redirect: '/task/taskList',
    alwaysShow: true,
    name: 'Task',
    meta: {
      title: '任务中心',
      icon: 'example'
    },
    children: [
      {
        path: 'taskList',
        component: () => import('@/views/task/taskList'),
        name: 'TaskList',
        meta: {
          title: '任务列表',
          icon: 'list'
        }
      }
    ]
  },
  {
    path: '/redemptionCode',
    component: Layout,
    redirect: '/redemptionCode/code',
    alwaysShow: true,
    name: 'RedemptionCode',
    meta: {
      title: '兑换码管理',
      icon: 'example'
    },
    children: [
      {
        path: 'code',
        component: () => import('@/views/redemptionCode/code'),
        name: 'Code',
        meta: {
          title: '兑换码',
          icon: 'list'
        }
      },
      {
        path: 'useRecord',
        component: () => import('@/views/redemptionCode/useRecord'),
        name: 'UseRecord',
        meta: {
          title: '兑换码使用记录',
          icon: 'list'
        }
      }
    ]
  },
  {
    path: '/agents',
    component: Layout,
    redirect: '/agents/agentDatas',
    alwaysShow: true,
    name: 'Agents',
    meta: {
      title: '代理管理',
      icon: 'example'
    },
    children: [
      {
        path: 'agentDatas',
        component: () => import('@/views/agents/agentDatas'),
        name: 'AgentDatas',
        meta: {
          title: '代理数据',
          icon: 'list'
        }
      },
      {
        path: 'agentList',
        component: () => import('@/views/agents/agentList'),
        name: 'AgentList',
        meta: {
          title: '代理列表',
          icon: 'list'
        }
      }
    ]
  },
  {
    path: '/irrigationDitch ',
    component: Layout,
    redirect: '/irrigationDitch/irrigationDitchList',
    alwaysShow: true,
    name: 'IrrigationDitch',
    meta: {
      title: '渠道管理',
      icon: 'example'
    },
    children: [
      {
        path: 'irrigationDitchList',
        component: () => import('@/views/irrigationDitch/irrigationDitchList'),
        name: 'IrrigationDitchList',
        meta: {
          title: '渠道列表',
          icon: 'list'
        }
      },
      {
        path: 'irrigationDitchData',
        component: () => import('@/views/irrigationDitch/irrigationDitchData'),
        name: 'IrrigationDitchData',
        meta: {
          title: '渠道数据统计',
          icon: 'list'
        }
      },
      {
        path: 'operateRecord',
        component: () => import('@/views/irrigationDitch/operateRecord'),
        name: 'OperateRecord',
        meta: {
          title: '操作记录',
          icon: 'list'
        }
      }
    ]
  },
  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'Error Pages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/error-page/401'),
  //       name: 'Page401',
  //       meta: { title: '401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/error-page/404'),
  //       name: 'Page404',
  //       meta: { title: '404', noCache: true }
  //     }
  //   ]
  // },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
