import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user, GoogleSignIn, signInUserEmailPass } = useContext(AuthProvider);

    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const from = location.state?.from.pathname || '/'
    const handleLogin = e => {

        const { email, password } = e;
        signInUserEmailPass(email, password)
            .then(res => {
                navigate(from, { replace: true })
            });

    }


    const googleLogin = () => {
        GoogleSignIn()
            .then(res => {
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error));
    }


    return (
        <div className=' h-screen flex justify-center items-center'>
            <div className=' space-y-5'>
                <form onSubmit={handleSubmit(handleLogin)} className=" border mx-auto flex flex-col justify-center pl-8 w-80 m-20 space-y-5">
                    <h1 className=" text-4xl font-bold text-center">Login</h1>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input {...register("email")} type="email" name="email" id="email" className=" bg-inherit" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input {...register("password", { pattern: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/, required: true })} type="password" name="password" id="password" />
                    </div>
                    {errors.password?.type === 'required' && <p>Plize Currectly write code</p>}
                    <input type="submit" value="Login" className=' border cursor-pointer text-orange-500' />
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">Or</div>
                </div>
                <div className=' space-y-5'>
                    <button className=" flex items-center space-x-2 border-2 w-full p-2 rounded-full"><FaGoogle className=' text-3xl' /> <span className=' font-bold' onClick={googleLogin}>Continue With Google</span></button>
                    <button className=" flex items-center space-x-2 border-2 w-full p-2 rounded-full"> <FaFacebook className=' text-3xl' /><span className=' font-bold'>Continue with Facebook</span></button>
                </div>
            </div>
        </div>
    )
}

export default Login;