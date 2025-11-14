function handleLoginEvent(){

}


export default function Login(){
    return (
        <>
            <h1 className="flex justify-center text-5xl">Login</h1>
            <br />
            <section className="p-7 w-[400px] mx-auto border-2 rounded-xl border-solid border-amber-50 flex justify-center flex-col items-center">
                <form onSubmit={handleLoginEvent} className="space-y-20">

                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" placeholder="example@noteboard.com" className="rounded-sm border-solid border-black border-2" />

                    <br />

                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" className="rounded-xl border-solid border-black border-2" />

                    <br />

                    <button className="rounded-xl border-solid border-black border-2">Login</button>

                </form>
            </section>
        </>
    )
}
