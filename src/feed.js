import React, { useEffect, useState } from 'react';
import './App.css';
import "./styles/styles.css"
import anon from "./images/anon.png"
import { wait } from '@testing-library/user-event/dist/utils';




async function populate()
{
    const response = await fetch("http://localhost:8080/allusers");
    const userFeed = await response.json();
    return (userFeed)
}





//img user date
//content
//favor



function Feed() {
    const [feedData, setFeedData] = React.useState(null);
    const [reRender, setRerender] = React.useState(false);


    async function updateFavor(id, favor){
        const requestOptions = {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ id: id, favor: favor})
        };
    
        await fetch('http://localhost:8080/favor', requestOptions)
    
        setRerender((prev) => !prev)
    }


    const getData = () => {
        console.log('getting feed data')
        console.log('just rerendered')
        populate()
        .then(async (userFeed) => 
        {setFeedData(userFeed.map((obj) => 
            {
            const dt = new Date(obj.date);
            let id = obj._id;
            let curFavor = obj.favor;
            return (
            <div key={id} id="post-container">
            <div id="topRow">
                <img width="50em" src={anon}></img>
                <h4>{dt.toLocaleDateString("en-US")}</h4>
            </div>
            <div id="post-content">
                <p>{obj.content}</p>
            </div>
            <div id="favor-wrapper">
                <div id="favor" style={{float:"right"}}>
                    <button onClick={() => {updateFavor(id,1)}}>Like</button>
                    <p style={{margin:"auto"}}>{obj.favor}</p>
                    <button onClick={() => {updateFavor(id,-1)}}>Dislike</button>
                </div>
            </div>
            </div>
            )
            }
            ))
        })
    }

    React.useEffect(() => {
        getData();
    },[reRender])


    

    return (
        <div>
            <div id="feed">
            <button onClick={() => setRerender((prev) => !prev)}>Refresh</button>
            {feedData}
            </div>
        </div>
        
    )
}


export default Feed;