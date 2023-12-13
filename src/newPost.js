import React, { useEffect, useState} from 'react';
import './App.css';
import "./styles/styles.css"


function NewPost() {
    const [newPost, setNewPost] = useState(null)
    const [curId, setCurId] = useState(null)

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
        
            await fetch('http://localhost:8080/createpost', requestOptions)
            .then(response => response.text())
            .then(data => setCurId(data))
            
            

        
            
        }

    async function undoPost(){
        console.log(curId)
        const requestOptions = {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json"
            },
            body: JSON.stringify({"id" : String(curId)})
            };
            
            await fetch('http://localhost:8080/deletepost', requestOptions)
            .then(response => {response.text()})
            .then(data => console.log(data))

            }

    return (

    

    <div id="postCreation" style={{width:"100%",height:"auto"}}>
            <form style={{display:"flex", flexDirection: "column", width:"85%", margin:"auto", padding:"2em", paddingTop:"0"}}>
            <label style={{textAlign: "center"}} id="fname"><h2>Post An Ick</h2></label><br></br>
            <textarea rows="0" cols="0" style={{height:"10em",width:"90%",margin:"auto"}} onChange={handleChange}  type="text"></textarea>
            </form> 

            <div style={{"display":"flex","justifyContent":"space-around","margin":"auto","width":"50%"}}>
            <button onClick={() => createPost()}>POST</button>
            <button onClick={() => undoPost()}>UNDO</button>    
            </div>

        </div>

    )


}

export default NewPost