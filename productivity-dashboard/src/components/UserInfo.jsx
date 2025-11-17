import { createRoot } from "react-dom/client";

export default function userInfo(userInfo){
    const userEmail = ;
    const userData = JSON.parse(localStorage.getItem(userEmail));

    function handleAdd(){
        const headingText = document.getElementById("heading").value;
        const contentText = document.getElementById("content").value;
        localStorage.getItem(userEmail).Notes.push([headingText, contentText]);
    }

    return(
        <>
        
            <h1>Your Notes</h1>

            <section>
                <input type="text" placeholder="Heading here" id="heading" />
                <input type="text" placeholder="Content here" id="content" />
                <button onClick={handleAdd}>Add</button>
            </section>
                
            <section className="cards-section">
                
            </section>
        </>
    )
}