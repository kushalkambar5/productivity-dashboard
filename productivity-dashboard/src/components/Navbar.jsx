import Link from 'react-dom'

export default function Navbar() {
    return (
        <nav className="w-full flex justify-between items-center bg-amber-500 p-4">
            <h1 className="text-xl font-bold">NoteBoard</h1>
            <ul className="flex gap-10">
                <Link href="/"><li>Home</li></Link>
                <Link href="/Login"><li>Login</li></Link>
                <Link href="/SignUp"><li>Sign-Up</li></Link>
            </ul>
        </nav>
    );
}
