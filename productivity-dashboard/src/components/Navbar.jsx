import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="w-full flex justify-between items-center bg-amber-500 p-4">
            <h1 className="text-xl font-bold">NoteBoard</h1>
            <ul className="flex gap-10">
                <Link to="/"><li className='text-white'>Home</li></Link>
                <Link to="/Login"><li className='text-white'>Login</li></Link>
                <Link to="/SignUp"><li className='text-white'>Sign-Up</li></Link>
            </ul>
        </nav>
    );
}