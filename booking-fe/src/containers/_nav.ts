export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Booking',
    to: '/booking',
    icon: 'cil-book',
    badge: {
      color: 'warning',
      text: 'PRO'
    },
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Create',
        to: '/booking/create',
        icon: 'cil-library-add',
        badge: {
          color: 'success',
          text: 'BETA'
        }
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Edit',
        to: '/booking/edit',
        icon: 'cil-pencil',
        badge: {
          color: 'success',
          text: 'BETA'
        }
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Detail',
        to: '/booking/detail',
        icon: 'cil-view-module',
        badge: {
          color: 'success',
          text: 'BETA'
        }
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'List',
        to: '/booking/list',
        icon: 'cil-list',
        badge: {
          color: 'success',
          text: 'BETA'
        }
      }
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'User',
    to: '/user',
    icon: 'cil-user-follow',
    badge: {
      color: 'warning',
      text: 'PRO'
    },
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'View',
        to: '/user/view',
        icon: 'cil-view-column',
        badge: {
          color: 'success',
          text: 'BETA'
        }
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Edit',
        to: '/user/edit',
        icon: 'cil-pencil',
        badge: {
          color: 'success',
          text: 'BETA'
        }
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Detail',
        to: '/user/detail',
        icon: 'cil-view-module',
        badge: {
          color: 'success',
          text: 'BETA'
        }
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'List',
        to: '/user/list',
        icon: 'cil-list',
        badge: {
          color: 'success',
          text: 'BETA'
        }
      }
    ]
  }
]
