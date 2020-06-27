import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Login = React.lazy(() => import('./views/login/Login'))
const Booking = React.lazy(() => import('./views/booking/Booking'))
const CreateBooking  = React.lazy(() => import('./views/booking/create/CreateBooking'))
const DetailBooking = React.lazy(() => import('./views/booking/detail/DetailBooking'))
const EditBooking = React.lazy(() => import('./views/booking/edit/EditBooking'))
const ListBooking = React.lazy(() => import('./views/booking/list/ListBooking'))
const UserView = React.lazy(() => import("./views/user/UserView"))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/booking/login', name: 'Login', component: Login },
  { path: '/booking', name: 'Booking', exact: true, component: Booking },
  { path: '/booking/create', name: 'Create', exact: true, component: CreateBooking },
  { path: '/booking/edit', name: 'Edit', exact: true, component: EditBooking },
  { path: '/booking/detail', name: 'Detail', exact: true, component: DetailBooking },
  { path: '/booking/list', name: 'List', exact: true, component: ListBooking },
  { path: '/user/view', name: 'View', exact: true, component: UserView },
]

export default routes
