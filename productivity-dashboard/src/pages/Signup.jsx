function handleSignUpEvent(){

}


export default function SignUp(){
    return (
        <>
            <h1 className="flex justify-center">Sign-Up</h1>
            <br />
            <section className="p-7 w-[400px] mx-auto border-2 rounded-xl border-solid border-amber-50 flex justify-center flex-col items-center">
                <form onSubmit={handleSignUpEvent} className="space-y-20">

                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" placeholder="example@noteboard.com" className="bg-gray-500 rounded-sm" />

                    <br />

                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" className="rounded-xl" />

                    <br />

                    <button>Create Account</button>

                </form>
            </section>
        </>
    )
}
