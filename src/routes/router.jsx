import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Search from '../components/Search/Search'
import SignUp from '../components/SignUp/SignUp'
import Main from '../layout/Main'
import PraivetRoute from './PraivetRoute'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/destination',
                element: <PraivetRoute> <Search /></PraivetRoute>
            },

        ]
    }
])