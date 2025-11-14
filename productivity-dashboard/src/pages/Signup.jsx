import { useNavigate } from "react-router-dom";

export default function SignUp(){
    
    const navigate = useNavigate();

    function handleSignUp(e){
        e.preventDefault();
        const fd = new FormData(e.target);

        if (localStorage.getItem(fd.get("email"))) {

            alert("This account already exists! Please Login with this email.")

        }else{

            localStorage.setItem(fd.get("email"), JSON.stringify({
                password: fd.get("password"),
                Note:[
                    //{Heading:      , Content:     }    this will be used on the time of creating or editing notes
                ] 
            }));
            }
            navigate("/Login");
        }

    return (
        <>
            <h1 className="flex justify-center text-5xl">Sign-Up</h1>
            <br />
            <section className="p-7 w-[400px] mx-auto border-2 rounded-xl border-solid border-amber-50 flex justify-center flex-col items-center">
                <form onSubmit={handleSignUp} className="space-y-20">

                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" placeholder="example@noteboard.com" className="rounded-sm border-solid border-black border-2" />

                    <br />

                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" className="rounded-xl border-solid border-black border-2" />

                    <br />

                    <button type="submit" className="rounded-xl border-solid border-black border-2">Create Account</button>

                </form>
            </section>
        </>
    )
}
