/* eslint-disable react-refresh/only-export-components */
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import MainLayout from './layouts/MainLayout/MainLayout'

import { useContext } from 'react'
import { AppContext } from './context/app.context'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Cart from './pages/Cart/Cart'
import UserLayout from './pages/User/layouts/UserLayout/UserLayout'
import ChangePassword from './pages/User/pages/ChangePassword/ChangePassword'
import Profile from './pages/User/pages/Profile/Profile'

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' replace />
}

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '',
      index: true,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/cart',
          element: (
            <MainLayout>
              <Cart />
            </MainLayout>
          )
        },
        {
          path: '/user/profile',
          element: (
            <MainLayout>
              <UserLayout>
                <Profile />
              </UserLayout>
            </MainLayout>
          )
        },
        {
          path: '/user/password',
          element: (
            <MainLayout>
              <UserLayout>
                <ChangePassword />
              </UserLayout>
            </MainLayout>
          )
        },
        {
          path: '/product/:id',
          element: (
            <MainLayout>
              <ProductDetail />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '/',
      element: <RejectedRoute />,
      children: [
        {
          path: '/login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: '/register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    }
  ])
  return routeElement
}
