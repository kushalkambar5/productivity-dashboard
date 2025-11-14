import Login from '../pages/Login';
import SignUp from '../pages/Signup';
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <>
            <div className="min-h-screen flex flex-col justify-center items-center gap-6">
                <h1 className="text-2xl font-bold text-center">
                    Hello Everybody Create your ToDo-Dashboard
                </h1>

                <div className="flex gap-10">
                    <Link to="/Login" className="font-bold text-white text-xl bg-blue-600 px-4 py-2 rounded">Login</Link>
                    <Link to="/SignUp" className="font-bold text-white text-xl bg-yellow-600 px-4 py-2 rounded">Sign-Up</Link>
                </div>
            </div>

        </>
    )
}