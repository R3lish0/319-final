import React, { useEffect, useState} from 'react';
import './App.css';
import "./styles/styles.css"


function NewPost() {
    const [newPost, setNewPost] = useState(null)
    const [render, setRerender] = useState(false)

    const handleChange = (e) => {
        setNewPost(e.target.value)
    }


    async function createPost(){
        const requestOptions = {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
            },
            body: JSON.stringify({"content" : newPost})
            };
        
            await fetch('https://final-server-ktxj.onrender.com/createpost', requestOptions)
        
            setRerender((prev) => !prev)
        }

    return (

    

    <div id="postCreation" style={{width:"100%",height:"auto"}}>
            <form style={{display:"flex", flexDirection: "column", width:"85%", margin:"auto", padding:"2em", paddingTop:"0"}}>
            <label style={{textAlign: "center"}} id="fname"><h2>Post An Ick</h2></label><br></br>
            <textarea rows="0" cols="0" style={{height:"10em",width:"90%",margin:"auto"}} onChange={handleChange}  type="text"></textarea>
            </form>   
            <button onClick={() => createPost()}>POST</button>     
        </div>

    )


}

export default NewPost