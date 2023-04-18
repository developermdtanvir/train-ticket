import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import SignUp from '../components/SignUp/SignUp'
import Main from '../layout/Main'

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

        ]
    }
])